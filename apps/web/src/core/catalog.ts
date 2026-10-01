import { catalogSchema, type Catalog, type Stage } from './schema.ts';
import { baseOrigin } from './origins.ts';

export function parseCatalog(input: unknown): Catalog {
  const catalog = catalogSchema.parse(input);
  const items = new Map(catalog.items.map(item => [item.id, item]));
  if (items.size !== catalog.items.length) throw new Error('Item duplicado');
  const destinations = new Set<string>();
  for (const route of catalog.routes) {
    if (destinations.has(route.destination)) throw new Error('Destino duplicado');
    destinations.add(route.destination);
    const boats = [route.stages[0]?.from, ...route.stages.map(stage => stage.to)];
    if (new Set(boats).size !== boats.length) throw new Error('Rota circular');
    const stageIds = new Set<string>();
    route.stages.forEach((stage, index) => {
      if (stageIds.has(stage.id)) throw new Error('Etapa duplicada');
      stageIds.add(stage.id);
      if (index > 0 && route.stages[index - 1]?.to !== stage.from)
        throw new Error('Rota descontínua');
      const requirementIds = new Set<string>();
      for (const requirement of stage.requirements) {
        if (requirementIds.has(requirement.itemId)) throw new Error('Requisito duplicado');
        requirementIds.add(requirement.itemId);
        const item = items.get(requirement.itemId);
        if (!item || item.kind !== requirement.kind) throw new Error('Item incompatível');
        if (!catalog.illustrative && (!item.source || !item.verifiedSA))
          throw new Error('Requisito sem conferência SA');
      }
    });
    if (route.stages.at(-1)?.to !== route.destination) throw new Error('Destino divergente');
  }
  return catalog;
}

export function stagesFrom(catalog: Catalog, destination: string, origin: string): Stage[] {
  const route = catalog.routes.find(candidate => candidate.destination === destination);
  if (!route) throw new Error('Destino desconhecido');
  if (origin === destination) return [];
  const index = route.stages.findIndex(stage => stage.from === baseOrigin(origin));
  if (index < 0) throw new Error('Barco incompatível com o destino');
  return route.stages.slice(index);
}
