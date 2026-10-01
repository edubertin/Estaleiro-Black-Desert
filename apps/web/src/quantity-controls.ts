import { button, element } from './ui.ts';

export function adjustQuantity(value: number | null, delta: -1 | 1): number | null {
  if (value === null && delta === -1) return null;
  return Math.min(Number.MAX_SAFE_INTEGER, Math.max(0, (value ?? 0) + delta));
}

export function quantityControls(name: string, value: number | null,
  change: (value: number | null) => void, required?: number): HTMLElement {
  const controls = element('div', 'quantity-controls');
  const decrease = button('−', () => change(adjustQuantity(value, -1)), 'quantity-step');
  decrease.setAttribute('aria-label', `Diminuir — ${name}`);
  decrease.disabled = value === null || value === 0;
  const input = element('input', 'quantity');
  input.type = 'number'; input.min = '0'; input.step = '1';
  input.max = String(Number.MAX_SAFE_INTEGER);
  input.value = value === null ? '' : String(value);
  input.placeholder = '—'; input.inputMode = 'numeric';
  input.setAttribute('aria-label', `Tenho — ${name}`);
  input.addEventListener('input', () => {
    input.setAttribute('aria-invalid', String(!input.checkValidity()));
    if (!input.checkValidity()) { input.reportValidity(); return; }
    change(input.value === '' ? null : Number(input.value));
  });
  const increase = button('+', () => change(adjustQuantity(value, 1)), 'quantity-step');
  increase.setAttribute('aria-label', `Aumentar — ${name}`);
  increase.disabled = value === Number.MAX_SAFE_INTEGER;
  const amount = element('div', 'quantity-amount');
  amount.append(input);
  if (required !== undefined) amount.append(element('span', 'quantity-required', `/ ${required}`));
  controls.append(decrease, amount, increase);
  return controls;
}
