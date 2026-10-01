import { z } from 'zod';
import { stagesFrom } from './catalog.ts';
import { projectSchema, type Catalog, type Project, type Stage, type Completion } from './schema.ts';

const backupSchema = z.strictObject({ format: z.union([z.literal(1), z.literal(2)]), project: projectSchema });
export interface StoragePort {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}
const key = 'estaleiro-project-v1';

function validateEntry(stage: Stage, entry: Completion): void {
  const materials = stage.requirements.filter(item => item.kind === 'material');
  const equipment = stage.requirements.filter(item => item.kind === 'equipment');
  if (entry.stageId !== stage.id || Object.keys(entry.materials).length !== materials.length
    || entry.equipment.length !== equipment.length) throw new Error('Histórico divergente');
  for (const item of materials) {
    if (entry.materials[item.itemId] !== item.quantity) throw new Error('Consumo adulterado');
  }
  if (new Set(entry.equipment).size !== equipment.length
    || equipment.some(item => !entry.equipment.includes(item.itemId)))
    throw new Error('Equipamento histórico divergente');
}

export function validateProject(catalog: Catalog, input: unknown): Project {
  const project = projectSchema.parse(input);
  if (project.catalogVersion !== catalog.version) throw new Error('Versão de catálogo incompatível');
  const stages = stagesFrom(catalog, project.destination, project.origin);
  if (project.history.length > stages.length) throw new Error('Histórico excede a rota');
  project.history.forEach((entry, index) => {
    const stage = stages[index];
    if (!stage) throw new Error('Etapa histórica inexistente');
    validateEntry(stage, entry);
  });
  for (const kind of ['material', 'equipment'] as const) {
    const values = kind === 'material' ? project.inventory.materials : project.inventory.equipment;
    for (const id of Object.keys(values)) {
      if (!catalog.items.some(item => item.id === id && item.kind === kind))
        throw new Error('Item de estoque desconhecido');
    }
  }
  return project;
}

export function exportBackup(catalog: Catalog, project: Project): string {
  return JSON.stringify({ format: 2, project: validateProject(catalog, project) });
}

export function importBackup(catalog: Catalog, input: string): Project {
  if (input.length > 1_000_000) throw new Error('Backup excede o limite');
  const parsed: unknown = JSON.parse(input);
  return validateProject(catalog, backupSchema.parse(parsed).project);
}

export function saveProject(storage: StoragePort, catalog: Catalog, project: Project): void {
  storage.setItem(key, exportBackup(catalog, project));
}

export function loadProject(storage: StoragePort, catalog: Catalog): Project | null {
  const stored = storage.getItem(key);
  return stored === null ? null : importBackup(catalog, stored);
}
