# ADR 007 — Página inicial e movimento decorativo

Status: aceito em 02/10/2026.

## Contexto e decisão

A entrada marítima precede o planejador existente. Manter TypeScript estrito, DOM nativo e CSS, com hash #/carracas para hospedagem estática. Compor PNGs transparentes em camadas CSS e animar transformações/opacidade. Uma seleção ativa controla as legendas, evitando a disputa entre hover e foco.

Respeitar redução de movimento, pausar a página oculta e remover o listener ao sair da landing. React e bibliotecas de animação não são necessários para estes efeitos.

## Consequências

Sem dependências adicionais. Marinheiros e acessórios seguem em preparação. PNGs preservam a arte aprovada, mas aumentam o download inicial; otimizar formato e peso fica como melhoria futura sujeita à revisão visual. Experimentos não utilizados ficam fora da publicação.
