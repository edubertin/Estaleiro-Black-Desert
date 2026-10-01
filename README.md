# Estaleiro Black Desert

Planeje uma das quatro carracas de Black Desert PC SA: escolha seu destino e barco atual, registre materiais e equipamentos e acompanhe a evolução até a construção.

## Funcionalidades

- Gradual, Equilíbrio, Emergência/Ascensão e Bravura, com origens compatíveis.
- Materiais com quantidade editável e controles +/−; equipamentos de +0 até +10.
- Linha do tempo e disponibilidade calculada sem contar estoque duas vezes.
- Confirmação manual da evolução e possibilidade de desfazer.
- Progresso salvo no navegador; exportação e importação de backup JSON.
- Interface responsiva em preto e dourado, com ícones ilustrativos de alta resolução.

## Executar

Requer Node.js 24 ou superior compatível e npm.

```sh
npm ci
npm run dev -- --port 5173
npm run check
npm run build
```

Abra http://127.0.0.1:5173. `npm run preview` serve o build de produção. Não requer chaves, conta, backend ou configuração de ambiente.

## Dados e privacidade

O progresso fica no navegador deste dispositivo, sem sincronização com sua conta do jogo ou outros dispositivos. Faça backup antes de limpar os dados do navegador. Os perfis local e público têm armazenamentos separados; para levar seu projeto ao site público, exporte e importe o backup.

Catálogo SA conferido em fontes oficiais, sem inspeção direta do cliente. Disponibilidade de 100% não significa construção automática. Craft de equipamentos, simulação de aprimoramento e Panokseon estão fora do MVP.

Projeto comunitário independente, sem vínculo oficial com Pearl Abyss. Black Desert e os elementos oficiais do jogo pertencem aos respectivos titulares. Ícones e navios ilustrativos foram recriados por IA com referências do jogo; não são assets oficiais. Este repositório público não concede direitos sobre marcas ou imagens de terceiros.

## Documentação

- [Índice](docs/README.md)
- [Specs](docs/specs/001-jornada-carraca.md)
- [ADRs](docs/adr/006-publicacao-estatica.md)
- [Fontes do catálogo SA](docs/catalogo-evidencias-sa.md)
- [Equipamentos e backups](docs/equipamentos-graus.md)
- [Publicação e manutenção](docs/publicacao.md)
