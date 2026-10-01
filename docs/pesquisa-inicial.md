# Estaleiro — pesquisa inicial

Pesquisa em 01/10/2026. Plataforma inicial: Black Desert PC, região SA, português. Documento de descoberta; não constitui catálogo completo homologado nem especificação aprovada. Após a pesquisa, o MVP foi delimitado: quatro carracas até o casco construído, peças precursores como requisitos +10, craft detalhado e equipamentos posteriores no roadmap. Ver `plano-implementacao.md`, spec 001 e ADR 001.

## Produto

Guia interativo de construção naval que combina objetivo, estoque pessoal, dependências e próxima ação. A pessoa deve conseguir entender o caminho sem abrir várias planilhas ou decorar receitas. Proposta: “Escolha seu barco. Informe o que já tem. Descubra o que falta e como conseguir.”

O pedido inicial contempla as quatro carracas; Panokseon entra no contexto e deve ser uma rota independente no modelo. Recomenda-se validar as carracas primeiro e decidir depois se o Panokseon integra a primeira entrega.

## Caminhos de evolução

| Destino | Nome inglês encontrado nos guias | Linha de origem | Vocação inicial |
| --- | --- | --- | --- |
| Gradual | Advance | Veleiro de Epheria → Navio Mercante de Epheria | Capacidade de carga/permuta |
| Equilíbrio | Balance | Veleiro de Epheria → Navio Mercante de Epheria | Atributos equilibrados |
| Ascensão | Volante; também Flight em fonte NA/EU | Fragata de Epheria → Contratorpedeiro de Epheria | Velocidade |
| Bravura | Valor | Fragata de Epheria → Contratorpedeiro de Epheria | Combate |

O Bartali é uma entrada possível. Comprar o registro do Veleiro/Fragata permite começar adiante. A melhoria intermediária “Melhorado” é opcional para o caminho de expansão. Evoluções acontecem pelo gerente do cais; fabricação de peças envolve oficinas. A UI deve distinguir essas operações.

Fonte: [Guia oficial SA — Melhorias em Navios](https://www.sa.playblackdesert.com/pt-BR/Wiki?wikiNo=291). A tabela dessa página contém uma aparente inconsistência na origem das variantes de combate; cruzamos as rotas com os [guias de carracas](https://www.blackdesertfoundry.com/epheria-carrack-guide/).

## Materiais: primeira referência para levantamento

As tabelas abaixo são um inventário inicial de requisitos publicados. Mantêm nomes ingleses quando a equivalência oficial SA não foi conferida. Não transformar estes nomes em traduções literais no produto. Quantidades de expansão não incluem aprimoramento, reparos, componentes anteriores nem recursos já consumidos.

### Expansão final para carraca

| Material | Gradual | Equilíbrio | Ascensão | Bravura |
| --- | ---: | ---: | ---: | ---: |
| Moon Vein Flax Fabric | 180 | 180 | 210 | 180 |
| Deep Tide-Dyed Standardized Timber Square | 144 | 144 | 144 | 170 |
| Brilliant Rock Salt Ingot | 35 | 30 | 30 | 30 |
| Tear of the Ocean | 42 | 50 | 42 | 42 |
| Brilliant Pearl Shard | 35 | 30 | 30 | 30 |

Além disso: uma proa, um casco, um canhão e uma vela azuis do barco precursor, todos +10. Fonte: [BDFoundry — Carrack](https://www.blackdesertfoundry.com/epheria-carrack-guide/). Os requisitos Gradual/Equilíbrio também foram cruzados com [GrumpyG — Caravel para Carrack](https://grumpygreen.cricket/bdo-epheria-caravel-upgrade/).

### Materiais para fabricar o conjunto azul precursor

Cada coluna representa o conjunto completo de quatro peças, antes de aprimorar o conjunto azul até +10. Também são necessárias as quatro peças verdes correspondentes +10. Ao reconhecer uma peça já pronta, suas dependências saem da necessidade restante.

| Material | Mercante / Caravel | Contratorpedeiro / Galleass |
| --- | ---: | ---: |
| Tide-Dyed Standardized Timber Square | 180 | 180 |
| Cox Pirates’ Artifact (Combat) | 120 | 250 |
| Moon Scale Plywood | 400 | 600 |
| Bright Reef Piece | 180 | 180 |
| Pure Pearl Crystal | 45 | 45 |
| Cox Pirates’ Artifact (Parley Beginner) | 60 | 60 |
| Ruddy Manganese Nodule | 90 | 100 |
| Enhanced Island Tree Coated Plywood | 300 | 300 |
| Seaweed Stalk | 205 | 250 |
| Great Ocean Dark Iron | 150 | 150 |
| Cox Pirates’ Artifact (Parley Expert) | 30 | 30 |
| Luminous Cobalt Ingot | 30 | 30 |

Fontes: [BDFoundry — Sailboat/Caravel](https://www.blackdesertfoundry.com/epheria-sailboat-and-caravel-guide/) e [BDFoundry — Frigate/Galleass](https://www.blackdesertfoundry.com/epheria-frigate-and-galleass-guide/).

Esses dois guias também listam, para as expansões anteriores: licença específica, quatro peças antigas +10, Graphite Ingot for Upgrade, Timber for Upgrade, Adhesive for Upgrade e Island Tree Coated Plywood. A linha mercante acrescenta Rock Salt Ingot, Deep Sea Memory Filled Glue e Seaweed Stalk; a linha de combate acrescenta Tide-Dyed Standardized Timber Square, Cobalt Ingot, Moon Scale Plywood e Seaweed Stalk. As receitas de processamento envolvem zinco, casca, caroço de árvore, seivas e Sea Monster’s Ooze. Há receitas alternativas; rendimentos de processamento precisam ser validados antes de expandir requisitos até matéria-prima.

### Panokseon

Fabricação própria no estaleiro do Vilarejo Mu-Duh; não é evolução de uma carraca.

| Requisito | Quantidade |
| --- | ---: |
| Projeto: Panokseon | 30 |
| Prego de Madeira Embebido em Água do Mar | 250 |
| Madeira Compensada de Pinheiro Refinada | 300 |
| Cola com Traços de Ondas Profundas | 200 |

Fonte: [Introdução oficial SA — 14/06/2023](https://www.sa.playblackdesert.com/pt-BR/News/Detail?groupContentNo=3026), cruzada com [guia Panokseon atualizado em setembro de 2026](https://www.blackdesertfoundry.com/panokseon-ship-guide/). Projetos, moedas e drops têm canais de obtenção diferentes. Não converter a antiga cadência semanal em prazo garantido.

### Depois do barco construído

Carraca: Toro → Shiro (Chiro em inglês) → Falasi. Panokseon: Haemo → Byukgye/Bhyohk-Gye → Cheongun. Os nomes SA do Panokseon ainda exigem conferência individual. Cada linha possui quatro slots, e a peça anterior +10 participa da fabricação seguinte.

Para peças azuis de carraca, o levantamento inclui projetos por slot, licença da variante, Violent Wave Plywood, Delicately Polished Support e Wave Residue Adhesive. Suas dependências incluem partes de monstros marinhos, crocodilos e reagentes comprados com Moedas Corvo. Usar a receita por slot, não multiplicar um total genérico sem conferência. Referência: [BDFoundry — Carrack](https://www.blackdesertfoundry.com/epheria-carrack-guide/).

Para equipamentos amarelos, as notas SA de 27/08/2026 confirmam, por peça: equipamento azul correspondente +10, projeto x10, permissão específica x1, Suporte de Coral Sólido x125, Madeira Compensada Gravada de Onda Forte x75 e Adesivo de Coral Carmesim Adormecido x50. A Pedra Negra da Onda Crepuscular usa Essência de Coral Crepuscular x1 + Pedra Negra da Onda x100. O aprimoramento amarelo envolve falhas e possível perda de nível. Fonte: [Atualização oficial SA — 27/08/2026](https://www.sa.playblackdesert.com/pt-BR/News/Notice/Detail?groupContentNo=8511).

## O que a comunidade mostra

- **Controle manual continua relevante.** Jogadores compartilham planilhas e calculam moedas para completar materiais. Há também um tracker aberto, o Sailor’s Log. Evidência: [Reddit — Spreadsheets For Carrack, abril de 2026](https://www.reddit.com/r/blackdesertonline/comments/1srhjrn/spreadsheets_for_carrack/). Oportunidade inferida: o diferencial precisa ser orientação em PT-BR e facilidade de retomada, além da lista de materiais.
- **A última dependência bloqueia a construção.** Em setembro de 2026, um jogador relata precisar de nove lingotes de cobalto e ter gasto as moedas; outro não sabe como atualizar permutas para materiais. Evidência: [Reddit — Quick question building Carrack](https://www.reddit.com/r/blackdesertonline/comments/1w44h1g/quick_question_building_carrack/). Oportunidade: “Como conseguir” e explicação das alternativas junto do faltante.
- **Equipamento posterior precisa entrar no planejamento.** Na mesma discussão, a comunidade lembra a reserva para as peças verdes da carraca. Oportunidade: apresentar essa etapa desde o início, sem misturar sua conclusão com a construção do casco.
- **Atualização de dados é parte do produto.** O autor do Serenity relata atualização de cálculos, imagens, rotas e guias contextuais. Evidência: [Reddit — Serenity 2.8/2.9, julho de 2026](https://www.reddit.com/r/blackdesertonline/comments/1v26ptd/updated_barter_calculator_serenity_28/).

São relatos qualitativos, não uma estimativa da frequência desses problemas em toda a população.

O [guia comunitário SA de missões diárias e permuta](https://www.sa.playblackdesert.com/pt-br/Forum/ForumTopic/Detail?_topicNo=5368) foi localizado, mas o corpo não ficou acessível na extração. Não usamos seus detalhes para validar receitas. O [debate NA/EU sobre aprimoramento](https://www.naeu.playblackdesert.com/DE-DE/Forum/ForumTopic/Detail?_opinionNo=202621&_topicNo=56668) é opinião de jogadores, não regra oficial.

Referência concorrente encontrada: [Sailor’s Log](https://sail.walior.it/). A página depende de JavaScript e não houve auditoria visual nesta pesquisa; não atribuímos funcionalidades além da descrição pública e do relato do autor no Reddit.

## Divergências e limites

1. Ascensão e Emergência são nomes válidos no SA para a mesma carraca, conforme confirmação de Eduardo em 01/10/2026. Preservar o mesmo ID interno e registrar ambos os nomes; essa variação não é conflito de nomenclatura. Nomes de outras regiões permanecem separados dos aliases SA.
2. Algumas páginas oficiais ainda citam pedras antigas; notas recentes usam Pedra Negra da Onda. Não copiar um guia antigo inteiro como catálogo atual.
3. Regras de permuta mudaram. As notas de [06/12/2023](https://www.sa.playblackdesert.com/pt-BR/News/Detail?countryType=pt-BR&groupContentNo=3903) já reduziram desbloqueios dos materiais brilhantes; não usar limites antigos de 3.000/5.111 trocas.
4. Eventos temporários podem oferecer itens e equipamentos. Modelar como alternativa com validade, não como caminho permanente obrigatório.
5. Ainda faltam a conferência das receitas SA por slot, IDs de itens, nomes oficiais individuais, quantidades das etapas iniciais, receitas recursivas, rendimentos, reparos e regras atuais de aprimoramento. Esta pesquisa dá contexto suficiente para specs e protótipo, mas não para publicar um calculador exato.

## Recomendação de escopo

Primeiro: quatro destinos de carraca, entrada pelo barco atual, estoque manual, requisitos de equipamentos +10 com estado abaixo do alvo, lista de faltantes, fontes de obtenção, progresso por etapa e confirmação manual de evolução. Sem craft interno de equipamento. Sem login obrigatório; considerar salvamento local e exportação/importação para backup.

Depois: Panokseon completo, metas avançadas de equipamento, perfis múltiplos e sincronização opcional. Espanhol SA e inglês NA dependem de nomes oficiais e validação regional, não de tradução automática.

## Base para specs e ADRs

Propostas, ainda não decisões aprovadas:

- PRD: público, problema, objetivos, escopo e critérios de sucesso.
- Spec de catálogo: identidade de itens, receitas, requisitos, alternativas, origem, região e validade.
- Spec de construção: barco atual, destino, etapas e equipamento existente.
- Spec de estoque/progresso: reservas, consumo, excesso, montagem, desfazer e cálculo.
- ADR de localização: identidade estável e nomes oficiais por contexto, detalhado em `contexto-produto.md`.
- ADR do motor: grafo de dependências acíclico, receitas alternativas explícitas e ausência de dupla contagem.
- ADR de persistência: MVP local versus conta/sincronização; importação e evolução de versão.
- ADR de atualização: catálogo versionado, evidência por receita e migração de projetos existentes.

Antes do catálogo publicável, validar uma rota completa com Eduardo: origem → peças → carraca, com estoques e componentes existentes. Depois conferir as outras três variantes. Não definir framework, banco ou autenticação por antecipação.
