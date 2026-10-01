import { stagesFrom } from './catalog.ts';
import { calculate } from './engine.ts';
import type { Catalog, Project } from './schema.ts';

export interface TimelineNode {
  boatId: string;
  stageId: string | null;
  coverage: number | null;
  owned: boolean;
  confirmed: boolean;
  preparing: boolean;
}
export function timelineNodes(catalog: Catalog, project: Project): TimelineNode[] {
  const stages = stagesFrom(catalog, project.destination, project.origin);
  const coverage = calculate(catalog, project);
  return [{ boatId: project.origin, stageId: null, coverage: null,
    owned: project.history.length === 0, confirmed: true, preparing: false },
  ...stages.map((stage, index) => ({ boatId: stage.to, stageId: stage.id,
    coverage: index < project.history.length ? 1 : coverage.find(item => item.stageId === stage.id)?.coverage ?? 0,
    owned: index === project.history.length - 1, confirmed: index < project.history.length,
    preparing: index === project.history.length }))];
}
