# Instruções locais — Estaleiro

- Começar por `PROJECT.md`, `docs/plano-implementacao.md`, specs e ADRs aplicáveis.
- O MVP termina na carraca construída. Tratar peças precursores +10 como requisitos; não implementar craft de equipamento ou simulação de aprimoramento sem mudança explícita de escopo.
- UI: etapa atual em destaque, próximas etapas recolhidas, quantidades para materiais e estados explícitos para equipamentos. Evitar uma tabela global como experiência inicial.
- Preservar IDs internos ao mudar nomes. Região, idioma de interface e nome oficial do item são dimensões separadas. Não inventar traduções oficiais ou equivalência entre receitas regionais.
- Não usar dados provisórios como catálogo validado. Cada requisito publicável precisa de fonte e conferência SA. Fixtures devem estar identificadas como ilustrativas.
- Não contar estoque duas vezes nem concluir fabricação por disponibilidade de materiais.
- Não existem agentes locais ou comandos de aplicação ainda. Usar as especialidades disponíveis quando solicitado; atualizar comandos reais em `PROJECT.md` ao iniciar a aplicação.
- Screenshots, relatórios e builds futuros ficam em diretórios de saída separados da fonte; definir `.gitignore` no bootstrap. Não ler credenciais ou arquivos sensíveis.
