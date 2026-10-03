# ADR 008 — Imagens prontas antes de abrir cenas

Aceito em 03/10/2026. Restrição: nenhuma perda de qualidade na arte aprovada.

## Decisão

Gerar derivados WebP lossless da entrada, preservando PNGs, resolução, transparência
e igualdade dos pixels RGBA decodificados. Não recriar nem reduzir as artes.
Oito arquivos passam de 9.021.709 para 6.547.590 bytes (27,4% menores).

Usar decode() para preparar o conjunto essencial de cada cena. Cache em memória
compartilha pedidos concorrentes; falha/timeout remove o recurso para permitir retry.
Loading mostra recursos preparados, não porcentagem de bytes. Não impor atraso mínimo.
Somente depois da preparação executar a abertura. Indicador da landing acompanha o
centro da faixa marítima. Timeout de 15 s não abre uma cena incompleta.

Preparação e prazos ficam separados da UI para testes de regressão. Progresso tardio
de tentativa falha não altera tentativa nova. Cleanup remove overlay e observador.
Pré-carregar somente fundo e logo prioritários no HTML; não baixar todos os personagens
como pré-requisito da landing. Trocas preparam corpo e piscada por demanda.

## Consequências

Sem dependências de runtime. Primeira visita ainda depende da conexão e do peso dos
assets; loading coordena apresentação e não promete download instantâneo. Originais
continuam no repositório, portanto o tamanho do clone não diminui. Página de marinheiros
ainda usa PNGs e navegação entre documentos, sem SPA ou service worker.

Referências: [decode](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode)
e [resource hints](https://web.dev/learn/performance/resource-hints).
