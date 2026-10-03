import { sailorExpansionReferences } from './content/sailors-expansion-data.ts';
import type { SailorPreviewProfile } from './content/sailors-preview-data.ts';
import sailor59053Body from '../../../assets/marinheiros/preview/expansion-ambitious-corpo-v1.png';
import sailor59053Portrait from '../../../assets/marinheiros/preview/expansion-ambitious-retrato-v1.png';
import sailor59053Blink from '../../../assets/marinheiros/preview/expansion-ambitious-olhos-fechados-v1.png';
import sailor59054Body from '../../../assets/marinheiros/preview/expansion-diligent-corpo-v1.png';
import sailor59054Portrait from '../../../assets/marinheiros/preview/expansion-diligent-retrato-v1.png';
import sailor59054Blink from '../../../assets/marinheiros/preview/expansion-diligent-olhos-fechados-v1.png';
import sailor59056Body from '../../../assets/marinheiros/preview/expansion-enamored-corpo-v1.png';
import sailor59056Portrait from '../../../assets/marinheiros/preview/expansion-enamored-retrato-v1.png';
import sailor59056Blink from '../../../assets/marinheiros/preview/expansion-enamored-olhos-fechados-v1.png';
import sailor59063Body from '../../../assets/marinheiros/preview/expansion-honest-corpo-v1.png';
import sailor59063Portrait from '../../../assets/marinheiros/preview/expansion-honest-retrato-v1.png';
import sailor59063Blink from '../../../assets/marinheiros/preview/expansion-honest-olhos-fechados-v1.png';
import sailor59064Body from '../../../assets/marinheiros/preview/expansion-tough-corpo-v1.png';
import sailor59064Portrait from '../../../assets/marinheiros/preview/expansion-tough-retrato-v1.png';
import sailor59064Blink from '../../../assets/marinheiros/preview/expansion-tough-olhos-fechados-v1.png';
import sailor59065Body from '../../../assets/marinheiros/preview/expansion-strong-corpo-v1.png';
import sailor59065Portrait from '../../../assets/marinheiros/preview/expansion-strong-retrato-v1.png';
import sailor59065Blink from '../../../assets/marinheiros/preview/expansion-strong-olhos-fechados-v1.png';
import sailor59068Body from '../../../assets/marinheiros/preview/expansion-dreaming-of-a-full-haul-corpo-v1.png';
import sailor59068Portrait from '../../../assets/marinheiros/preview/expansion-dreaming-of-a-full-haul-retrato-v1.png';
import sailor59068Blink from '../../../assets/marinheiros/preview/expansion-dreaming-of-a-full-haul-olhos-fechados-v1.png';
import sailor59070Body from '../../../assets/marinheiros/preview/expansion-born-in-the-sea-corpo-v1.png';
import sailor59070Portrait from '../../../assets/marinheiros/preview/expansion-born-in-the-sea-retrato-v1.png';
import sailor59070Blink from '../../../assets/marinheiros/preview/expansion-born-in-the-sea-olhos-fechados-v1.png';
import sailor59069Body from '../../../assets/marinheiros/preview/expansion-powerful-corpo-v1.png';
import sailor59069Portrait from '../../../assets/marinheiros/preview/expansion-powerful-retrato-v1.png';
import sailor59069Blink from '../../../assets/marinheiros/preview/expansion-powerful-olhos-fechados-v1.png';
import sailor59071Body from '../../../assets/marinheiros/preview/expansion-smart-corpo-v1.png';
import sailor59071Portrait from '../../../assets/marinheiros/preview/expansion-smart-retrato-v1.png';
import sailor59071Blink from '../../../assets/marinheiros/preview/expansion-smart-olhos-fechados-v1.png';
import sailor59072Body from '../../../assets/marinheiros/preview/expansion-quick-witted-corpo-v1.png';
import sailor59072Portrait from '../../../assets/marinheiros/preview/expansion-quick-witted-retrato-v1.png';
import sailor59072Blink from '../../../assets/marinheiros/preview/expansion-quick-witted-olhos-fechados-v1.png';
import sailor59101Body from '../../../assets/marinheiros/preview/expansion-arkahn-corpo-v1.png';
import sailor59101Portrait from '../../../assets/marinheiros/preview/expansion-arkahn-retrato-v1.png';
import sailor59101Blink from '../../../assets/marinheiros/preview/expansion-arkahn-olhos-fechados-v1.png';

const expansionAssets = [
  { id: 59053, bodyUrl: sailor59053Body, portraitUrl: sailor59053Portrait, blinkUrl: sailor59053Blink },
  { id: 59054, bodyUrl: sailor59054Body, portraitUrl: sailor59054Portrait, blinkUrl: sailor59054Blink },
  { id: 59056, bodyUrl: sailor59056Body, portraitUrl: sailor59056Portrait, blinkUrl: sailor59056Blink },
  { id: 59063, bodyUrl: sailor59063Body, portraitUrl: sailor59063Portrait, blinkUrl: sailor59063Blink },
  { id: 59064, bodyUrl: sailor59064Body, portraitUrl: sailor59064Portrait, blinkUrl: sailor59064Blink },
  { id: 59065, bodyUrl: sailor59065Body, portraitUrl: sailor59065Portrait, blinkUrl: sailor59065Blink },
  { id: 59068, bodyUrl: sailor59068Body, portraitUrl: sailor59068Portrait, blinkUrl: sailor59068Blink },
  { id: 59070, bodyUrl: sailor59070Body, portraitUrl: sailor59070Portrait, blinkUrl: sailor59070Blink },
  { id: 59069, bodyUrl: sailor59069Body, portraitUrl: sailor59069Portrait, blinkUrl: sailor59069Blink },
  { id: 59071, bodyUrl: sailor59071Body, portraitUrl: sailor59071Portrait, blinkUrl: sailor59071Blink },
  { id: 59072, bodyUrl: sailor59072Body, portraitUrl: sailor59072Portrait, blinkUrl: sailor59072Blink },
  { id: 59101, bodyUrl: sailor59101Body, portraitUrl: sailor59101Portrait, blinkUrl: sailor59101Blink },
];

export const expandedSailors: SailorPreviewProfile[] = expansionAssets.map(assets => {
  const reference = sailorExpansionReferences.find(sailor => sailor.id === assets.id);
  if (!reference) throw new Error(`Marinheiro sem referência: ${assets.id}`);
  return {
    ...reference, ...assets,
    figureClass: `sailor-expanded sailor-${reference.species} sailor-${reference.id}`,
    imageDescription: `${reference.name}, marinheiro de frente com iluminação quente`,
    links: [
      ['BDO Codex · Identidade', `https://bdocodex.com/pt/sailor/${reference.id}/`],
      ['Referência visual', reference.id === 59101 ? 'https://www.sa.playblackdesert.com/pt-BR/Wiki?wikiNo=321' : 'https://infopixservice-debug.github.io/sailor/'],
    ],
  };
});
