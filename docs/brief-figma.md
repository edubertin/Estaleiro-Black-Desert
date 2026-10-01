# Estaleiro — brief inicial para Figma

Preparação atualizada em 01/10/2026 para o MVP acordado. Direção visual proposta para revisão. Não há arquivo Figma criado nem interface implementada nesta etapa.

Atualização: arquivo Figma criado posteriormente em 01/10/2026. Ver `figma-prototipo.md` para link, telas, limites e validação. A direção escura foi usada como base inicial revisável.

## Objetivo da experiência

Planejar uma carraca no Black Desert PC e retomar o trabalho com facilidade. A tela principal responde: “o que já tenho?”, “o que falta?” e “qual é a próxima ação?”. Jogadores iniciantes precisam de explicações; jogadores experientes precisam atualizar estoque rapidamente.

## Fluxo

1. Escolher carraca: Gradual, Equilíbrio, Ascensão ou Bravura. Comparar vocação e origem. Confirmar nomenclatura no cliente antes da alta fidelidade. Panokseon fica como rota futura própria na proposta de MVP.
2. Informar ponto de partida: barco atual, equipamentos e nível. Oferecer “Ainda não sei” com ajuda. Mostrar somente etapas relevantes.
3. Meu estaleiro: destino, ponto de partida, etapa atual, resumo de faltantes e próxima ação com motivo.
4. Materiais: agrupamento por etapa, busca, filtro “Faltantes”, quantidade possuída, necessária e faltante.
5. Como conseguir: painel contextual com alternativas, dependências imediatas, local/NPC quando conferido, fontes e data. Árvore completa apenas como detalhe avançado.
6. Carraca construída: confirmação final e revisão das etapas concluídas. O craft de equipamentos e os equipamentos posteriores da carraca ficam fora deste protótipo.

As vistas 3 e 4 podem ser estados da mesma tela de jornada, evitando navegação desnecessária. Equipamentos obrigatórios do precursor aparecem dentro da etapa como requisitos prontos +10; oferecer “Não possuo”, “Possuo abaixo de +10” e “Possuo +10”. Apenas o último atende. Não pedir inventário completo de equipamentos logo na entrada.

## Direção visual

Referências recebidas do usuário: `referencias/carracas/README.md` (quatro barcos com skins) e `referencias/estaleiro/README.md` (expansão e árvore). Usar barcos e ícones para reconhecimento; manter a identidade proposta do site, sem copiar a aparência das janelas do jogo. Preferência explicitada em 01/10/2026. A escolha entre as três propostas ainda está aberta. Prints de expansão têm quantidades divergentes da wiki e não autorizam receitas definitivas.

Marítima, calma e funcional. Azul profundo, superfícies discretas, texto claro e turquesa para ações. Elementos náuticos sutis nas áreas de apresentação; números e listas com fundos limpos. Silhueta do barco identifica o projeto. Esta direção é proposta, sem benchmark visual ou validação de preferência concluídos.

Desktop: navegação lateral enxuta, área de trabalho central e detalhe lateral. Mobile: uma coluna, listas em vez de tabelas largas e detalhe em página própria. Números alinhados; campos editáveis com rótulos persistentes. Foco visível, operação por teclado e estados descritos por texto, não apenas cor.

## Componentes e estados

Seletor de barco, linha de etapas, próxima ação, linha de material, campo numérico, filtros, ajuda de obtenção, requisito de equipamento com três estados e confirmação de etapa. Detalhes de materiais podem explicar processamento conferido; não expandir craft de equipamento.

Estados: projeto novo, estoque não informado, zero, parcial, suficiente, excedente, etapa bloqueada, pronta para fabricar, fabricada, nome oficial pendente, receita não conferida, edição inválida e falha de salvamento. “100% dos materiais” deve continuar distinto de “fabricação confirmada”.

Idioma e região ficam no contexto do projeto. MVP apresenta SA/PT-BR; preparar a arquitetura de componentes para nomes longos e futuros nomes oficiais SA espanhol/NA inglês, sem opções falsas disponíveis no protótipo.

## Prompt para colar no Figma

> Crie um protótipo navegável em português do Estaleiro, ferramenta web para jogadores de Black Desert PC planejarem uma carraca. Desenhe frames desktop de 1440 px e mobile de 390 px. Use direção marítima funcional: azul profundo, superfícies discretas, texto legível, acento turquesa e representação do barco nas áreas de apresentação.
>
> Crie as vistas: escolher destino; informar barco atual; jornada com etapa atual e materiais; detalhe “Como conseguir”; confirmação de evolução; carraca construída. Conecte selecionar carraca → informar barco → atualizar estoque → consultar faltante → abrir origem → confirmar etapa → concluir jornada. A seleção já abre o caminho do navio com origem sugerida, permitindo começar de um barco mais avançado. Mantenha a rota visível, uma etapa aberta e as futuras recolhidas, acessíveis para consulta.
>
> Use Auto Layout, componentes e variantes. Linhas de material mostram Tenho, Necessário e Falta, com campo numérico. Equipamentos precursores são requisitos específicos +10, com estados Não possuo, Possuo abaixo de +10 e Possuo +10. Somente o último atende. Demonstre vazio, parcial, suficiente, bloqueado, concluído, excedente e erro. Checkbox apenas para requisitos binários. Material suficiente não conclui a evolução: o usuário confirma após realizá-la no jogo. Termine na carraca construída; não crie aba de craft de equipamentos nem simulador de aprimoramento. Não apresente percentual como previsão de tempo.
>
> Contexto inicial: SA, PC, PT-BR. Região, idioma e nomes oficiais são dimensões diferentes. Nomes de itens nunca devem ser traduções automáticas do inglês. Use dados do documento de pesquisa somente onde estiverem conferidos; exemplos adicionais devem dizer “dados ilustrativos”. Não invente receitas, estatísticas ou NPCs. Para exemplo visual genérico: necessário 100, tenho 40, faltam 60. Prepare componentes para nomes longos e aliases futuros.
>
> Garanta rótulos persistentes, foco visível, leitura clara, contraste e controles confortáveis. Não coloque texturas atrás de tabelas. A árvore completa não será a tela inicial. Produza páginas Fluxo, Wireframes, Componentes e Protótipo. Não implemente código nem integrações.

## Teste do fluxo antes da alta fidelidade

Com um iniciante e um jogador experiente, testar: escolher destino compatível; localizar próximo requisito; registrar quantidade; explicar bloqueio por equipamento abaixo de +10; reconhecer diferença entre material suficiente e etapa concluída; confirmar evolução e chegar à carraca. Registrar dúvidas e tempo de tarefa sem definir metas numéricas arbitrárias nesta etapa.

Consulta de UX realizada com a especialidade UX Expert; aplicadas as orientações das skills Workflow, Product Design Research e Visual Design Foundations. Recomendações de interface são propostas de produto, não fatos do jogo.
