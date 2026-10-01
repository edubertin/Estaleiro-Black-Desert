import bartali from '../../../assets/barcos-origem/bartali-v1.png';
import sailboat from '../../../assets/barcos-origem/epheria-sailboat-v1.png';
import improvedSailboat from '../../../assets/barcos-origem/epheria-sailboat-improved-v1.png';
import caravel from '../../../assets/barcos-origem/epheria-caravel-v1.png';
import frigate from '../../../assets/barcos-origem/epheria-frigate-v1.png';
import improvedFrigate from '../../../assets/barcos-origem/epheria-frigate-improved-v1.png';
import galleass from '../../../assets/barcos-origem/epheria-galleass-v1.png';

const images: Record<string, string> = {
  bartali, 'epheria-sailboat': sailboat, 'epheria-sailboat-improved': improvedSailboat,
  'epheria-caravel': caravel, 'epheria-frigate': frigate,
  'epheria-frigate-improved': improvedFrigate, 'epheria-galleass': galleass,
};
export function originImage(id: string): string {
  const image = images[id];
  if (!image) throw new Error('Imagem do barco indisponível');
  return image;
}
