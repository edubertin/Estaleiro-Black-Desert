import type { Catalog } from './schema.ts';

const improvedBoats: Record<string, string> = {
  'epheria-sailboat-improved': 'epheria-sailboat',
  'epheria-frigate-improved': 'epheria-frigate',
};

export interface OriginOption {
  id: string;
  baseId: string;
  improved: boolean;
}

export function baseOrigin(origin: string): string {
  return improvedBoats[origin] ?? origin;
}

export function compatibleOrigins(catalog: Catalog, destination: string): OriginOption[] {
  const route = catalog.routes.find(entry => entry.destination === destination);
  if (!route) throw new Error('Destino desconhecido');
  return route.stages.flatMap(stage => {
    const options: OriginOption[] = [{ id: stage.from, baseId: stage.from, improved: false }];
    for (const [id, baseId] of Object.entries(improvedBoats)) {
      if (stage.from === baseId) options.push({ id, baseId, improved: true });
    }
    return options;
  });
}
