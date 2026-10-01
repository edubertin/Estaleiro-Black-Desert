# ADR 002 — Identidade de item separada da localização

Estado: aceito como requisito de domínio por Eduardo. Data: 01/10/2026. Formato de armazenamento ainda a definir.

## Contexto

Nomes de itens do SA português, SA espanhol e NA inglês não correspondem necessariamente a traduções literais. Nome não é uma chave confiável para salvar progresso.

## Decisão

Identificar itens e barcos com IDs internos estáveis. Separar região do jogo, idioma da interface e nomes oficiais. Nomes/aliases são mapeamentos editoriais com fonte e conferência. IDs de terceiros registram namespace; equivalência entre regiões precisa ser verificada.

Receita depende de região e versão, não do idioma. Entrega inicial somente SA/PT-BR; preparar a estrutura para expansão sem habilitar opções incompletas. Não usar tradução automática como nome oficial.

## Alternativas

Usar nome como chave quebraria estoque quando um nome fosse corrigido. Traduzir nomes ingleses automaticamente diminuiria a correspondência com o cliente do jogador. Duplicar itens por idioma dificultaria migração e consistência.

## Consequências

Trocar idioma preserva os IDs do estoque/projeto. Trocar região pode alterar requisitos e exige replanejamento explícito. Conteúdo editorial e mensagens da interface têm processos de manutenção distintos.
