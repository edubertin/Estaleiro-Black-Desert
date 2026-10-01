import { timelineNodes } from './core/timeline.ts';
import { journeyCoverage } from './core/engine.ts';
import type { Project } from './core/schema.ts';
import { currentCatalog } from './catalog-context.ts';
import { boatName, ships } from './demo.ts';
import { originImage } from './origin-images.ts';
import { button, element, modal } from './ui.ts';

function imageUrl(id: string): string {
  return ships.find(ship => ship.id === id)?.image ?? originImage(id);
}
export function renderTimeline(parent: HTMLElement, project: Project,
  consult: (stageId: string) => void): void {
  const list = element('ol', 'journey-timeline');
  list.setAttribute('aria-label', 'Evolução dos barcos');
  for (const node of timelineNodes(currentCatalog(), project)) {
    const entry = element('li', node.owned ? 'boat-owned' : '');
    const option = button('', () => {
      if (node.stageId && !node.confirmed) consult(node.stageId);
      else modal(boatName(node.boatId), node.stageId ? 'Evolução já confirmada neste projeto.' : 'Seu plano começou neste barco.');
    }, 'timeline-boat');
    option.setAttribute('aria-label', boatName(node.boatId));
    if (node.owned) option.setAttribute('aria-current', 'step');
    const image = element('img'); image.src = imageUrl(node.boatId); image.alt = '';
    const status = node.owned ? '✓ Seu barco' : node.preparing ? 'Em preparação' : node.confirmed ? '✓ Confirmado' : 'Próxima evolução';
    option.append(image, element('span', 'timeline-name', boatName(node.boatId)),
      element('span', 'timeline-percent', node.coverage === null ? 'Já possuo' : `${Math.round(node.coverage * 100)}%`),
      element('span', 'small muted', status));
    entry.append(option); list.append(entry);
  }
  const overall = element('div', 'journey-overall');
  const progress = element('progress'); progress.max = 1; progress.value = journeyCoverage(currentCatalog(), project);
  progress.setAttribute('aria-label', 'Progresso do projeto');
  const help = button('i', () => modal('Progresso do projeto',
    'Cobertura dos requisitos desde seu barco inicial. Não representa tempo ou custo e não confirma construção automaticamente.'), 'item-help');
  help.setAttribute('aria-label', 'Como o progresso é calculado');
  overall.append(progress, element('span', 'journey-progress-label', `${Math.round(progress.value * 100)}%`), help);
  parent.append(list, overall);
  requestAnimationFrame(() => {
    const owned = list.querySelector<HTMLElement>('.boat-owned');
    if (owned && list.scrollWidth > list.clientWidth)
      list.scrollLeft = Math.max(0, owned.offsetLeft - list.offsetLeft - 16);
  });
}
