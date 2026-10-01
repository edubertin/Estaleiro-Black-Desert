import { element } from './ui.ts';

function profileLink(label: string, url: string): HTMLAnchorElement {
  const link = element('a', 'creator-link', label);
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}

function githubIcon(): SVGSVGElement {
  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  icon.setAttribute('viewBox', '0 0 24 24');
  icon.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('fill', 'currentColor');
  path.setAttribute('d', 'M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.2c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.2c0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.4c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z');
  icon.append(path);
  return icon;
}

export function creatorFooter(): HTMLElement {
  const footer = element('footer', 'creator-footer');
  const credit = element('span', 'creator-credit', 'Criado por ');
  credit.append(profileLink('@edubertin', 'https://www.instagram.com/edubertin/'));
  const github = profileLink('', 'https://github.com/edubertin');
  github.setAttribute('aria-label', 'GitHub de edubertin: @edubertin');
  github.prepend(githubIcon());
  footer.append(credit, github, element('small', 'creator-copyright', `© ${new Date().getFullYear()} Estaleiro Black Desert`));
  return footer;
}
