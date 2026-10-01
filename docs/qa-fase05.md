# QA — Fase 05

01/10/2026. Entrega local da linha do tempo visual.

`npm run check`: TypeScript estrito e 31 testes passaram. `npm run build`: passou.

Os testes novos cobrem todas as rotas e origens compatíveis, preservação da identidade Melhorado, posse sem avanço automático a 100%, confirmação e desfazer. Os testes existentes continuam cobrindo alocação de estoque sem duplicação e persistência.

Smoke em navegador, perfil isolado: Gradual a partir de Bartali, quatro nós visuais, ausência de sidebar, exportação como SVG, consulta futura sem inputs/confirmação ou alteração de localStorage, retorno à etapa ativa, disponibilidade completa sem avanço, confirmação manual, retomada após reload e desfazer. Celular 390 px sem overflow da página. Screenshots desktop 1440 px e celular foram inspecionados visualmente.

Evidências ignoradas pelo Git em `output/playwright/fase05-smoke.js`, `fase05-desktop.png` e `fase05-mobile.png`.

Limites: o smoke desta fase percorreu a rota Gradual; as demais rotas foram cobertas no modelo por testes. Não houve nova rodada completa de exportação/importação nem validação em 1722 px. Os handlers de backup foram preservados. A tela de conclusão existente foi preservada.
