# Conteúdo editorial SA

`sa-editorial.ts` é o catálogo reconciliado do guia com atualizações oficiais, com oito receitas e IDs compartilhados. `types.ts` descreve evidências; `sa-obtainment.ts` registra métodos informativos e pendências, sem expandir craft no cálculo.

`verifiedSA: true` significa requisito conferido nas fontes oficiais SA aceitas pelo usuário. `clientChecked: false` informa que não houve inspeção direta do cliente. Não confundir os campos. `observedName` preserva a escrita da fonte; `displayName` e `aliases` incorporam correções oficiais sem mudar ID. `quantityBasis` explicita quando a unidade de peça/licença é inferida.

O adaptador de runtime deve preservar versão, ID e fonte. Não converter estoque da demo em estoque SA. Dependências com rendimento não conferido não entram no motor nem viram texto afirmativo de craft. Consulte `docs/catalogo-evidencias-sa.md` e `assets/itens/manifest.json`.
