import { z } from 'zod';
import { importBackup } from './persistence.ts';
import type { Catalog, Project } from './schema.ts';

const versionSchema = z.object({ project: z.object({ catalogVersion: z.string() }) });
export interface RegisteredProject { catalog: Catalog; project: Project }

export function readCatalogBackup(catalogs: readonly Catalog[], input: string): RegisteredProject {
  if (input.length > 1_000_000) throw new Error('Backup excede o limite');
  const parsed: unknown = JSON.parse(input);
  const version = versionSchema.parse(parsed).project.catalogVersion;
  const catalog = catalogs.find(entry => entry.version === version);
  if (!catalog) throw new Error('Versão de catálogo incompatível');
  return { catalog, project: importBackup(catalog, input) };
}
