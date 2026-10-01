import { currentCatalog } from './catalog-context.ts';
import { saEditorialCatalog } from './content/sa-editorial.ts';
import { saObtainmentEvidence } from './content/sa-obtainment.ts';
import { button, element } from './ui.ts';

const icons = import.meta.glob<string>('../../../assets/itens/originais/*.png',
  { eager: true, query: '?url', import: 'default' });
const illustratedIcons = import.meta.glob<string>('../../../assets/itens/ilustrados/*-v1.png',
  { eager: true, query: '?url', import: 'default' });

export function itemVisual(id: string, kind: 'material' | 'equipment'): HTMLElement {
  const visual = element('span', `item-visual ${kind}`);
  visual.setAttribute('aria-hidden', 'true');
  const illustration = illustratedIcons[`../../../assets/itens/ilustrados/${id}-v1.png`];
  const icon = currentCatalog().illustrative ? null : illustration ?? icons[`../../../assets/itens/originais/${id}.png`];
  if (illustration && icon) visual.classList.add('illustrated-icon');
  if (icon) {
    const image = element('img'); image.src = icon; image.alt = ''; visual.append(image);
  } else {
    visual.textContent = kind === 'equipment' ? '+10' : '◇';
    visual.title = currentCatalog().illustrative ? 'Marcador ilustrativo' : 'Ícone indisponível';
  }
  const item = saEditorialCatalog.items.find(entry => entry.id === id);
  if (item?.quality) visual.classList.add(`quality-${item.quality}`);
  if (kind === 'equipment' && icon) visual.append(element('span', 'enhancement-badge', '+10'));
  return visual;
}

function helpContent(id: string): HTMLElement {
  const content = element('div');
  const item = saEditorialCatalog.items.find(entry => entry.id === id);
  if (!item || currentCatalog().illustrative) {
    content.append(element('p', '', 'Item ilustrativo para testar a interface.'));
    return content;
  }
  if (item.kind === 'equipment') content.append(element('p', '',
    `${item.quality === 'blue' ? 'Peça de grau azul. ' : ''}Exige +10 e durabilidade máxima no jogo.`));
  if (item.aliases.length) content.append(element('p', 'muted small', `Também conhecido como: ${item.aliases.join(', ')}.`));
  for (const evidence of saObtainmentEvidence.filter(entry => entry.itemId === id)) {
    content.append(element('p', '', evidence.note));
    if (evidence.inputs.length) content.append(element('p', 'muted small',
      `Insumos citados: ${evidence.inputs.map(input => `${input.observedName} ×${input.quantity}`).join('; ')}.`));
  }
  appendSource(content, item.sourceId, item.checkedAt);
  return content;
}

function appendSource(parent: HTMLElement, sourceId: string, date: string): void {
  const source = saEditorialCatalog.sources.find(entry => entry.id === sourceId);
  if (!source) throw new Error('Fonte editorial inexistente');
  const link = element('a', 'help', 'Consultar fonte oficial ↗');
  link.href = source.url; link.target = '_blank'; link.rel = 'noopener noreferrer';
  parent.append(link, element('p', 'muted small', `Conferido nas fontes em ${date}.`));
}

export function showItemHelp(id: string, name: string): void {
  const dialog = element('dialog', 'dialog');
  dialog.append(element('h2', '', name), helpContent(id),
    button('Voltar', () => dialog.close(), 'button secondary'));
  dialog.addEventListener('close', () => dialog.remove());
  document.body.append(dialog); dialog.showModal();
}
