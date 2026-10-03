import { button, element } from './ui.ts';
import './scene-loading.css';
import { createImagePreparer, withinDeadline } from './asset-preparation.ts';

export const prepareImage = createImagePreparer((url: string): Promise<void> => {
  const image = new Image();
  image.src = url;
  return image.decode();
});
async function prepareScene(urls: readonly string[], progress: () => void): Promise<void> {
  let active = true;
  try {
    await withinDeadline(Promise.all(urls.map(url => prepareImage(url).then(() => {
      if (active) progress();
    }))), 15000);
  } finally {
    active = false;
  }
}
function alignLoading(page: HTMLElement, content: HTMLElement): ResizeObserver | undefined {
  const hero = page.querySelector<HTMLElement>('.landing-hero');
  const observer = hero ? new ResizeObserver(() => {
    const bounds = hero.getBoundingClientRect();
    content.style.top = `${bounds.top + bounds.height / 2}px`;
  }) : undefined;
  if (hero) observer?.observe(hero);
  return observer;
}
export function revealPreparedScene(page: HTMLElement, urls: readonly string[], reveal: () => void): () => void {
  const loader = element('div', 'scene-loader');
  const content = element('div', 'scene-loader-content');
  const observer = alignLoading(page, content);
  const label = element('p', '', 'Preparando o Estaleiro');
  label.setAttribute('role', 'status');
  const meter = element('progress'); meter.max = urls.length; meter.value = 0;
  meter.setAttribute('aria-label', 'Imagens preparadas');
  page.classList.add('scene-preparing'); page.inert = true;
  content.append(element('strong', '', 'ESTALEIRO'), label, meter);
  loader.append(content);
  page.after(loader);
  async function load(): Promise<void> {
    meter.value = 0;
    try {
      await prepareScene(urls, () => { meter.value += 1; });
      observer?.disconnect();
      if (!page.isConnected) { loader.remove(); return; }
      loader.remove(); page.classList.remove('scene-preparing'); page.inert = false; reveal();
    } catch (error: unknown) {
      console.error('Falha ao preparar imagens do Estaleiro', error);
      if (!page.isConnected) { observer?.disconnect(); loader.remove(); return; }
      label.textContent = 'Não foi possível preparar a cena. Tente novamente.';
      const retry = button('Tentar novamente', () => { retry.remove(); label.textContent = 'Preparando o Estaleiro'; void load(); });
      content.append(retry);
    }
  }
  void load();
  return (): void => { observer?.disconnect(); loader.remove(); };
}
