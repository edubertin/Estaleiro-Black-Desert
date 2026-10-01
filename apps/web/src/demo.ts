import { parseCatalog } from './core/catalog.ts';
import type { Requirement, Stage } from './core/schema.ts';
import gradual from '../../../assets/carracas/gradual-transparente-v1.png';
import equilibrio from '../../../assets/carracas/equilibrio-transparente-v1.png';
import emergencia from '../../../assets/carracas/emergencia-transparente-v1.png';
import bravura from '../../../assets/carracas/bravura-transparente-v1.png';

export const ships = [
  { id: 'carrack-advance', name: 'Gradual', line: 'trade', image: gradual, purpose: 'Seu próximo horizonte de permutas' },
  { id: 'carrack-balance', name: 'Equilíbrio', line: 'trade', image: equilibrio, purpose: 'Uma jornada versátil pelo oceano' },
  { id: 'carrack-volante', name: 'Emergência', line: 'combat', image: emergencia, purpose: 'Velocidade para explorar mais longe' },
  { id: 'carrack-valor', name: 'Bravura', line: 'combat', image: bravura, purpose: 'Prepare sua jornada de combate naval' },
];
export const shipAliases: Record<string, string[]> = { 'carrack-volante': ['Ascensão'] };
export const names: Record<string, string> = {
  'bartali': 'Veleiro de Bartali', 'epheria-sailboat': 'Veleiro de Epheria',
  'epheria-frigate': 'Fragata de Epheria', 'epheria-caravel': 'Navio Mercante de Epheria',
  'epheria-galleass': 'Contratorpedeiro de Epheria',
  'epheria-sailboat-improved': 'Veleiro de Epheria Melhorado',
  'epheria-frigate-improved': 'Fragata de Epheria Melhorada',
};
export function boatName(id: string): string {
  return names[id] ?? `Carraca ${ships.find(ship => ship.id === id)?.name ?? id}`;
}
function stage(id: string, from: string, to: string): Stage {
  const requirements: Requirement[] = [
    { kind: 'material', itemId: 'demo-material-a', quantity: 100 },
    { kind: 'material', itemId: 'demo-material-b', quantity: 60 },
    { kind: 'material', itemId: 'demo-material-c', quantity: 40 },
    ...['proa', 'casco', 'canhao', 'vela'].map((part): Requirement =>
      ({ kind: 'equipment', itemId: `${id}-${part}` })),
  ];
  return { id, from, to, requirements };
}
const trade = [stage('trade-base', 'bartali', 'epheria-sailboat'),
  stage('trade-caravel', 'epheria-sailboat', 'epheria-caravel')];
const combat = [stage('combat-base', 'bartali', 'epheria-frigate'),
  stage('combat-galleass', 'epheria-frigate', 'epheria-galleass')];
const routes = ships.map(ship => ({ destination: ship.id, stages: [
  ...(ship.line === 'trade' ? trade : combat),
  stage(ship.id, ship.line === 'trade' ? 'epheria-caravel' : 'epheria-galleass', ship.id),
] }));
const equipment = new Map(routes.flatMap(route => route.stages.flatMap(entry =>
  entry.requirements.filter(item => item.kind === 'equipment').map(item => [item.itemId, {
    id: item.itemId, name: `Peça ilustrativa: ${item.itemId.split('-').at(-1)} +10`,
    kind: 'equipment', source: null, verifiedSA: false,
  }]))));
export const demoCatalog = parseCatalog({ version: 'demo-v1', region: 'SA', illustrative: true,
  items: [...['a', 'b', 'c'].map(letter => ({ id: `demo-material-${letter}`,
    name: `Material ilustrativo ${letter.toUpperCase()}`, kind: 'material', source: null,
    verifiedSA: false })), ...equipment.values()], routes });
