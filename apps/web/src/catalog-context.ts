import { demoCatalog } from './demo.ts';
import { saCatalog } from './sa-catalog.ts';
import type { StoragePort } from './core/persistence.ts';
import { readCatalogBackup, type RegisteredProject } from './core/catalog-registry.ts';
import type { Catalog, Project } from './core/schema.ts';

let active: Catalog = saCatalog;

export function currentCatalog(): Catalog { return active; }

export function activateCatalog(catalog: Catalog): void { active = catalog; }

export function readRegisteredBackup(input: string): RegisteredProject {
  return readCatalogBackup([saCatalog, demoCatalog], input);
}

export function restoreRegisteredProject(storage: StoragePort): Project | null {
  const saved = storage.getItem('estaleiro-project-v1');
  if (saved === null) return null;
  const result = readRegisteredBackup(saved);
  activateCatalog(result.catalog);
  return result.project;
}
