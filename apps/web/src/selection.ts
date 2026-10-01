import { boatName, ships, shipAliases } from './demo.ts';
import { currentCatalog } from './catalog-context.ts';
import { button, element, shipImage } from './ui.ts';
import { originImage } from './origin-images.ts';
import { compatibleOrigins } from './core/origins.ts';
import { showShipDetails } from './ship-details.ts';
import { shipProfile } from '../../../content/sa-ship-profiles.ts';

export function renderSelection(parent: HTMLElement, select: (id: string) => void): void {
  const grid = element('div', 'ship-grid');
  grid.setAttribute('aria-label', 'Escolher carraca');
  for (const ship of ships) {
    const card = button('', () => showShipDetails(ship.id, ship.image, select), 'ship-card');
    card.style.setProperty('--ship-scale', String(shipProfile(ship.id).imageScale));
    card.setAttribute('aria-label', ship.name);
    const aliases = shipAliases[ship.id];
    if (aliases) card.title = `Também chamada ${aliases.join(', ')}`;
    const image = shipImage(ship.image, ship.name); image.alt = '';
    card.append(image, element('span', 'ship-name', ship.name));
    grid.append(card);
  }
  parent.append(grid);
}
export function renderOrigin(parent: HTMLElement, destination: string,
  start: (origin: string) => void, back: () => void): void {
  parent.append(element('h1', 'origin-title', 'Qual barco você tem?'));
  const list = element('div', 'origin-gallery');
  list.setAttribute('aria-label', 'Seu barco atual');
  let selected: string | null = null;
  const next = button('Continuar', () => { if (selected) start(selected); });
  next.disabled = true;
  const choose = (id: string, option: HTMLButtonElement): void => {
    selected = id;
    list.querySelectorAll('button').forEach(entry => entry.setAttribute('aria-pressed', 'false'));
    option.setAttribute('aria-pressed', 'true');
    next.disabled = false;
  };
  for (const origin of compatibleOrigins(currentCatalog(), destination)) {
    const option = button('', () => choose(origin.id, option), 'origin-ship');
    option.setAttribute('aria-label', boatName(origin.id));
    const image = element('img', 'origin-image'); image.src = originImage(origin.id); image.alt = '';
    option.append(image, element('span', 'origin-name', boatName(origin.id)));
    option.append(element('span', 'origin-marker', origin.improved ? 'Melhorado' : ''));
    option.setAttribute('aria-pressed', 'false'); list.append(option);
  }
  const actions = element('div', 'actions origin-actions');
  const previous = button('←', back, 'button secondary origin-back');
  previous.setAttribute('aria-label', 'Voltar às carracas'); previous.title = 'Voltar às carracas';
  actions.append(previous, next);
  parent.append(list, actions);
}
