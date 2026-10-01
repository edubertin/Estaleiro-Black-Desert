import { calculate, pendingStages } from './core/engine.ts';
import { stagesFrom } from './core/catalog.ts';
import type { Project, Stage } from './core/schema.ts';
import { boatName, ships } from './demo.ts';
import { currentCatalog } from './catalog-context.ts';
import { button, element, modal, shipImage } from './ui.ts';
import { renderRequirements, type RequirementActions } from './requirements.ts';
import { renderTimeline } from './journey-timeline.ts';

export interface JourneyActions extends RequirementActions {
  confirm: () => void;
  undo: () => void;
  change: () => void;
}
function renderFuture(parent: HTMLElement, stage: Stage, back: () => void): void {
  parent.append(element('h3', '', `Materiais necessários · ${boatName(stage.to)}`));
  const list = element('div', 'future-materials');
  for (const requirement of stage.requirements) {
    const name = currentCatalog().items.find(item => item.id === requirement.itemId)?.name ?? requirement.itemId;
    list.append(element('p', 'item-slot', requirement.kind === 'material'
      ? `${name} · ${requirement.quantity}` : `${name} · +10`));
  }
  parent.append(element('p', 'small muted', 'Consulta da próxima evolução'), list,
    button('← Etapa atual', back, 'button secondary'));
}
function renderCurrent(parent: HTMLElement, project: Project, actions: JourneyActions): void {
  const stage = pendingStages(currentCatalog(), project)[0];
  const coverage = calculate(currentCatalog(), project)[0];
  if (!stage || !coverage) return;
  renderRequirements(parent, stage, project, coverage.requirements, actions);
  const confirm = button('Confirmar evolução', () => modal('Registrar expansão?',
    'Confirme apenas depois de expandir no jogo. Os materiais e equipamentos desta etapa serão descontados do estoque registrado.',
    { label: 'Confirmar e avançar', run: actions.confirm }));
  confirm.disabled = !coverage.ready; confirm.dataset.confirm = 'true';
  const controls = element('div', 'actions journey-actions');
  controls.append(button('Trocar destino', actions.change, 'help'));
  if (project.history.length) controls.append(button('Desfazer', actions.undo, 'button secondary'));
  controls.append(confirm); parent.append(controls);
}
function renderCelebration(parent: HTMLElement, project: Project): void {
  const ship = ships.find(item => item.id === project.destination);
  if (!ship) throw new Error('Carraca não encontrada');
  const celebration = element('section', 'completion');
  celebration.append(shipImage(ship.image, ship.name),
    element('h1', '', 'Parabéns, você concluiu sua carraca!'), element('h2', '', ship.name));
  parent.append(celebration);
}
export function renderJourney(parent: HTMLElement, project: Project, actions: JourneyActions): void {
  const pending = pendingStages(currentCatalog(), project);
  if (!pending.length) { renderCelebration(parent, project); return; }
  const workspace = element('section', 'workspace');
  const consult = (id: string): void => {
    workspace.replaceChildren();
    const stage = stagesFrom(currentCatalog(), project.destination, project.origin).find(item => item.id === id);
    if (!stage) throw new Error('Etapa desconhecida');
    if (stage.id === pending[0]?.id) renderCurrent(workspace, project, actions);
    else renderFuture(workspace, stage, () => { workspace.replaceChildren(); renderCurrent(workspace, project, actions); });
  };
  renderTimeline(parent, project, consult);
  renderCurrent(workspace, project, actions); parent.append(workspace);
}
