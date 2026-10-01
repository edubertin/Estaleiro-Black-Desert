import { shipProfile } from '../../../content/sa-ship-profiles.ts';
import { button, element, shipImage } from './ui.ts';

function information(id: string): HTMLElement {
  const profile = shipProfile(id);
  const panel = element('section', 'ship-profile');
  const title = element('h2', '', profile.name); title.id = 'ship-details-title';
  panel.append(title, element('p', 'intro', profile.summary));
  const facts = element('dl', 'ship-facts');
  for (const [label, value] of [['Especialidade', profile.focus], ['Evolui de', profile.precursor]])
    facts.append(element('dt', '', label), element('dd', '', value));
  const detail = element('details');
  detail.append(element('summary', '', 'Mais informações'));
  detail.append(element('p', '', 'Atributos finais dependem de equipamentos, marinheiros e habilidades. Valores numéricos base ainda estão em conferência SA.'));
  const link = element('a', 'help', 'Guia oficial SA ↗'); link.href = profile.source;
  link.target = '_blank'; link.rel = 'noopener noreferrer';
  detail.append(link, element('p', 'small muted', `Fonte consultada em ${profile.checked}. As imagens exibem skins de referência.`));
  panel.append(facts, element('p', '', profile.advice), detail);
  return panel;
}

export function showShipDetails(id: string, image: string, select: (id: string) => void): void {
  if (document.querySelector('.ship-details')) return;
  const origin = document.activeElement;
  const dialog = element('dialog', 'dialog ship-details');
  dialog.setAttribute('aria-labelledby', 'ship-details-title');
  const close = (): void => { dialog.classList.add('closing'); setTimeout(() => dialog.close(), 200); };
  const dismiss = button('×', close, 'close-dialog'); dismiss.setAttribute('aria-label', 'Fechar apresentação');
  const visual = element('div', 'ship-preview');
  visual.style.setProperty('--ship-scale', String(shipProfile(id).imageScale));
  visual.append(shipImage(image, shipProfile(id).name));
  const panel = information(id);
  panel.append(button('Escolher esta carraca', () => { dialog.close(); select(id); }));
  dialog.append(dismiss, visual, panel);
  dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right
      || event.clientY < box.top || event.clientY > box.bottom)) close();
  });
  dialog.addEventListener('close', () => { dialog.remove(); if (origin instanceof HTMLElement && origin.isConnected) origin.focus(); });
  document.body.append(dialog); dialog.showModal(); dismiss.focus();
}
