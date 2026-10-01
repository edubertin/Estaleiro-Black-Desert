# ADR 004 — Motor TypeScript e persistência local

Estado: adotado para a primeira fatia técnica. 01/10/2026.

Implementar domínio em TypeScript estrito, Zod nas bordas externas e testes nativos do Node 24. Node executa TS sem build para os testes; tsc verifica tipos separadamente. Dependências ficam registradas no lockfile. Core em apps/web/src/core; não criar backend ou banco sem necessidade de sincronização.

Persistência via porta de armazenamento compatível com localStorage, backup JSON e erros propagados. Alternativa com servidor acrescentaria conta, custos e operação sem necessidade acordada. Framework de UI permanece pendente; motor pode integrar a diferentes frameworks. Comandos reais nesta fatia: npm install, npm run typecheck, npm test, npm run check. Dev/build da interface ainda não existem.

Não migrar catálogo automaticamente, não usar fixtures como receita real. A separação segue ADR 003. Referências de arquitetura e QA globais foram lidas para orientar limites e casos; não houve delegação de implementação nesta fatia.

Na fatia navegável posterior, adotados Vite e DOM nativo em TypeScript para minimizar abstrações e dependências da UI. Renderização usa textContent e nós DOM, sem interpolar HTML de dados/importações. Estado/regras permanecem no motor. Dev/build/preview definidos no package.json. Revisão independente de QA realizada nesta evolução. A escolha pode ser revista se a complexidade de componentes justificar framework.
