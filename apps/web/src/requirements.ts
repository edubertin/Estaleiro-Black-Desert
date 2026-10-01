import type { GearState, Project, Stage } from './core/schema.ts';
import { gearLabel, selectGearLevel } from './gear-selector.ts';
import type { RequirementCoverage } from './core/engine.ts';
import { currentCatalog } from './catalog-context.ts';
import { button, element } from './ui.ts';
import { quantityControls } from './quantity-controls.ts';
import { itemVisual, showItemHelp } from './item-content.ts';

export interface RequirementActions {
  material: (id: string, value: number | null) => void;
  equipment: (id: string, value: GearState) => void;
}
function itemName(id: string): string {
  return currentCatalog().items.find(entry => entry.id === id)?.name ?? id;
}
function itemHelp(id: string, name: string): HTMLButtonElement {
  const help = button('i', () => showItemHelp(id, name), 'item-help');
  help.setAttribute('aria-label', `Informações — ${name}`);
  return help;
}
function materialRow(project: Project, item: RequirementCoverage,
  actions: RequirementActions): HTMLElement {
  const row = element('div', 'material-row');
  const name = itemName(item.itemId);
  const labelName = name.startsWith('Licença de Expansão de Navio:') ? 'Licença de expansão' : name;
  const slot = element('div', `material-slot${!item.unknown && !item.missing ? ' material-complete' : ''}`);
  slot.append(itemVisual(item.itemId, 'material'), itemHelp(item.itemId, name),
    quantityControls(name, project.inventory.materials[item.itemId] ?? null,
      value => actions.material(item.itemId, value), item.required));
  const status = element('span', 'material-status',
    item.unknown ? 'Não informado' : item.missing ? `Faltam ${item.missing}` : '✓ Suficiente');
  slot.append(status);
  row.append(element('strong', 'material-name', labelName), slot);
  return row;
}
function gearRow(project: Project, id: string, actions: RequirementActions): HTMLElement {
  const row = element('div', 'gear-slot-row');
  const name = itemName(id);
  const state = project.inventory.equipment[id] ?? 'missing';
  const slot = element('div', `material-slot gear-slot${state === 10 ? ' material-complete' : ''}`);
  const choice = button('', () => selectGearLevel(name, state, value => actions.equipment(id, value)), 'gear-choice');
  choice.dataset.focusKey = `equipment-${id}`;
  choice.setAttribute('aria-label', `${name} — ${state === 'missing' ? 'Não possuo' : state === 'below-10' ? 'Grau a informar' : gearLabel(state)}. Selecionar aprimoramento`);
  choice.setAttribute('aria-haspopup', 'dialog');
  choice.append(itemVisual(id, 'equipment'), element('span', 'gear-enhancement', gearLabel(state)));
  slot.append(choice, itemHelp(id, name));
  row.append(element('strong', 'material-name', name), slot);
  return row;
}
export function renderRequirements(parent: HTMLElement, stage: Stage, project: Project,
  coverage: RequirementCoverage[], actions: RequirementActions): void {
  parent.append(element('h3', '', 'Materiais necessários'));
  const materials = element('div', 'material-list');
  for (const requirement of stage.requirements) {
    const item = coverage.find(entry => entry.itemId === requirement.itemId);
    if (requirement.kind === 'material' && item) materials.append(materialRow(project, item, actions));
  }
  const equipment = element('div', 'equipment-list');
  for (const requirement of stage.requirements)
    if (requirement.kind === 'equipment') equipment.append(gearRow(project, requirement.itemId, actions));
  parent.append(materials, element('h3', '', 'Equipamentos +10'), equipment);
}
