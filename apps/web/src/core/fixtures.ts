import { parseCatalog } from './catalog.ts';

export const illustrativeCatalog = parseCatalog({
  version: 'fixture-v1', region: 'SA', illustrative: true,
  items: [
    { id: 'sample-wood', name: 'Material ilustrativo A', kind: 'material', source: null, verifiedSA: false },
    { id: 'sample-gear', name: 'Equipamento ilustrativo +10', kind: 'equipment', source: null, verifiedSA: false },
  ],
  routes: [{ destination: 'carrack-advance', stages: [
    { id: 'sample-caravel', from: 'epheria-sailboat', to: 'epheria-caravel', requirements: [
      { kind: 'material', itemId: 'sample-wood', quantity: 100 },
      { kind: 'equipment', itemId: 'sample-gear' },
    ] },
    { id: 'sample-carrack', from: 'epheria-caravel', to: 'carrack-advance', requirements: [
      { kind: 'material', itemId: 'sample-wood', quantity: 60 },
    ] },
  ] }],
});
