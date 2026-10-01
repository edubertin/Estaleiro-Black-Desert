import { stagesFrom } from './catalog.ts';
import { quantitySchema, gearSchema, type Catalog, type Completion,
  type Inventory, type Project, type Requirement, type Stage } from './schema.ts';

export interface RequirementCoverage {
  itemId: string;
  required: number;
  allocated: number;
  missing: number;
  unknown: boolean;
}
export interface StageCoverage {
  stageId: string;
  requirements: RequirementCoverage[];
  coverage: number;
  ready: boolean;
}

export function createProject(catalog: Catalog, destination: string, origin: string): Project {
  stagesFrom(catalog, destination, origin);
  return { catalogVersion: catalog.version, destination, origin,
    inventory: { materials: {}, equipment: {} }, history: [] };
}

export function pendingStages(catalog: Catalog, project: Project): Stage[] {
  return stagesFrom(catalog, project.destination, project.origin).slice(project.history.length);
}

function allocate(requirement: Requirement, stock: Inventory): RequirementCoverage {
  const id = requirement.itemId;
  const required = requirement.kind === 'material' ? requirement.quantity : 1;
  const available = requirement.kind === 'material' ? stock.materials[id]
    : stock.equipment[id] === 10 ? 1 : 0;
  const allocated = Math.min(available ?? 0, required);
  if (requirement.kind === 'material' && available != null)
    stock.materials[id] = available - allocated;
  if (requirement.kind === 'equipment' && allocated === 1) stock.equipment[id] = 'missing';
  return { itemId: id, required, allocated, missing: required - allocated,
    unknown: requirement.kind === 'material' && available == null };
}

export function calculate(catalog: Catalog, project: Project): StageCoverage[] {
  const stock = structuredClone(project.inventory);
  return pendingStages(catalog, project).map(stage => {
    const requirements = stage.requirements.map(requirement => allocate(requirement, stock));
    const coverage = requirements.reduce((sum, item) => sum + item.allocated / item.required, 0)
      / requirements.length;
    return { stageId: stage.id, requirements, coverage,
      ready: requirements.every(item => item.missing === 0) };
  });
}

export function journeyCoverage(catalog: Catalog, project: Project): number {
  const stages = stagesFrom(catalog, project.destination, project.origin);
  const total = stages.reduce((sum, stage) => sum + stage.requirements.length, 0);
  if (total === 0) return 1;
  const completed = stages.slice(0, project.history.length)
    .reduce((sum, stage) => sum + stage.requirements.length, 0);
  const available = calculate(catalog, project).flatMap(stage => stage.requirements)
    .reduce((sum, item) => sum + item.allocated / item.required, 0);
  return (completed + available) / total;
}

function ensureItem(catalog: Catalog, itemId: string, kind: 'material' | 'equipment'): void {
  if (!catalog.items.some(item => item.id === itemId && item.kind === kind))
    throw new Error('Item desconhecido ou incompatível');
}

export function setMaterial(catalog: Catalog, project: Project,
  itemId: string, input: unknown): Project {
  ensureItem(catalog, itemId, 'material');
  const quantity = quantitySchema.nullable().parse(input);
  return { ...project, inventory: { ...project.inventory,
    materials: { ...project.inventory.materials, [itemId]: quantity } } };
}

export function setEquipment(catalog: Catalog, project: Project,
  itemId: string, input: unknown): Project {
  ensureItem(catalog, itemId, 'equipment');
  const state = gearSchema.parse(input);
  return { ...project, inventory: { ...project.inventory,
    equipment: { ...project.inventory.equipment, [itemId]: state } } };
}

function debit(stage: Stage, inventory: Inventory): Completion {
  const entry: Completion = { stageId: stage.id, materials: {}, equipment: [] };
  for (const requirement of stage.requirements) {
    const id = requirement.itemId;
    if (requirement.kind === 'material') {
      inventory.materials[id] = (inventory.materials[id] ?? 0) - requirement.quantity;
      entry.materials[id] = requirement.quantity;
    } else {
      inventory.equipment[id] = 'missing';
      entry.equipment.push(id);
    }
  }
  return entry;
}

export function confirmStage(catalog: Catalog, project: Project): Project {
  const stage = pendingStages(catalog, project)[0];
  if (!stage || !calculate(catalog, project)[0]?.ready)
    throw new Error('Etapa indisponível para confirmar');
  const inventory = structuredClone(project.inventory);
  const entry = debit(stage, inventory);
  return { ...project, inventory, history: [...project.history, entry] };
}

export function undoStage(project: Project): Project {
  const entry = project.history.at(-1);
  if (!entry) throw new Error('Não há etapa para desfazer');
  const inventory = structuredClone(project.inventory);
  for (const [id, amount] of Object.entries(entry.materials)) {
    if (inventory.materials[id] == null) throw new Error('Estoque desconhecido: informe antes de desfazer');
    inventory.materials[id] = quantitySchema.parse(inventory.materials[id] + amount);
  }
  for (const id of entry.equipment) {
    if (inventory.equipment[id] !== 'missing') throw new Error('Equipamento editado: resolva antes de desfazer');
    inventory.equipment[id] = 10;
  }
  return { ...project, inventory, history: project.history.slice(0, -1) };
}

export function changeDestination(catalog: Catalog, project: Project,
  destination: string, origin: string): Project {
  const stages = stagesFrom(catalog, destination, origin);
  const history = project.history.filter((entry, index) => {
    const previous = stagesFrom(catalog, project.destination, project.origin)[index];
    return JSON.stringify(stages[index]) === JSON.stringify(previous) && entry.stageId === previous?.id;
  });
  if (history.length !== project.history.length)
    throw new Error('Histórico incompatível: use o barco atual como origem de um novo plano');
  return { ...project, destination, origin, history };
}
