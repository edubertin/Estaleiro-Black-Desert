# QA — primeira fatia do motor

01/10/2026. `npm run check` passou: tipagem estrita e 10 testes nativos Node. Instalação reportou zero vulnerabilidades conhecidas nas dependências instaladas.

Casos: dupla contagem, prioridade da etapa atual, abaixo de +10, cálculo de cobertura, consumo manual único, desfazer preservando aquisição, conflito de edição de equipamento, desconhecido/zero/excedente, origem incompatível/avançada, entradas inválidas, backup adulterado/versionado, retomada, falha de gravação e bloqueio de fixture como catálogo real.

As referências globais Architect e QA Engineer orientaram a revisão. Testes escritos e executados pelo agente principal; não representam avaliação independente de subagente nesta fatia. UI, navegador, receitas reais SA e mapeamento Improved ainda não testados nem entregues. Nenhum commit, push ou deploy.

Próximo passo: conferir uma rota real e os aliases de origem, integrar à primeira interface navegável e verificar fluxo desktop/mobile. A referência interna inválida do Codex observada anteriormente não foi removida; não impede estes checks locais.

## Aplicação local — verificação posterior

15 testes passaram após revisão independente do QA, que acrescentou cinco casos em qa.test.ts. Build Vite e tipagem passaram. Browser smoke verificou edição numérica, preservação do foco ao digitar 100, bloqueio por equipamento, ajuda, consumo, reload, desfazer, troca Gradual → Equilíbrio preservando histórico compatível, conclusão manual e retomada da conclusão. Exportação gerou arquivo e importação exibiu confirmação e restaurou projeto. A automação de seletor de arquivo precisou ser executada pelos comandos upload da CLI; não se considerou o cenário interrompido como aprovado.

Screenshots desktop 1440 px e mobile 390 px inspecionados; ausência de overflow horizontal verificada. Corrigidos foco da quantidade e ligação da troca de destino ao histórico compatível do motor. QA apontou esses pontos por inspeção; após a correção, o agente principal executou os smokes. Favicon ausente corrigido. Catálogo real e ícones do jogo continuam pendentes. Artefatos em output/playwright e registros efêmeros .playwright-cli ignorados pelo Git.
