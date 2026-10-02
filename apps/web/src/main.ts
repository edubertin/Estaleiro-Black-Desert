import './style.css';
import logoUrl from '../../../assets/brand/estaleiro-logo-v1.png';
import { ZodError } from 'zod';
import { saCatalog } from './sa-catalog.ts';
import { currentCatalog, activateCatalog, readRegisteredBackup, restoreRegisteredProject } from './catalog-context.ts';
import { createProject, setMaterial, setEquipment, confirmStage, undoStage, changeDestination } from './core/engine.ts';
import { stagesFrom } from './core/catalog.ts';
import { baseOrigin } from './core/origins.ts';
import { exportBackup, saveProject } from './core/persistence.ts';
import type { Project } from './core/schema.ts';
import { button, element, modal } from './ui.ts';
import { renderSelection, renderOrigin } from './selection.ts';
import { renderJourney } from './journey.ts';
import { creatorFooter } from './footer.ts';
import { renderLanding } from './landing.ts';

const root = document.getElementById('app');
if (!root) throw new Error('Elemento raiz indisponível');
const app = root;
let project: Project | null = null;
let destination: string | null = null;
let view: 'select' | 'origin' | 'journey' = 'select';
let notice = 'Seu progresso é salvo neste navegador.';
let error = '';
let landingCleanup: (() => void) | null = null;

function enterPlanner(): void {
  location.hash = '/carracas';
}

function fail(problem: unknown): void {
  error = problem instanceof ZodError ? 'Dados inválidos. Confira os valores ou o arquivo de backup.'
    : problem instanceof Error ? problem.message : 'Não foi possível concluir esta ação.';
  console.error('Falha de validação do Estaleiro', problem instanceof Error ? problem.name : 'UnknownError');
  render();
}
function run(action: () => void): void {
  try { action(); } catch (problem) { fail(problem); }
}
function update(next: Project): void {
  project = next;
  error = '';
  try { saveProject(localStorage, currentCatalog(), next); notice = 'Progresso salvo neste navegador.'; }
  catch (problem) {
    error = 'Não foi possível salvar. Exporte um backup antes de fechar.';
    console.error('Falha de salvamento do Estaleiro', problem instanceof Error ? problem.name : 'StorageError');
  }
  render();
}
function start(origin: string): void {
  if (!destination) throw new Error('Selecione uma carraca');
  let next = createProject(currentCatalog(), destination, origin);
  if (project && compatiblePlan(project, destination, origin))
    next = changeDestination(currentCatalog(), project, destination, origin);
  if (project) next.inventory = structuredClone(project.inventory);
  view = 'journey'; update(next);
}
function compatiblePlan(active: Project, target: string, origin: string): boolean {
  if (baseOrigin(origin) !== baseOrigin(active.origin)) return false;
  const before = stagesFrom(currentCatalog(), active.destination, active.origin);
  const after = stagesFrom(currentCatalog(), target, origin);
  return active.history.every((entry, index) => entry.stageId === after[index]?.id
    && JSON.stringify(before[index]) === JSON.stringify(after[index]));
}
function select(id: string): void {
  destination = id; view = 'origin'; render();
}
function exportFile(): void {
  if (!project) return;
  const url = URL.createObjectURL(new Blob([exportBackup(currentCatalog(), project)], { type: 'application/json' }));
  const link = element('a'); link.href = url; link.download = 'estaleiro-backup.json'; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function importFile(): void {
  const input = element('input'); input.type = 'file'; input.accept = '.json,application/json';
  input.addEventListener('change', () => {
    const file = input.files?.[0]; if (!file) return;
    if (file.size > 1_000_000) { fail(new Error('Backup excede o limite')); return; }
    file.text().then(value => {
      const next = readRegisteredBackup(value);
      modal('Importar este projeto?', `O backup ${next.catalog.illustrative ? 'ilustrativo' : 'SA'} substituirá o projeto aberto.`,
        { label: 'Importar projeto', run: () => {
          activateCatalog(next.catalog); view = 'journey'; update(next.project);
        } });
    }).catch(fail);
  });
  input.click();
}
function actions(): Parameters<typeof renderJourney>[2] {
  if (!project) throw new Error('Projeto não aberto');
  const active = project;
  return {
    material: (id, value) => run(() => update(setMaterial(currentCatalog(), active, id, value))),
    equipment: (id, value) => run(() => update(setEquipment(currentCatalog(), active, id, value))),
    confirm: () => run(() => update(confirmStage(currentCatalog(), active))),
    undo: () => run(() => update(undoStage(active))),
    change: () => modal('Trocar seu plano?',
      'O estoque será mantido. Etapas confirmadas compatíveis serão preservadas se você mantiver a origem. Outra origem ou rota substitui o histórico; exporte um backup se quiser guardar o plano anterior.',
      { label: 'Escolher outro destino', run: () => { view = 'select'; render(); } }),
  };
}
function restoreFocus(key: string | null): void {
  if (!key) return;
  const target = Array.from(app.querySelectorAll<HTMLElement>('input, button')).find(node =>
    (node.dataset.focusKey ?? node.getAttribute('aria-label')) === key);
  if (target instanceof HTMLButtonElement && target.disabled) {
    target.closest('.quantity-controls')?.querySelector('input')?.focus();
    return;
  }
  target?.focus();
}
function resetProgress(): void {
  run(() => {
    localStorage.removeItem('estaleiro-project-v1');
    activateCatalog(saCatalog);
    project = null; destination = null; view = 'select'; error = '';
    location.hash = '';
    render();
  });
}
function requestReset(): void {
  modal('Você deseja resetar o seu progresso?',
    'Seu plano e os materiais salvos neste navegador serão apagados. Você voltará à página inicial.',
    { label: 'Sim, resetar progresso', run: resetProgress });
}
function backupButton(label: string, action: () => void, pathData: string): HTMLButtonElement {
  const node = button('', action, 'backup-icon');
  node.setAttribute('aria-label', label); node.title = label;
  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  icon.setAttribute('viewBox', '0 0 24 24'); icon.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', pathData); icon.append(path); node.append(icon);
  return node;
}
function header(): HTMLElement {
  const node = element('header', 'topbar');
  const brand = button('', requestReset, 'brand');
  brand.setAttribute('aria-label', 'Estaleiro — resetar progresso');
  const logo = element('img'); logo.src = logoUrl; logo.alt = 'Estaleiro — Black Desert';
  logo.width = 220; logo.height = 180; brand.append(logo); node.append(brand);
  const tools = element('div', 'tools');
  if (project && view === 'journey') tools.append(backupButton('Exportar backup',
    () => run(exportFile), 'M12 15V3m-4 4 4-4 4 4M4 15v5h16v-5'));
  tools.append(backupButton('Importar backup', importFile, 'M12 3v12m-4-4 4 4 4-4M4 15v5h16v-5'));
  node.append(tools);
  tools.prepend(button('← Início', () => { location.hash = ''; }, 'help'));
  return node;
}
function catalogBanner(): HTMLElement | null {
  if (!currentCatalog().illustrative) return null;
  const banner = element('div', 'demo-banner');
  banner.append(element('span', '', 'DEMO · Materiais e quantidades ilustrativos.'),
    button('Usar receitas SA', () => modal('Começar com o catálogo SA?',
      'Os itens ilustrativos não serão convertidos. Exporte o backup se quiser guardar a demo. O novo plano substituirá o salvo quando você escolher seu barco.',
      { label: 'Começar plano SA', run: () => {
        activateCatalog(saCatalog); project = null; destination = null;
        view = 'select'; error = ''; notice = 'Escolha uma carraca para seu novo plano SA.'; render();
      } }), 'help'));
  return banner;
}
function content(): HTMLElement {
  const node = element('main');
  node.addEventListener('input', () => {
    const confirm = node.querySelector<HTMLButtonElement>('[data-confirm]');
    if (confirm && node.querySelector('input:invalid')) confirm.disabled = true;
  });
  if (view === 'journey' && project) renderJourney(node, project, actions());
  else if (view === 'origin' && destination)
    renderOrigin(node, destination, origin => run(() => start(origin)), () => { view = 'select'; render(); });
  else renderSelection(node, select);
  return node;
}
function render(): void {
  landingCleanup?.();
  landingCleanup = null;
  if (location.hash !== '#/carracas') {
    app.replaceChildren();
    landingCleanup = renderLanding(app, enterPlanner, project !== null);
    return;
  }
  const active = document.activeElement;
  const focusedKey = active instanceof HTMLElement
    ? active.dataset.focusKey ?? active.getAttribute('aria-label') : null;
  app.replaceChildren();
  const shell = element('div', `shell view-${view}`);
  shell.append(header());
  const banner = catalogBanner(); if (banner) shell.append(banner);
  shell.append(content());
  if (view === 'select') shell.append(creatorFooter());
  if (error) {
    const status = element('p', 'status error', error); status.setAttribute('role', 'alert');
    shell.append(status);
  }
  app.append(shell);
  restoreFocus(focusedKey);
}
run(() => {
  project = restoreRegisteredProject(localStorage);
  if (project) view = 'journey';
  render();
});
window.addEventListener('hashchange', render);
