import { saEditorialCatalog } from './content/sa-editorial.ts';
import type { EditorialRecipe, EditorialRequirement } from './content/types.ts';
import { parseCatalog } from './core/catalog.ts';
import type { Catalog, Requirement, Stage } from './core/schema.ts';

const destinations: Record<string, string> = {
  'carrack-gradual': 'carrack-advance', 'carrack-equilibrio': 'carrack-balance',
  'carrack-emergencia': 'carrack-volante', 'carrack-bravura': 'carrack-valor',
};

function requirement(input: EditorialRequirement): Requirement {
  if (!input.verifiedSA) throw new Error(`Requisito SA pendente: ${input.itemId}`);
  const item = saEditorialCatalog.items.find(entry => entry.id === input.itemId);
  if (!item) throw new Error(`Item editorial inexistente: ${input.itemId}`);
  if (item.kind === 'equipment') {
    if (input.enhancement !== 10 || input.quantity !== 1) throw new Error('Equipamento divergente');
    return { kind: 'equipment', itemId: input.itemId };
  }
  if (input.quantity === null) throw new Error(`Quantidade não conferida: ${input.itemId}`);
  return { kind: 'material', itemId: input.itemId, quantity: input.quantity };
}

function stage(recipe: EditorialRecipe): Stage {
  if (!recipe.verifiedSA || recipe.issues.length) throw new Error(`Receita SA pendente: ${recipe.id}`);
  return { id: recipe.id, from: recipe.from, to: destinations[recipe.to] ?? recipe.to,
    requirements: recipe.requirements.map(requirement) };
}

function buildCatalog(): Catalog {
  if (!saEditorialCatalog.publishable) throw new Error('Catálogo SA pendente');
  const stages = saEditorialCatalog.recipes.map(stage);
  const routes = Object.values(destinations).map(destination => {
    const last = stages.find(entry => entry.to === destination);
    if (!last) throw new Error('Destino SA inexistente');
    const middle = stages.find(entry => entry.to === last.from);
    const first = stages.find(entry => entry.to === middle?.from);
    if (!middle || !first) throw new Error('Rota SA incompleta');
    return { destination, stages: [first, middle, last] };
  });
  const used = new Set(stages.flatMap(entry => entry.requirements.map(item => item.itemId)));
  const items = saEditorialCatalog.items.filter(item => used.has(item.id)).map(item => {
    const source = saEditorialCatalog.sources.find(entry => entry.id === item.sourceId);
    return { id: item.id, name: item.displayName, kind: item.kind,
      source: source?.url ?? null, verifiedSA: item.verifiedSA };
  });
  return parseCatalog({ version: saEditorialCatalog.version, region: 'SA', illustrative: false, items, routes });
}

export const saCatalog: Catalog = buildCatalog();
