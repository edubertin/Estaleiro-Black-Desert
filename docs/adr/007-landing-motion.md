# ADR 007 — Página inicial e movimento decorativo

Status: aceito em 02/10/2026.

## Contexto e decisão

A entrada marítima precede o planejador existente. Manter TypeScript estrito, DOM nativo e CSS, com hash #/carracas para hospedagem estática. Compor PNGs transparentes em camadas CSS e animar transformações/opacidade. Uma seleção ativa controla as legendas, evitando a disputa entre hover e foco.

Respeitar redução de movimento, pausar a página oculta e remover o listener ao sair da landing. React e bibliotecas de animação não são necessários para estes efeitos.

## Consequências

Sem dependências adicionais. Em 03/10/2026, Gerir Marinheiro passou a abrir a página de marinheiros, incluída como segunda entrada HTML no build estático; logo retorna à raiz. Acessórios segue em preparação. Transições usam Web Animations API e clip-path vertical, preservando proporções. PNGs originais preservados e oito derivados WebP lossless adotados na entrada. Preparação de cenas detalhada no ADR 008. Experimentos não utilizados ficam fora do PR.
