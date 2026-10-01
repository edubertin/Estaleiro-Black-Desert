# ADR 005 — Catálogo e backup com versões explícitas

Estado: adotado no contrato inicial. 01/10/2026.

Catálogo tem versão editorial; backup tem versão de formato e aponta a versão do catálogo. Rejeitar divergências em vez de recalcular silenciosamente o consumo passado. Migrações futuras devem preservar estoque, histórico e identidade dos itens, com teste específico de compatibilidade.

Troca de rótulo não muda ID. Receita alterada exige avaliação editorial: não assumir equivalência entre SA e NA. A primeira fixture é fixture-v1 e não é versão publicável do jogo. Não implementar serviço de atualização ou migrações sem catálogo real validado.

Fase 02: versão SA `sa-official-2026-10-01` conferida em fontes oficiais. Backups `demo-v1` continuam abrindo como demo; o registro seleciona o catálogo pelo identificador e rejeita versões desconhecidas. Novo plano SA exige escolha explícita ao sair da demo. Estoque sintético nunca é convertido para itens reais. A variante Melhorado tem ID próprio de origem, preservado pelo formato existente de backup, e compartilha a sequência de etapas do precursor base.

Atualização: exportação formato 2 com graus numéricos. Formato 1 continua importável: ready-10 vira 10, missing e below-10 são preservados sem inventar nível. Chave local inalterada.
