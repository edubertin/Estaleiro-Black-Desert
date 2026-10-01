# Equipamentos — grau exato

Implementado localmente em 01/10/2026. Equipamentos em slots de fundo preto, nome acima, ajuda separada no canto direito e aprimoramento centralizado em vermelho claro com contorno escuro, conforme referência fornecida pelo usuário. Clique no slot abre seleção de Não possuo ou +0 a +10. Escape, cancelar e clique fora fecham sem alteração. +10 destaca a borda dourada.

Estado do equipamento: número inteiro de 0 a 10, `missing` para ausência e `below-10` somente para legado de grau desconhecido. Legado desconhecido mostra +? e solicita o grau no seletor; nunca inventa +0. `ready-10` é normalizado para 10 na entrada. Requisito atende somente em 10, sem progresso proporcional por aprimoramento e sem simulação. Materiais também devem estar completos para habilitar confirmação manual. Consumo marca peça ausente; desfazer devolve 10 e preserva a rejeição de alterações posteriores.

Backup exportado usa formato 2. Importador aceita formatos 1 e 2, preservando o catálogo original. Chave local permanece `estaleiro-project-v1` para retomar backups antigos. Versões futuras continuam rejeitadas. Não alterar nome da chave sem migração explícita.

Verificação: 33 testes e TypeScript estrito passaram; build passou. Testes novos cobrem todos os graus, valores inválidos, round trip, migração dos três estados antigos, consumo e desfazer. Smoke no navegador conferiu +5, reload, Escape, quatro +10, bloqueio enquanto materiais incompletos, desbloqueio após materiais completos, ausência de peça, desktop 1440 e celular 390 sem overflow. Screenshots e script em `output/playwright/gear-levels-*`. Não houve publicação ou commit.
