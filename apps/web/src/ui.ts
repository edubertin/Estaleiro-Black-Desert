export function element<K extends keyof HTMLElementTagNameMap>(tag: K,
  className = '', value = ''): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  node.className = className;
  node.textContent = value;
  return node;
}
export function button(label: string, action: () => void, className = 'button'): HTMLButtonElement {
  const node = element('button', className, label);
  node.type = 'button';
  node.addEventListener('click', action);
  return node;
}
export function heading(parent: HTMLElement, title: string, detail: string): void {
  parent.append(element('h1', '', title), element('p', 'intro', detail));
}
export function shipImage(source: string, name: string): HTMLImageElement {
  const image = element('img', 'ship-image');
  image.src = source;
  image.alt = `Carraca ${name}`;
  return image;
}
export function modal(title: string, body: string,
  action?: { label: string; run: () => void }): void {
  const dialog = element('dialog', 'dialog');
  dialog.append(element('h2', '', title), element('p', '', body));
  const actions = element('div', 'actions');
  if (action) actions.append(button(action.label, () => { action.run(); dialog.close(); }));
  actions.append(button(action ? 'Cancelar' : 'Voltar', () => dialog.close(), 'button secondary'));
  dialog.append(actions);
  dialog.addEventListener('close', () => dialog.remove());
  document.body.append(dialog);
  dialog.showModal();
}
