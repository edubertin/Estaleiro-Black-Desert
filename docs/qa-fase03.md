# QA — apresentação das carracas

01/10/2026. TypeScript, 29 testes e build passaram. Dois testes novos conferem IDs/percursores dos perfis contra o catálogo, fontes SA, alias Ascensão e ausência de valores numéricos inventados.

Smoke Playwright percorreu as quatro carracas: título correto, uma janela por vez, cancelamento por Escape sem alterar armazenamento, foco restaurado, abertura por Enter, CTA e origens compatíveis. Ícone de importação possui nome acessível e SA PT-BR foi retirado da interface. No celular 390×844, fechar por X e movimento reduzido foram verificados, sem overflow horizontal. Screenshots desktop/mobile inspecionados.

Evidências em output/playwright: fase03-smoke.js, fase03-dialog-desktop.png e fase03-dialog-mobile.png. Perfil de teste isolado; armazenamento do navegador de Eduardo não foi alterado.

Limites: peso, slots, velocidade e combate numéricos não receberam conferência suficiente em fontes oficiais SA e não são publicados. Perfis qualitativos usam o guia oficial 291; não constituem auditoria do cliente. Não houve auditoria de leitor de tela nem nova rodada completa de importação/exportação nesta fase; os handlers existentes foram preservados. Clique no backdrop e contenção de foco usam diálogo nativo e ainda precisam de check explícito.
