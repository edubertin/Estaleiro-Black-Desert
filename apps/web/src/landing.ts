import './landing.css';
import { button, element, modal } from './ui.ts';
import { creatorFooter } from './footer.ts';

function navigation(onEnter: () => void): HTMLElement {
  const header = element('header', 'landing-header');
  const nav = element('nav', 'landing-nav');
  nav.setAttribute('aria-label', 'Navegação principal');
  const home = button('Início', () => window.scrollTo({ top: 0, behavior: 'instant' }), 'landing-nav-item active');
  home.setAttribute('aria-current', 'page');
  nav.append(home, button('Estaleiro', onEnter, 'landing-nav-item'),
    button('Guias', () => modal('Guia de produção', 'Escolha sua carraca e informe seu barco atual. Na produção, registre os materiais e o grau dos equipamentos. Confirme cada evolução quando estiver pronto.'), 'landing-nav-item'),
    button('Sobre', () => modal('Estaleiro Black Desert', 'Um projeto da comunidade criado por edubertin para acompanhar a construção de carracas no Black Desert PC, SA. O progresso fica salvo no seu navegador. Projeto independente, sem vínculo oficial com Pearl Abyss.'), 'landing-nav-item'));
  header.append(nav);
  return header;
}

function productionButton(onEnter: () => void, hasProject: boolean): HTMLButtonElement {
  const control = button('', onEnter, 'landing-production');
  const label = hasProject ? 'Continuar produção' : 'Produção de carracas';
  control.setAttribute('aria-label', label); control.title = label;
  const icon = element('span', 'landing-wheel'); icon.append(element('span', 'landing-wheel-art'));
  control.append(icon);
  return control;
}

function trackVisibility(page: HTMLElement): () => void {
  function update(): void {
    page.classList.toggle('landing-motion-paused', document.hidden);
  }
  document.addEventListener('visibilitychange', update);
  update();
  return () => document.removeEventListener('visibilitychange', update);
}

export function renderLanding(parent: HTMLElement, onEnter: () => void, hasProject: boolean): () => void {
  const page = element('div', 'landing-page');
  const hero = element('main', 'landing-hero');
  const title = element('h1', 'landing-screen-reader', 'Estaleiro Black Desert');
  const image = element('img', 'landing-art');
  image.src = '/landing-background-v2.png'; image.alt = 'Costa e oceano ao pôr do sol';
  image.width = 1730; image.height = 909; image.fetchPriority = 'high';
  const light = element('div', 'landing-sunlight'); light.setAttribute('aria-hidden', 'true');
  const atmosphere = element('div', 'landing-atmosphere'); atmosphere.setAttribute('aria-hidden', 'true');
  const reflection = element('div', 'landing-reflection'); reflection.setAttribute('aria-hidden', 'true');
  const weather = element('div', 'landing-weather'); weather.setAttribute('aria-hidden', 'true');
  weather.append(element('div', 'landing-mist'), element('div', 'landing-rays'), element('div', 'landing-water-shimmer'));
  const ship = element('img', 'landing-foreground-ship');
  ship.src = '/landing-ship.png'; ship.alt = 'Carraca dourada';
  ship.width = 1730; ship.height = 909;
  const logo = element('img', 'landing-floating-logo');
  logo.src = '/landing-logo.png'; logo.alt = 'Estaleiro Black Desert';
  const cleanup = trackVisibility(page);
  hero.append(title, image, light, atmosphere, reflection, weather, distantShip('green'), distantShip('red'), ship, element('div', 'landing-foam'), logo, element('div', 'landing-logo-reflection'), menuControls(onEnter, hasProject));
  const caption = element('div', 'landing-caption-strip');
  caption.setAttribute('aria-hidden', 'true');
  caption.append(element('span', 'landing-production-caption caption-production', 'PRODUÇÃO DE CARRACAS'), element('span', 'landing-production-caption caption-sailors', 'GERIR MARINHEIRO'), element('span', 'landing-production-caption caption-accessories', 'ACESSÓRIOS'));
  page.append(navigation(onEnter), hero, caption, creatorFooter());
  parent.append(page);
  return cleanup;
}
function distantShip(color: 'green' | 'red'): HTMLImageElement {
  const ship = element('img', `landing-distant-ship landing-distant-${color}`);
  ship.src = `/landing-ship-${color}.png`;
  ship.alt = '';
  ship.width = 1730; ship.height = 909;
  return ship;
}
function bindMenuCaption(control: HTMLButtonElement, name: string): void {
  control.dataset.menuCaption = name;
  function update(): void {
    const page = control.closest<HTMLElement>('.landing-page');
    if (page) page.dataset.activeMenu = name;
  }
  function clear(): void {
    const page = control.closest<HTMLElement>('.landing-page');
    if (page?.dataset.activeMenu === name) delete page.dataset.activeMenu;
  }
  control.addEventListener('pointerenter', update);
  control.addEventListener('focus', update);
  control.addEventListener('pointerleave', clear);
  control.addEventListener('blur', clear);
}
function menuControls(onEnter: () => void, hasProject: boolean): HTMLElement {
  const controls = element('div', 'landing-menu-controls');
  const sailors = button('', () => modal('Gerir Marinheiro', 'O gerenciador de marinheiros está em preparação.'), 'landing-sailors');
  sailors.setAttribute('aria-label', 'Gerir Marinheiro');
  const portrait = element('span', 'landing-sailors-art');
  portrait.setAttribute('aria-hidden', 'true');
  sailors.append(portrait);
  const accessories = button('', () => modal('Acessórios', 'A seção de acessórios está em preparação.'), 'landing-accessories');
  accessories.setAttribute('aria-label', 'Acessórios');
  const crystal = element('span', 'landing-accessories-art');
  crystal.setAttribute('aria-hidden', 'true');
  accessories.append(crystal);
  const production = productionButton(onEnter, hasProject);
  bindMenuCaption(production, 'production');
  bindMenuCaption(sailors, 'sailors');
  bindMenuCaption(accessories, 'accessories');
  controls.append(production, sailors, accessories);
  return controls;
}
