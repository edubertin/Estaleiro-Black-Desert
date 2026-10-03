export interface SailorAttributeRange {
  id: string;
  label: string;
  minimum: number;
  maximum: number;
}

export const puroLevelTen = {
  id: 59055,
  level: 10,
  evidenceStatus: 'community-reference-sa-pending',
  sourceUrl: 'https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit',
  attributes: [
    { id: 'stamina', label: 'Persistência', minimum: 2.8, maximum: 4 },
    { id: 'wits', label: 'Senso', minimum: 1.2, maximum: 1.6 },
    { id: 'awareness', label: 'Sentido', minimum: 1.4, maximum: 2.5 },
    { id: 'superArmor', label: 'Força Física', minimum: 1.4, maximum: 2.5 },
    { id: 'patience', label: 'Paciência', minimum: 0, maximum: 0 },
    { id: 'strength', label: 'Força', minimum: 0, maximum: 0 },
    { id: 'focus', label: 'Foco', minimum: 0, maximum: 0 },
    { id: 'vision', label: 'Visão', minimum: 0, maximum: 0 },
  ] satisfies SailorAttributeRange[],
};

export const realisticLevelTen = {
  id: 59060,
  level: 10,
  evidenceStatus: 'community-reference-sa-pending',
  sourceUrl: puroLevelTen.sourceUrl,
  attributes: [
    { id: 'stamina', label: 'Persistência', minimum: 1.1, maximum: 2.5 },
    { id: 'wits', label: 'Senso', minimum: 1.7, maximum: 3 },
    { id: 'awareness', label: 'Sentido', minimum: 5.7, maximum: 9.8 },
    { id: 'superArmor', label: 'Força Física', minimum: 2.2, maximum: 3.5 },
    { id: 'patience', label: 'Paciência', minimum: 0, maximum: 0 },
    { id: 'strength', label: 'Força', minimum: 1.2, maximum: 1.5 },
    { id: 'focus', label: 'Foco', minimum: 1.2, maximum: 1.5 },
    { id: 'vision', label: 'Visão', minimum: 41.9, maximum: 48 },
  ] satisfies SailorAttributeRange[],
};

export interface SailorPreviewProfile {
  id: number;
  name: string;
  sourceName: string;
  sourceSheet?: string;
  level: number;
  attributes: readonly SailorAttributeRange[];
  facts: ReadonlyArray<readonly [string, string]>;
  summary: string;
  description: string;
  sourceUrl: string;
  links: ReadonlyArray<readonly [string, string]>;
  portraitUrl: string;
  bodyUrl: string;
  blinkUrl: string;
  figureClass: string;
  imageDescription: string;
}

export const confidentLevelTen = {
  id: 59061, level: 10, evidenceStatus: 'community-reference-sa-pending',
  sourceUrl: puroLevelTen.sourceUrl,
  attributes: [
    { id: 'stamina', label: 'Persistência', minimum: 1.3, maximum: 1.7 },
    { id: 'wits', label: 'Senso', minimum: 1.3, maximum: 1.7 },
    { id: 'awareness', label: 'Sentido', minimum: 7.1, maximum: 8.3 },
    { id: 'superArmor', label: 'Força Física', minimum: 2.6, maximum: 3.9 },
    { id: 'patience', label: 'Paciência', minimum: 0, maximum: 0 },
    { id: 'strength', label: 'Força', minimum: 0, maximum: 0 },
    { id: 'focus', label: 'Foco', minimum: 0, maximum: 0 },
    { id: 'vision', label: 'Visão', minimum: 0, maximum: 0 },
  ] satisfies SailorAttributeRange[],
};

export const quickLevelTen = {
  id: 59057, level: 10, evidenceStatus: 'community-reference-sa-pending',
  sourceUrl: puroLevelTen.sourceUrl,
  attributes: [
    { id: 'stamina', label: 'Persistência', minimum: 1.1, maximum: 2.5 },
    { id: 'wits', label: 'Senso', minimum: 4.6, maximum: 7.8 },
    { id: 'awareness', label: 'Sentido', minimum: 1.3, maximum: 2 },
    { id: 'superArmor', label: 'Força Física', minimum: 2.2, maximum: 3.5 },
    { id: 'patience', label: 'Paciência', minimum: 0, maximum: 0 },
    { id: 'strength', label: 'Força', minimum: 3.6, maximum: 5 },
    { id: 'focus', label: 'Foco', minimum: 1.2, maximum: 1.8 },
    { id: 'vision', label: 'Visão', minimum: 6.9, maximum: 7.1 },
  ] satisfies SailorAttributeRange[],
};

export const curiousLevelTen = {
  id: 59067, level: 10, evidenceStatus: 'community-reference-sa-pending',
  sourceUrl: puroLevelTen.sourceUrl,
  attributes: [
    { id: 'stamina', label: 'Persistência', minimum: 1.1, maximum: 2.5 },
    { id: 'wits', label: 'Senso', minimum: 3.9, maximum: 5.2 },
    { id: 'awareness', label: 'Sentido', minimum: 1.5, maximum: 2 },
    { id: 'superArmor', label: 'Força Física', minimum: 4, maximum: 6.6 },
    { id: 'patience', label: 'Paciência', minimum: 0, maximum: 0 },
    { id: 'strength', label: 'Força', minimum: 2.6, maximum: 5 },
    { id: 'focus', label: 'Foco', minimum: 6.1, maximum: 9 },
    { id: 'vision', label: 'Visão', minimum: 1.1, maximum: 1.3 },
  ] satisfies SailorAttributeRange[],
};

export const calculatingLevelTen = {
  id: 59058, level: 10, evidenceStatus: 'community-reference-sa-pending',
  sourceUrl: puroLevelTen.sourceUrl,
  attributes: [
    { id: 'stamina', label: 'Persistência', minimum: 1.3, maximum: 1.7 },
    { id: 'wits', label: 'Senso', minimum: 2.8, maximum: 4 },
    { id: 'awareness', label: 'Sentido', minimum: 1.9, maximum: 3.1 },
    { id: 'superArmor', label: 'Força Física', minimum: 1.9, maximum: 3.1 },
    { id: 'patience', label: 'Paciência', minimum: 0, maximum: 0 },
    { id: 'strength', label: 'Força', minimum: 0, maximum: 0 },
    { id: 'focus', label: 'Foco', minimum: 0, maximum: 0 },
    { id: 'vision', label: 'Visão', minimum: 0, maximum: 0 },
  ] satisfies SailorAttributeRange[],
};

export const experiencedLevelTen = {
  id: 59066, level: 10, evidenceStatus: 'community-reference-sa-pending',
  sourceUrl: puroLevelTen.sourceUrl,
  attributes: [
    { id: 'stamina', label: 'Persistência', minimum: 2.1, maximum: 2.8 },
    { id: 'wits', label: 'Senso', minimum: 2.1, maximum: 2.8 },
    { id: 'awareness', label: 'Sentido', minimum: 1.3, maximum: 1.7 },
    { id: 'superArmor', label: 'Força Física', minimum: 1.3, maximum: 1.7 },
    { id: 'patience', label: 'Paciência', minimum: 0, maximum: 0 },
    { id: 'strength', label: 'Força', minimum: 0, maximum: 0 },
    { id: 'focus', label: 'Foco', minimum: 0, maximum: 0 },
    { id: 'vision', label: 'Visão', minimum: 0, maximum: 0 },
  ] satisfies SailorAttributeRange[],
};

export const treasureLevelTen = {
  id: 59059, level: 10, evidenceStatus: 'community-reference-sa-pending',
  sourceUrl: puroLevelTen.sourceUrl,
  attributes: [
    { id: 'stamina', label: 'Persistência', minimum: 1.1, maximum: 1.5 },
    { id: 'wits', label: 'Senso', minimum: 1.1, maximum: 1.5 },
    { id: 'awareness', label: 'Sentido', minimum: 5.6, maximum: 6.4 },
    { id: 'superArmor', label: 'Força Física', minimum: 1.8, maximum: 2.2 },
    { id: 'patience', label: 'Paciência', minimum: 0, maximum: 0 },
    { id: 'strength', label: 'Força', minimum: 0, maximum: 0 },
    { id: 'focus', label: 'Foco', minimum: 0, maximum: 0 },
    { id: 'vision', label: 'Visão', minimum: 0, maximum: 0 },
  ] satisfies SailorAttributeRange[],
};

export const tenaciousLevelTen = {
  id: 59062, level: 10, evidenceStatus: 'community-reference-sa-pending',
  sourceUrl: puroLevelTen.sourceUrl,
  attributes: [
    { id: 'stamina', label: 'Persistência', minimum: 1.1, maximum: 1.5 },
    { id: 'wits', label: 'Senso', minimum: 1.1, maximum: 1.5 },
    { id: 'awareness', label: 'Sentido', minimum: 1.8, maximum: 2.2 },
    { id: 'superArmor', label: 'Força Física', minimum: 5.6, maximum: 6.4 },
    { id: 'patience', label: 'Paciência', minimum: 0, maximum: 0 },
    { id: 'strength', label: 'Força', minimum: 0, maximum: 0 },
    { id: 'focus', label: 'Foco', minimum: 0, maximum: 0 },
    { id: 'vision', label: 'Visão', minimum: 0, maximum: 0 },
  ] satisfies SailorAttributeRange[],
};
