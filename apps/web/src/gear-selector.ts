import type { GearState } from './core/schema.ts';
import { button, element } from './ui.ts';

export function gearLabel(state: GearState): string {
  return typeof state === 'number' ? `+${state}` : state === 'below-10' ? '+?' : '—';
}

export function selectGearLevel(name: string, state: GearState,
  change: (value: GearState) => void): void {
  const dialog = element('dialog', 'dialog gear-dialog');
  const previous = document.activeElement;
  const options = element('div', 'gear-levels');
  options.setAttribute('role', 'group'); options.setAttribute('aria-label', 'Grau de aprimoramento');
  const values: GearState[] = ['missing', ...Array.from({ length: 11 }, (_, index) => index)];
  for (const value of values) {
    const label = value === 'missing' ? 'Não possuo' : gearLabel(value);
    const option = button(label, () => { dialog.close(); change(value); }, 'gear-level');
    option.setAttribute('aria-pressed', String(state === value)); options.append(option);
  }
  dialog.append(element('h2', '', name));
  if (state === 'below-10') dialog.append(element('p', 'muted', 'Informe o grau da peça registrado anteriormente como abaixo de +10.'));
  dialog.append(options, button('Cancelar', () => dialog.close(), 'button secondary'));
  dialog.addEventListener('close', () => { dialog.remove(); if (previous instanceof HTMLElement) previous.focus(); });
  dialog.addEventListener('click', event => { if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  document.body.append(dialog); dialog.showModal();
}
