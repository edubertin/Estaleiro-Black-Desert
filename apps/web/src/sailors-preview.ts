import { expandedSailors } from './sailors-expansion.ts';
import './sailors-preview.css';
import './sailors-expansion.css';
import portraitUrl from '../../../assets/marinheiros/preview/puro-retrato-v1.png';
import { prepareImage, revealPreparedScene } from './scene-loading.ts';
import bodyUrl from '../../../assets/marinheiros/preview/puro-corpo-luz-ambar-v2.png';
import blinkUrl from '../../../assets/marinheiros/preview/puro-olhos-fechados-v1.png';
import realisticPortraitUrl from '../../../assets/marinheiros/preview/realistic-59060-retrato-v1.png';
import realisticBodyUrl from '../../../assets/marinheiros/preview/realistic-59060-corpo-v2.png';
import realisticBlinkUrl from '../../../assets/marinheiros/preview/realistic-59060-olhos-fechados-v1.png';
import confidentPortraitUrl from '../../../assets/marinheiros/preview/confiante-59061-retrato-v1.png';
import confidentBodyUrl from '../../../assets/marinheiros/preview/confiante-59061-corpo-v2.png';
import confidentBlinkUrl from '../../../assets/marinheiros/preview/confiante-59061-olhos-fechados-v1.png';
import quickPortraitUrl from '../../../assets/marinheiros/preview/rapido-59057-retrato-v1.png';
import quickBodyUrl from '../../../assets/marinheiros/preview/rapido-59057-corpo-v1.png';
import quickBlinkUrl from '../../../assets/marinheiros/preview/rapido-59057-olhos-fechados-v1.png';
import curiousPortraitUrl from '../../../assets/marinheiros/preview/curioso-59067-retrato-v1.png';
import curiousBodyUrl from '../../../assets/marinheiros/preview/curioso-59067-corpo-v1.png';
import curiousBlinkUrl from '../../../assets/marinheiros/preview/curioso-59067-olhos-fechados-v1.png';
import calculatingPortraitUrl from '../../../assets/marinheiros/preview/calculista-59058-retrato-v1.png';
import calculatingBodyUrl from '../../../assets/marinheiros/preview/calculista-59058-corpo-v1.png';
import calculatingBlinkUrl from '../../../assets/marinheiros/preview/calculista-59058-olhos-fechados-v1.png';
import experiencedPortraitUrl from '../../../assets/marinheiros/preview/experiente-59066-retrato-v1.png';
import experiencedBodyUrl from '../../../assets/marinheiros/preview/experiente-59066-corpo-v1.png';
import experiencedBlinkUrl from '../../../assets/marinheiros/preview/experiente-59066-olhos-fechados-v1.png';
import treasurePortraitUrl from '../../../assets/marinheiros/preview/tesouro-59059-retrato-v1.png';
import treasureBodyUrl from '../../../assets/marinheiros/preview/tesouro-59059-corpo-v1.png';
import treasureBlinkUrl from '../../../assets/marinheiros/preview/tesouro-59059-olhos-fechados-v1.png';
import tavernUrl from '../../../assets/marinheiros/preview/taverna-fundo-v1.png';
import tenaciousPortraitUrl from '../../../assets/marinheiros/preview/persistente-59062-retrato-v1.png';
import tenaciousBodyUrl from '../../../assets/marinheiros/preview/persistente-59062-corpo-v1.png';
import tenaciousBlinkUrl from '../../../assets/marinheiros/preview/persistente-59062-olhos-fechados-v1.png';
import { element, button } from './ui.ts';
import { puroLevelTen, realisticLevelTen, confidentLevelTen, quickLevelTen, curiousLevelTen, calculatingLevelTen, experiencedLevelTen, treasureLevelTen, tenaciousLevelTen, type SailorAttributeRange, type SailorPreviewProfile } from './content/sailors-preview-data.ts';

const sailors: SailorPreviewProfile[] = [{
  ...puroLevelTen, name: 'Puro', sourceName: 'Innocent',
  facts: [['Saúde', '40'], ['Alimentação', '150'], ['Cabine', '10'], ['Peso', '200 LT']],
  summary: 'Um companheiro para velocidade',
  description: 'Goblin indicado para composições de velocidade. A função a bordo também influencia o resultado.',
  links: [['Referência oficial SA · Puro', 'https://www.sa.playblackdesert.com/pt-BR/News/Detail?groupContentNo=7057']],
  portraitUrl, bodyUrl, blinkUrl, figureClass: 'sailor-puro',
  imageDescription: 'Puro, marinheiro goblin de frente com braços cruzados',
}, {
  ...realisticLevelTen, name: 'Realista', sourceName: 'Realistic',
  facts: [['Saúde', '80'], ['Alimentação', '100'], ['Cabine', '10'], ['Peso', '300 LT']],
  summary: 'Um companheiro para manobra e combate',
  description: 'Anão com destaque para rotação e ângulo de tiro. A função a bordo modifica sua contribuição. A correspondência visual ainda está em conferência; a parte inferior da arte foi completada a partir do retrato.',
  links: [
    ['Nome oficial SA · Realista', 'https://www.sa.playblackdesert.com/Pt-BR/News/Detail?groupContentNo=7829'],
    ['BDO Codex · Português', 'https://bdocodex.com/pt/sailor/59060/'],
    ['Referência visual comunitária', 'https://infopixservice-debug.github.io/sailor/'],
    ['Comunidade coreana · Inven', 'https://www.inven.co.kr/board/black/3584/56288'],
  ],
  portraitUrl: realisticPortraitUrl, bodyUrl: realisticBodyUrl, blinkUrl: realisticBlinkUrl,
  figureClass: 'sailor-realistic', imageDescription: 'Realista, marinheiro anão de frente com gorro marrom e gola de pele',
}, {
  ...confidentLevelTen, name: 'Confiante', sourceName: 'Confident',
  facts: [['Saúde', '80'], ['Alimentação', '100'], ['Cabine', '5'], ['Peso', '300 LT']],
  summary: 'Um companheiro para manobra',
  description: 'Anão com destaque para rotação e frenagem. A função a bordo modifica sua contribuição. Nome português identificado no Codex; aparência corporal completada a partir do retrato do jogo.',
  links: [
    ['BDO Codex · Português', 'https://bdocodex.com/pt/sailor/59061/'],
    ['Referência visual comunitária', 'https://infopixservice-debug.github.io/sailor/'],
  ],
  portraitUrl: confidentPortraitUrl, bodyUrl: confidentBodyUrl, blinkUrl: confidentBlinkUrl,
  figureClass: 'sailor-confident', imageDescription: 'Confiante, marinheiro anão de frente com barba preta longa e gorro escuro',
}, {
  ...quickLevelTen, name: 'Rápido', sourceName: 'Quick',
  facts: [['Saúde', '80'], ['Alimentação', '100'], ['Cabine', '10'], ['Peso', '250 LT']],
  summary: 'Um companheiro para aceleração e alcance',
  description: 'Goblin com destaque para aceleração e alcance dos canhões. A função a bordo modifica sua contribuição. Limites comunitários ainda pendentes de confirmação SA e de revisão de patch. Parte inferior da arte completada a partir do retrato.',
  links: [
    ['Nome SA · Rápido', 'https://www.sa.playblackdesert.com/pt-BR/News/Detail?groupContentNo=7057'],
    ['Referência visual comunitária', 'https://infopixservice-debug.github.io/sailor/'],
  ],
  portraitUrl: quickPortraitUrl, bodyUrl: quickBodyUrl, blinkUrl: quickBlinkUrl,
  figureClass: 'sailor-quick', imageDescription: 'Rápido, marinheiro goblin de frente com olhos grandes, orelhas caídas e pequeno tufo preto',
}, {
  ...curiousLevelTen, name: 'Muito Curioso', sourceName: 'Curious',
  facts: [['Saúde', '100'], ['Alimentação', '100'], ['Cabine', '10'], ['Peso', '300 LT']],
  summary: 'Um companheiro para precisão e frenagem',
  description: 'Humano com destaque para precisão dos canhões e frenagem. A função a bordo modifica sua contribuição. Limites comunitários de nível 10 pendentes de confirmação SA. Roupa inferior completada artisticamente a partir do retrato.',
  links: [
    ['BDO Codex · Muito Curioso', 'https://bdocodex.com/pt/sailor/59067/'],
    ['Referência visual comunitária', 'https://infopixservice-debug.github.io/sailor/'],
  ],
  portraitUrl: curiousPortraitUrl, bodyUrl: curiousBodyUrl, blinkUrl: curiousBlinkUrl,
  figureClass: 'sailor-curious', imageDescription: 'Muito Curioso, marinheiro humano frontal com gorro preto lateral, bigode e cavanhaque comprido',
}, {
  ...calculatingLevelTen, name: 'Calculista', sourceName: 'Calculating',
  facts: [['Saúde', '60'], ['Alimentação', '150'], ['Cabine', '10'], ['Peso', '300 LT']],
  summary: 'Um companheiro para aceleração',
  description: 'Anão com destaque para aceleração. A função a bordo modifica sua contribuição. Nome português identificado no Codex e limites comunitários de nível 10 pendentes de confirmação SA. Roupa inferior completada artisticamente a partir do retrato.',
  links: [
    ['BDO Codex · Calculista', 'https://bdocodex.com/pt/sailor/59058/'],
    ['Referência visual comunitária', 'https://infopixservice-debug.github.io/sailor/'],
  ],
  portraitUrl: calculatingPortraitUrl, bodyUrl: calculatingBodyUrl, blinkUrl: calculatingBlinkUrl,
  figureClass: 'sailor-calculating', imageDescription: 'Calculista, marinheiro anão frontal calvo com barba ruiva volumosa e casaco escuro de gola de pele',
}, {
  ...experiencedLevelTen, name: 'Muito Experiente', sourceName: 'Experienced',
  facts: [['Saúde', '30'], ['Alimentação', '150'], ['Cabine', '10'], ['Peso', '250 LT']],
  summary: 'Um companheiro para velocidade e aceleração',
  description: 'Humano com destaque para velocidade e aceleração. A função a bordo modifica sua contribuição. Nome português identificado no Codex e intervalos comunitários de nível 10 pendentes de confirmação SA. Roupa inferior completada artisticamente a partir do retrato.',
  links: [
    ['BDO Codex · Muito Experiente', 'https://bdocodex.com/pt/sailor/59066/'],
    ['Referência visual comunitária', 'https://infopixservice-debug.github.io/sailor/'],
  ],
  portraitUrl: experiencedPortraitUrl, bodyUrl: experiencedBodyUrl, blinkUrl: experiencedBlinkUrl,
  figureClass: 'sailor-experienced', imageDescription: 'Muito Experiente, marinheiro humano frontal com gorro cinza cobrindo orelhas, olhos azuis e casaco gasto',
}, {
  ...treasureLevelTen, name: 'Procurando o tesouro', sourceName: 'Treasure-Seeking',
  facts: [['Saúde', '80'], ['Alimentação', '100'], ['Cabine', '5'], ['Peso', '300 LT']],
  summary: 'Um companheiro para manobra',
  description: 'Anão com destaque para rotação do barco. A função a bordo modifica sua contribuição. Nome português identificado no Codex, pendente de confirmação SA. Intervalos de nível 10 comunitários. Roupa inferior completada artisticamente a partir do retrato; o nome não indica bônus de encontrar tesouros.',
  links: [
    ['BDO Codex · Português', 'https://bdocodex.com/pt/sailor/59059/?sl=1'],
    ['Referência visual comunitária', 'https://infopixservice-debug.github.io/sailor/'],
  ],
  portraitUrl: treasurePortraitUrl, bodyUrl: treasureBodyUrl, blinkUrl: treasureBlinkUrl,
  figureClass: 'sailor-treasure', imageDescription: 'Procurando o tesouro, marinheiro anão com barba loira, gorro marrom e camisa bege',
}, {
  ...tenaciousLevelTen, name: 'Persistente', sourceName: 'Tenacious',
  facts: [['Saúde', '80'], ['Alimentação', '100'], ['Cabine', '5'], ['Peso', '300 LT']],
  summary: 'Um companheiro para frenagem',
  description: 'Anão com destaque para frenagem. A função a bordo modifica sua contribuição. Nome português identificado no Codex, pendente de confirmação SA. Intervalos de nível 10 comunitários; roupa inferior completada artisticamente a partir do retrato.',
  links: [
    ['BDO Codex · Português', 'https://bdocodex.com/pt/sailor/59062/?sl=1'],
    ['Referência visual comunitária', 'https://infopixservice-debug.github.io/sailor/'],
  ],
  portraitUrl: tenaciousPortraitUrl, bodyUrl: tenaciousBodyUrl, blinkUrl: tenaciousBlinkUrl,
  figureClass: 'sailor-tenacious', imageDescription: 'Persistente, marinheiro anão sem barba com capuz vinho e camisa clara',
}, ...expandedSailors];
let activeSailor = sailors[0];
if (!activeSailor) throw new Error('Coleção de marinheiros vazia');
const percentFormat = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 });

function image(src: string, alt: string, className: string): HTMLImageElement {
  const node = element('img', className); node.src = src; node.alt = alt; return node;
}
function carousel(onSelect: (sailor: SailorPreviewProfile) => void): HTMLElement {
  const section = element('section', 'sailor-carousel');
  section.setAttribute('aria-label', 'Coleção de marinheiros');
  const track = element('div', 'sailor-track');
  for (const sailor of sailors) {
    const card = button('', () => onSelect(sailor), 'sailor-choice');
    card.dataset.sailorId = String(sailor.id);
    card.setAttribute('aria-label', `Selecionar marinheiro ${sailor.name}`);
    card.setAttribute('aria-pressed', String(sailor.id === activeSailor?.id));
    card.classList.toggle('selected', sailor.id === activeSailor?.id);
    card.append(image(sailor.portraitUrl, '', 'sailor-avatar'), element('span', '', sailor.name));
    track.append(card);
  }
  const controls = element('div', 'sailor-carousel-controls');
  const previous = button('‹', () => moveCarousel(track, -1), 'sailor-carousel-arrow');
  const next = button('›', () => moveCarousel(track, 1), 'sailor-carousel-arrow');
  previous.setAttribute('aria-label', 'Ver marinheiros anteriores');
  next.setAttribute('aria-label', 'Ver próximos marinheiros');
  track.id = 'sailor-carousel-track';
  previous.setAttribute('aria-controls', track.id);
  next.setAttribute('aria-controls', track.id);
  const update = (): void => {
    previous.disabled = track.scrollLeft <= 1;
    next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 1;
  };
  track.addEventListener('scroll', update, { passive: true });
  track.addEventListener('pointerdown', () => stopCarouselAnimation(track), { passive: true });
  track.addEventListener('wheel', () => stopCarouselAnimation(track), { passive: true });
  const resize = new ResizeObserver(update);
  resize.observe(track);
  controls.append(previous, track, next);
  section.append(controls);
  return section;
}
const carouselAnimations = new WeakMap<HTMLElement, number>();
function stopCarouselAnimation(track: HTMLElement): void {
  const animation = carouselAnimations.get(track);
  if (animation !== undefined) cancelAnimationFrame(animation);
  carouselAnimations.delete(track);
  track.style.scrollSnapType = '';
}
function moveCarousel(track: HTMLElement, direction: number): void {
  const cards = Array.from(track.querySelectorAll<HTMLElement>('.sailor-choice'));
  const step = cards[1] && cards[0] ? cards[1].offsetLeft - cards[0].offsetLeft : track.clientWidth;
  const target = Math.round(track.scrollLeft / step) * step + direction * step * 2;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  animateCarousel(track, target, reduced);
}
function animateCarousel(track: HTMLElement, target: number, reduced: boolean): void {
  const previous = carouselAnimations.get(track);
  if (previous !== undefined) cancelAnimationFrame(previous);
  const start = track.scrollLeft;
  const end = Math.max(0, Math.min(target, track.scrollWidth - track.clientWidth));
  if (reduced) { track.style.scrollSnapType = ''; track.scrollLeft = end; return; }
  const started = performance.now();
  track.style.scrollSnapType = 'none';
  const frame = (now: number): void => {
    const progress = Math.min(1, (now - started) / 520);
    const eased = progress * progress * (3 - 2 * progress);
    track.scrollLeft = start + (end - start) * eased;
    if (progress < 1) carouselAnimations.set(track, requestAnimationFrame(frame));
    else { carouselAnimations.delete(track); track.style.scrollSnapType = ''; }
  };
  carouselAnimations.set(track, requestAnimationFrame(frame));
}
function attributeCard(attribute: SailorAttributeRange): HTMLElement {
  const card = element('div', 'attribute-card');
  card.dataset.attributeId = attribute.id;
  card.append(element('h3', '', attribute.label));
  const range = element('div', 'attribute-range');
  const min = element('div'); min.append(element('small', '', 'Mínimo'), element('strong', '', `${percentFormat.format(attribute.minimum)}%`));
  const max = element('div'); max.append(element('small', '', 'Máximo'), element('strong', '', `${percentFormat.format(attribute.maximum)}%`));
  range.append(min, element('span', 'range-link', '—'), max); card.append(range);
  return card;
}
function statGrid(sailor: SailorPreviewProfile): HTMLElement {
  const grid = element('div', 'attribute-grid');
  grid.append(...sailor.attributes.map(attribute => attributeCard(attribute)));
  return grid;
}
function description(sailor: SailorPreviewProfile): HTMLElement {
  const section = element('details', 'sailor-description');
  const content = element('div', 'sailor-description-scroll');
  content.tabIndex = 0;
  content.setAttribute('role', 'region');
  content.setAttribute('aria-label', 'Descrição e fontes do marinheiro; área rolável');
  content.append(element('p', '', sailor.description),
    element('p', '', `Referência: nível ${sailor.level}. Mínimo e máximo representam os limites do RNG nesse nível, não uma previsão de crescimento.`), sources(sailor));
  section.append(element('summary', '', sailor.summary), content);
  return section;
}
function sources(sailor: SailorPreviewProfile): HTMLElement {
  const details = element('details', 'sailor-sources');
  details.append(element('summary', '', 'Fontes e limites'));
  details.append(element('p', '', `Limites do nível 10 da planilha comunitária (aba ${sailor.sourceSheet ?? sailor.sourceName}), ainda pendentes de confirmação SA. Zeros são valores da fonte. RNG não garante o máximo de todos os atributos no mesmo indivíduo. Arte recriada por IA.`));
  const links: ReadonlyArray<readonly [string, string]> = [
    ['Limites RNG · Planilha de marinheiros', sailor.sourceUrl],
    [`BDO Codex · ID ${sailor.id}`, `https://bdocodex.com/us/sailor/${sailor.id}/`],
    ...sailor.links,
    ['Guia oficial · Marinheiros', 'https://www.sa.playblackdesert.com/pt-BR/Wiki?wikiNo=321'],
  ];
  for (const [name, url] of links) {
    const link = element('a', '', name); link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; details.append(link);
  }
  return details;
}
function sailorFigure(sailor: SailorPreviewProfile): HTMLElement {
  const figure = element('figure', `sailor-figure ${sailor.figureClass}`);
  figure.dataset.sailorId = String(sailor.id);
  const sprite = element('div', 'sailor-sprite');
  const closedEyes = image(sailor.blinkUrl, '', 'sailor-blink');
  closedEyes.setAttribute('aria-hidden', 'true');
  const breathing = image(sailor.bodyUrl, '', 'sailor-body sailor-breath');
  breathing.setAttribute('aria-hidden', 'true');
  sprite.append(image(sailor.bodyUrl, sailor.imageDescription, 'sailor-body'), breathing, closedEyes);
  figure.append(sprite);
  return figure;
}
function sailorInfo(sailor: SailorPreviewProfile): HTMLElement {
  const info = element('div', 'sailor-info');
  const title = element('h1', '', sailor.name); title.id = 'sailor-title'; title.tabIndex = -1;
  const heading = element('div', 'profile-heading'); const identity = element('div');
  identity.append(title);
  const grid = statGrid(sailor);
  heading.append(identity);
  const facts = element('div', 'sailor-facts');
  for (const [label, value] of sailor.facts) {
    const fact = element('div'); fact.append(element('small', '', label), element('strong', '', value)); facts.append(fact);
  }
  info.append(heading, facts, element('h2', 'attributes-heading', `Atributos · Nível ${sailor.level}`), grid,
    description(sailor));
  return info;
}
function profile(sailor: SailorPreviewProfile): HTMLElement {
  const main = element('main', 'sailor-profile');
  const scene = element('div', 'tavern-scene');
  scene.append(image(tavernUrl, '', 'tavern-background'), element('div', 'tavern-light tavern-light-left'), element('div', 'tavern-light tavern-light-bar'), sailorFigure(sailor));
  const content = element('div', 'tavern-content');
  content.append(sailorInfo(sailor));
  main.append(scene, content); return main;
}
const root = document.getElementById('sailor-preview');
if (!root) throw new Error('Raiz da prévia indisponível');
const selectionStatus = element('p', 'sailor-selection-status');
selectionStatus.setAttribute('role', 'status');
selectionStatus.setAttribute('aria-atomic', 'true');
function announceSelection(message: string, failed = false): void {
  selectionStatus.textContent = message;
  selectionStatus.classList.toggle('failed', failed);
}
const shell = element('div', 'sailor-shell');
const header = element('header', 'preview-header');
const brand = element('a', 'preview-brand');
brand.href = '/';
brand.setAttribute('aria-label', 'Voltar à página inicial do Estaleiro Black Desert');
brand.append(image('/landing-logo.png', 'Estaleiro Black Desert', 'preview-logo'));
header.append(brand);
function selectSailor(sailor: SailorPreviewProfile): void {
  if (leavingPage || selectedSailorId === sailor.id) return;
  selectedSailorId = sailor.id;
  announceSelection(`Preparando ${sailor.name}.`);
  void transitionSailor(sailor, ++transitionRevision);
  for (const card of root?.querySelectorAll('.sailor-choice') ?? []) {
    const selected = card.getAttribute('data-sailor-id') === String(sailor.id);
    card.classList.toggle('selected', selected);
    card.setAttribute('aria-pressed', String(selected));
  }
}
let selectedSailorId = activeSailor.id;
let transitionRevision = 0;
let infoAnimation: Animation | undefined;
let leavingPage = false;
function fadeForExit(selector: string): Promise<void> {
  const target = root?.querySelector<HTMLElement>(selector);
  if (!target) return Promise.resolve();
  return target.animate([{ opacity: getComputedStyle(target).opacity }, { opacity: 0 }], {
    duration: 400, easing: 'ease-in-out', fill: 'forwards',
  }).finished.then(() => undefined);
}
function closeTavern(): Promise<void> {
  const scene = root?.querySelector<HTMLElement>('.tavern-scene');
  if (!scene) return Promise.resolve();
  return scene.animate([
    { clipPath: getComputedStyle(scene).clipPath, opacity: getComputedStyle(scene).opacity },
    { clipPath: 'inset(50% 0% 50% 0%)', opacity: 0 },
  ], { duration: 650, delay: 150, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'forwards' }).finished.then(() => undefined);
}
async function leaveSailors(event: MouseEvent): Promise<void> {
  if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  if (leavingPage) return;
  leavingPage = true;
  ++transitionRevision;
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const info = root?.querySelector<HTMLElement>('.sailor-info');
    await Promise.all([
      info ? animateInfo(info, false) : Promise.resolve(true),
      fadeForExit('.sailor-carousel'), fadeForExit('.sailor-figure'), closeTavern(),
    ]);
  }
  window.location.assign(brand.href);
}
brand.addEventListener('click', event => { void leaveSailors(event); });
function animateInfo(info: HTMLElement, entering: boolean): Promise<boolean> {
  const start = getComputedStyle(info).transform;
  const currentLeft = info.getBoundingClientRect().left;
  infoAnimation?.cancel();
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    info.style.transform = ''; return Promise.resolve(true);
  }
  const translation = start === 'none' ? 0 : new DOMMatrixReadOnly(start).m41;
  const restingLeft = currentLeft - translation;
  const distance = Math.max(0, window.innerWidth - restingLeft) + 32;
  const outside = `translateX(${distance}px)`;
  const animation = info.animate([
    { transform: entering ? outside : start },
    { transform: entering ? 'translateX(0)' : outside },
  ], { duration: entering ? 350 : 250, easing: entering ? 'cubic-bezier(.16,1,.3,1)' : 'cubic-bezier(.4,0,1,1)', fill: 'forwards' });
  infoAnimation = animation;
  return new Promise(resolve => {
    animation.onfinish = () => resolve(true);
    animation.oncancel = () => resolve(false);
  });
}
async function transitionSailor(sailor: SailorPreviewProfile, revision: number): Promise<void> {
  try {
    await Promise.all([sailor.bodyUrl, sailor.blinkUrl].map(prepareImage));
  } catch (error: unknown) {
    console.error('Falha ao preparar marinheiro', error);
    if (revision === transitionRevision && activeSailor) {
      announceSelection(`Não foi possível carregar ${sailor.name}. Selecione novamente para tentar.`, true);
      selectedSailorId = activeSailor.id;
      const info = root?.querySelector<HTMLElement>('.sailor-info');
      if (info) void animateInfo(info, true);
      for (const card of root?.querySelectorAll('.sailor-choice') ?? []) {
        const selected = card.getAttribute('data-sailor-id') === String(selectedSailorId);
        card.classList.toggle('selected', selected);
        card.setAttribute('aria-pressed', String(selected));
      }
    }
    return;
  }
  if (revision !== transitionRevision || leavingPage) return;
  const previous = root?.querySelector<HTMLElement>('.sailor-info');
  if (!previous) return;
  if (!await animateInfo(previous, false) || revision !== transitionRevision) return;
  activeSailor = sailor;
  announceSelection(`${sailor.name}: ficha de nível 10 carregada.`);
  const next = sailorInfo(sailor);
  root?.querySelector('.sailor-figure')?.replaceWith(sailorFigure(sailor));
  previous.replaceWith(next);
  await animateInfo(next, true);
}
shell.append(header); root.append(shell, profile(activeSailor), carousel(selectSailor), selectionStatus);
function enterSailors(): void {
  const initialInfo = root?.querySelector<HTMLElement>('.sailor-info');
  if (!initialInfo) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  root?.querySelector<HTMLElement>('.tavern-scene')?.animate([
    { clipPath: 'inset(50% 0% 50% 0%)', opacity: 0 },
    { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 },
  ], { duration: 650, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'backwards' });
  for (const selector of ['.sailor-carousel', '.sailor-figure']) {
    root?.querySelector<HTMLElement>(selector)?.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 400, delay: 250, easing: 'ease-in-out', fill: 'backwards',
    });
  }
  void animateInfo(initialInfo, true);
}
revealPreparedScene(root, [tavernUrl, activeSailor.bodyUrl, activeSailor.blinkUrl, '/landing-logo.png',
  ...sailors.slice(0, 4).map(sailor => sailor.portraitUrl)], enterSailors);
