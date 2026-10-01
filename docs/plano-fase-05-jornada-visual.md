# Fase 05 — Jornada visual e materiais

01/10/2026. Estado: implementação local concluída. Workflow: especificação, implementação e verificação; evidências em `qa-fase05.md`.

## Objetivo

Substituir a jornada com textos e coluna lateral por linha do tempo visual centralizada, resumo de progresso e área de materiais em largura completa. Preservar catálogo, inventário, confirmação manual e backups.

## Composição

1. Cabeçalho mantém logo no tamanho atual da jornada e reset por confirmação. Exportar backup vira ícone dourado ao lado de Importar backup, ambos com área mínima de 44 px, tooltip e nome acessível. Exportar só aparece quando existe projeto.
2. Linha do tempo mostra origem real escolhida, evoluções necessárias e carraca final, usando os assets por ID. Não mostrar barcos anteriores à origem nem incluir Melhorado como passo obrigatório. Melhorado selecionado permanece identificado na origem.
3. Barco atualmente possuído recebe glow dourado e marcador além da cor. A evolução em preparação recebe identificação discreta própria, distinguindo barco possuído de barco ainda em construção. Depois da confirmação manual, destaque de posse avança.
4. Abaixo de cada evolução, mostrar disponibilidade percentual da sua receita. Origem mostra “Já possuo” em vez de porcentagem de fabricação fictícia. Etapas confirmadas: 100% com confirmação visual; próximas: cálculo com estoque alocado sem duplicação.
5. Logo abaixo da linha do tempo, progresso geral centralizado: “Progresso do projeto · X%”. Usar journeyCoverage existente. Ajuda contextual explica que é cobertura de requisitos, não tempo nem confirmação de construção.
6. Divisor discreto separa linha do tempo de “Materiais necessários”. Remover títulos Minha Carraca/Preparar, introdução e textos redundantes sobre barco atual. Retirar coluna lateral e carraca repetida. Materiais e equipamentos precursores ocupam a largura disponível.

## Interações e texto essencial

Etapa atual abre por padrão. Clique numa evolução futura permite consultar requisitos em modo de leitura, sem mover etapa ativa ou confirmar fora de ordem; oferecer retorno simples à etapa atual. Origem pode abrir informação de posse, sem receita de fabricação anterior. Manter nome dos itens, quantidades, faltantes, controles +/−, estados dos equipamentos e ajuda de obtenção.

Simplificar instruções permanentes, mas manter rótulo “Equipamentos +10” e confirmação manual da expansão, pois materiais disponíveis não provam construção. Desfazer continua acessível após uma etapa confirmada. Trocar destino pode ficar em ação discreta com confirmação existente; não desaparece com a coluna lateral.

Ao confirmar último passo, usar a tela de parabéns existente, sem timeline ou materiais. Falhas de importação, salvamento e validação continuam visíveis.

## Modelo e arquitetura

Criar representação derivada da timeline usando stagesFrom, project.origin, history, calculate e journeyCoverage. Separar estado de posse, etapa ativa de fabricação e etapa consultada. Estado consultado é de interface; não entra no backup. Preservar IDs, versões, receitas e cálculo atual.

Arquivos previstos: journey.ts (composição), journey-timeline.ts (novo componente/modelo), main.ts (ícone de exportação), origin-images.ts e assets de carracas (lookup), requirements.ts (apenas se necessário separar leitura de edição), style.css, specs 001/003 e relatório QA. Não migrar React, não alterar motor sem falha demonstrada, não criar novo ADR para reorganização visual.

## Responsividade e movimento

Desktop: barcos em uma faixa central, dimensões consistentes e nomes alinhados. Celular: timeline compacta com rolagem horizontal interna se necessário, etapa atual inicialmente visível e sinal de continuação; nunca overflow da página. Materiais abaixo permanecem legíveis e clicáveis. Glow e transição discretos, respeitando prefers-reduced-motion. Foco e seleção identificáveis por teclado e leitores de tela.

## Ordem de implementação

1. Modelar nós e percentuais com testes de comportamento.
2. Montar timeline com imagens e estados distintos de posse/preparação/consulta.
3. Remover textos redundantes e sidebar; expandir área de requisitos.
4. Migrar ações da sidebar e exportação para controles compactos.
5. Conferir responsividade, foco, consulta futura e conclusão; atualizar documentação.

## Aceite e testes

- As quatro rotas e origens iniciais/intermediárias/Melhoradas produzem sequência correta, sem etapa extra ou histórico inventado.
- Estoque compartilhado não aparece disponível duas vezes; cobertura geral continua ponderada por requisitos, sem média incorreta dos nós.
- 100% de disponibilidade não avança barco possuído nem abre parabéns sem confirmação.
- Confirmar/debitar, desfazer e reload mantêm destaque, percentuais, inventário e histórico consistentes.
- Consultar futuro não muda etapa ativa ou estoque; confirmação só na etapa ativa.
- Exportação/importação preservam backup; reset segue solicitando confirmação.
- Verificar desktop 1440/1722 e celular 390 px: alinhamento, legibilidade, foco, movimento reduzido e ausência de overflow da página.
- Rodar check/build, testes de timeline e smoke navegador das ações principais; registrar screenshots em output/playwright.

Implementação autorizada pelo usuário. Entrega local, sem commit ou publicação. Check com 31 testes e build passaram; smoke visual em desktop 1440 px e celular 390 px. Validação adicional em 1722 px permanece pendente.
