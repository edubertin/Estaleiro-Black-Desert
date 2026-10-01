# Estaleiro

Atualizado em 01/10/2026.

## Identidade e estado

Aplicação web para jogadores de Black Desert PC planejarem uma das quatro carracas, registrarem materiais e seguirem a evolução do barco atual até a carraca construída. Público inicial: SA em português. Futuro: SA espanhol e NA inglês, com nomes oficiais próprios.

Fase: MVP funcional com slots ilustrados, graus exatos de equipamentos, origens compatíveis e timeline. Catálogo SA de oito receitas conferidas nas fontes oficiais; demo antiga preservada por versão. Não houve inspeção direta do cliente do jogo; ver `docs/catalogo-evidencias-sa.md`. Publicação pública autorizada em 01/10/2026; ver `docs/publicacao.md`.

## Escopo aceito

Escolha de destino → ponto de partida → jornada por etapas → materiais e equipamentos necessários → confirmação manual da evolução → carraca construída.

Equipamentos registram ausência ou +0 a +10; apenas +10 atende. Legado abaixo de +10 preserva grau desconhecido. Craft e simulação de aprimoramento ficam fora do MVP. Equipamentos da própria carraca e Panokseon ficam no roadmap.

## Contexto antes de implementar

1. `AGENTS.md`: regras locais.
2. `docs/plano-implementacao.md`: fases, dependências e entregas.
3. `docs/specs/001-jornada-carraca.md`: baseline funcional.
4. `docs/adr/`: decisões aceitas e propostas.
5. `docs/pesquisa-inicial.md`: evidências e receitas provisórias.
6. `docs/brief-figma.md`: fluxo e instruções de protótipo.

## Arquitetura e estrutura

TypeScript estrito, Vite e DOM nativo; Zod, testes nativos Node 24 e localStorage. Ver ADRs 004/005/006. Sem backend, banco, telemetria ou login. Hospedagem estática nos Sites do GPT.

Fonte em `apps/web/`, catálogo editorial em `apps/web/src/content/`, imagens em `assets/`, metadados e card social em `index.html`/`public/`, documentação em `docs/`. Builds e evidências ficam em diretórios ignorados.

## Comandos e validação

Instalação: `npm install`. Dev: `npm run dev -- --port 5173`. Build: `npm run build`. Preview do build: `npm run preview`. Tipagem: `npm run typecheck`. Testes: `npm test`. Check conjunto: `npm run check`. Sem comando lint. Fonte em `apps/web/src/`; fixtures e demoCatalog explicitamente ilustrativos. Catálogo editorial em `content/`, adaptador `sa-catalog.ts` e registro de versões em `catalog-context.ts`. 33 testes passaram; QA recente em `docs/equipamentos-graus.md` e `docs/publicacao.md`.

## Limites

Dados do jogo são editoriais e precisam de fonte, região, versão e conferência. Fixtures ilustrativas nunca se tornam receitas públicas por acidente. Não integrar conta ou cliente do jogo no MVP. Publicação pública e GitHub autorizados pelo usuário nesta entrega; futuras alterações seguem as regras locais de autorização.
