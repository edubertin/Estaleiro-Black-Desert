export interface ShipProfile {
  id: string;
  name: string;
  summary: string;
  focus: string;
  precursor: string;
  advice: string;
  source: string;
  checked: string;
  imageScale: number;
}

const source = 'https://www.sa.playblackdesert.com/pt-BR/Wiki?wikiNo=291';
export const shipProfiles: readonly ShipProfile[] = [
  { id: 'carrack-advance', name: 'Gradual', summary: 'Mais espaço para sua jornada de permutas.',
    focus: 'Capacidade de armazenamento', precursor: 'Navio Mercante de Epheria',
    advice: 'Indicada para quem prioriza carga e Permuta. Sua especialidade é armazenamento, enquanto outras variantes priorizam velocidade ou combate.',
    source, checked: '2026-10-01', imageScale: 1 },
  { id: 'carrack-balance', name: 'Equilíbrio', summary: 'Uma carraca com atributos equilibrados.',
    focus: 'Versatilidade', precursor: 'Navio Mercante de Epheria',
    advice: 'Indicada para quem procura uma distribuição equilibrada de atributos. Compare sua versatilidade com a especialidade das outras variantes.',
    source, checked: '2026-10-01', imageScale: 1 },
  { id: 'carrack-volante', name: 'Emergência', summary: 'Agilidade para suas viagens pelo oceano.',
    focus: 'Velocidade de movimento', precursor: 'Contratorpedeiro de Epheria',
    advice: 'Também chamada Ascensão no SA. Indicada para quem prioriza deslocamento; sua especialidade é velocidade, enquanto Gradual prioriza carga e Bravura ataque.',
    source, checked: '2026-10-01', imageScale: 1 },
  { id: 'carrack-valor', name: 'Bravura', summary: 'Uma carraca orientada para combate naval.',
    focus: 'Poder de ataque', precursor: 'Contratorpedeiro de Epheria',
    advice: 'Indicada para quem prioriza combate. Sua especialidade é ataque, enquanto outras variantes priorizam carga ou velocidade.',
    source, checked: '2026-10-01', imageScale: 0.92 },
];

export function shipProfile(id: string): ShipProfile {
  const profile = shipProfiles.find(entry => entry.id === id);
  if (!profile) throw new Error('Carraca desconhecida');
  return profile;
}
