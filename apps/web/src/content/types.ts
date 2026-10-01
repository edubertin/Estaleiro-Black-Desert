export interface EditorialSource {
  id: string;
  url: string;
  checkedAt: string;
  note: string;
}

export interface EditorialItem {
  id: string;
  observedName: string;
  displayName: string;
  aliases: string[];
  quality: 'blue' | null;
  kind: 'material' | 'equipment';
  region: 'SA';
  language: 'pt-BR';
  sourceId: string;
  checkedAt: string;
  status: 'source-checked';
  verifiedSA: boolean;
  clientChecked: false;
  iconUrls: string[];
  locators: string[];
}

export interface EditorialRequirement {
  itemId: string;
  quantity: number | null;
  quantityBasis: 'explicit' | 'single-piece-inferred' | 'single-license-inferred' | 'not-stated';
  enhancement: 10 | null;
  sourceId: string;
  locator: string;
  status: 'source-checked';
  verifiedSA: boolean;
  clientChecked: false;
  corroboratingSourceIds?: string[];
}

export interface EditorialRecipe {
  id: string;
  from: string;
  to: string;
  requirements: EditorialRequirement[];
  sourceId: string;
  checkedAt: string;
  status: 'source-checked';
  verifiedSA: boolean;
  clientChecked: false;
  issues: string[];
}

export interface EditorialCatalog {
  version: string;
  region: 'SA';
  language: 'pt-BR';
  publishable: boolean;
  sources: EditorialSource[];
  items: EditorialItem[];
  recipes: EditorialRecipe[];
}

export interface ObtainmentInput {
  observedName: string;
  quantity: number;
}

export interface EditorialObtainment {
  itemId: string;
  method: 'heating' | 'chopping' | 'drying' | 'barter' | 'npc' | 'quest' | 'market';
  inputs: ObtainmentInput[];
  sourceId: string;
  locator: string;
  verifiedSA: false;
  note: string;
}
