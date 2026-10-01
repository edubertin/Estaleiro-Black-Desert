# Fase 02 — rotas compatíveis, catálogo SA e interface de jogo

Data: 01/10/2026. Plano posteriormente autorizado para execução por Eduardo. Interface, catálogo SA de fontes oficiais, PNGs, progresso e testes implementados localmente; Figma preservado. Sem commit, push ou publicação. Evidências em `catalogo-evidencias-sa.md` e `qa-fase02.md`.

## Objetivo e ponto de partida

Transformar a base local ilustrativa em uma jornada com conteúdo confiável e interação fácil durante o jogo. Preservar a direção escura já aprovada, as imagens das carracas, a etapa atual em destaque e o fluxo sem depender do Figma.

A aplicação já oferece quatro destinos, filtra origens pela rota escolhida e aceita versões Improved como ponto de partida equivalente. Há controles numéricos, estados de equipamento, salvamento e confirmação manual. O catálogo da demo continua sintético: não é receita do jogo. A próxima fase deve melhorar essas capacidades existentes e substituir dados somente quando conferidos.

## Pesquisa e regras de compatibilidade

Fontes consultadas em 01/10/2026:

- [Guia oficial SA — Melhorias em Navios](https://www.sa.playblackdesert.com/pt-BR/Wiki?wikiNo=291): ramificações, versões melhoradas opcionais, receitas e miniaturas.
- [Guia oficial PC Asia — Ship Upgrading](https://blackdesert.pearlabyss.com/asia/en-US/Game/Wiki?_masterWikiNo=172): confirmação independente da topologia. Não usar suas quantidades para homologar receitas SA.
- Prints fornecidos por Eduardo em `docs/referencias/estaleiro/`: referência visual da árvore e evidência parcial de requisitos; nomes não identificáveis por ícone exigem tooltip ou outra fonte.

O guia SA descreve Veleiro para Gradual/Equilíbrio e Fragata para Emergência/Bravura; o guia internacional confirma Mercante/Caravel e Contratorpedeiro/Galleass como precursores finais. Improved não altera os materiais da evolução seguinte e não é passagem obrigatória.

| Destino escolhido | Barcos atuais oferecidos |
| --- | --- |
| Gradual | Bartali; Veleiro de Epheria; Veleiro de Epheria Melhorado; Navio Mercante de Epheria |
| Equilíbrio | Bartali; Veleiro de Epheria; Veleiro de Epheria Melhorado; Navio Mercante de Epheria |
| Emergência | Bartali; Fragata de Epheria; Fragata de Epheria Melhorada; Contratorpedeiro de Epheria |
| Bravura | Bartali; Fragata de Epheria; Fragata de Epheria Melhorada; Contratorpedeiro de Epheria |

Rota comercial: Bartali → Veleiro → Mercante → Gradual ou Equilíbrio. Rota de combate: Bartali → Fragata → Contratorpedeiro → Emergência ou Bravura. Melhorado pode ser informado como origem; sua fabricação não entra na trilha obrigatória. Começar com um barco posterior elimina etapas anteriores.

Não oferecer jangadas, barcos de pesca, Panokseon ou a outra família como precursores. “Já tenho esta carraca”, se mantido, é um estado final separado. Não implica que uma carraca se transforma em outra.

Derivar opções do modelo de rotas, nunca de uma lista visual independente. Validar também origem/destino ao importar backup e ao criar projeto. Preservar o nome da variante Melhorado informada, mesmo quando compartilha o caminho de requisitos.

### Divergências que impedem homologação automática

O resumo de carracas do guia SA repete Mercante para a família de combate, embora a descrição da própria página e a árvore indiquem outra ramificação, e mistura idiomas em nomes de materiais. Os prints de Bartali trazem quantidades diferentes da tabela da wiki. Registrar conflitos por requisito, sem assumir qual quantidade é atual. Conferir no cliente PC SA; solicitar a Eduardo somente evidências que não possam ser resolvidas em fontes confiáveis.

Correção de nomenclatura informada por Eduardo em 01/10/2026: Ascensão e Emergência são nomes válidos no SA para a mesma carraca. Não tratar essa variação como conflito ou bloqueio de homologação. Manter Emergência na apresentação atual e registrar Ascensão como alias para busca futura e identificação, preservando o mesmo ID interno. Essa confirmação de nome não homologa as quantidades da receita.

Na execução, Eduardo autorizou usar o guia oficial e fontes complementares para resolver divergências. Conferência SA significa conferência documental nas fontes oficiais; inspeção direta no cliente permanece explicitamente separada. A atualização SA 5019 resolveu as quantidades de Bartali; a seção SA de peças e o guia PC internacional esclareceram os equipamentos da Bravura.

## Direção artística e interação

Referências de trabalho: direção aprovada do Estaleiro, screenshots do jogo, skill Visual Design Foundations e referência local Art Director em `C:/Users/edube/.claude/agents/art-director.md`. A referência foi lida; não houve consulta a um agente nesta entrega.

Direção: painel de preparação naval, com reconhecimento visual dos itens e progresso claro. Fundo azul profundo, superfícies discretas, contraste alto, detalhes metálicos contidos e destaque turquesa já existente. Cores das velas identificam destinos; não substituem seus nomes. Evitar brilho excessivo, efeitos decorativos e densidade de inventário do jogo.

### Tela de barco atual

Título curto: “Qual barco você já tem?”. Mostrar somente opções compatíveis, com miniatura, nome e seleção evidente. Um botão principal “Continuar”. Ajuda contextual explica a rota e por que a versão Melhorado é opcional. Não mostrar opções impossíveis apenas desabilitadas.

### Tela da etapa atual

- Cabeçalho: barco atual → próxima evolução, imagem e progresso da etapa.
- Materiais: blocos compactos em grade, com ícone, nome curto reconhecível, quantidade registrada/necessária, “Faltam X” e controle `− [quantidade] +`.
- Equipamentos: slots com imagem e selo +10; estados explícitos “Não tenho”, “Abaixo de +10” e “+10”. Não representar equipamento por quantidade genérica ou checkbox ambíguo.
- Próximas etapas recolhidas. Separar cobertura da etapa de cobertura da jornada; não apresentar porcentagem como estimativa de tempo.
- Ação manual “Confirmar evolução” quando os requisitos estiverem disponíveis, com confirmação do consumo. Disponibilidade não conclui fabricação.

Botões +/− alteram uma unidade por clique, com digitação direta para quantidades grandes. Não impor teto igual ao requisito: estoque pode excedê-lo. Impedir negativos e valores fora do intervalo seguro. Desconhecido permanece distinto de zero; pressionar + registra 1 de forma explícita. Preservar foco/cursor durante atualização. Incrementos rápidos podem ser avaliados depois do primeiro teste, evitando muitos botões por item.

Alvos de clique de pelo menos 44 px, preferencialmente 48 px; foco visível, teclado, labels acessíveis e resposta visual ao clique. Informação essencial não depende de hover nem apenas de cor. No mobile, o painel de informações abre por toque e tem fechamento claro.

Botão de informação por item abre painel com nome completo, obtenção, dependências materiais, fonte e data. Texto técnico e dicas extensas ficam nesse painel. Quantidade faltante, estado +10, falha de salvamento e aviso de conteúdo ilustrativo permanecem visíveis. Dependências são consultivas nesta fase: não adicionar automaticamente matéria-prima ao estoque nem contar item final e insumos como duas coberturas da mesma necessidade.

## Catálogo e pipeline de ícones

1. Inventariar todos os requisitos das oito receitas de evolução: Bartali→Veleiro, Bartali→Fragata, Veleiro→Mercante, Fragata→Contratorpedeiro, Mercante→Gradual, Mercante→Equilíbrio, Contratorpedeiro→Emergência e Contratorpedeiro→Bravura.
2. Para cada requisito: ID estável, nome oficial SA, barco/etapa, tipo, quantidade ou grau/+10, fonte exata, trecho/evidência, data e estado de conferência. Separar nome de exibição, aliases e identidade. Não traduzir nomes de outras regiões como se fossem oficiais.
3. Registrar dependências e métodos de obtenção verificáveis dos materiais no painel contextual. Não expandir craft de equipamentos ou simular aprimoramento.
4. Manter conflitos como pendências editoriais. Fonte encontrada não equivale a conferência SA. Somente rotas integralmente verificadas saem da demo para uso como guia.
5. Mapear ícone a ID e variante exata de equipamento. A wiki oferece miniaturas individuais; foi localizado, por exemplo, o [PNG de Barra de Grafite para Expansão](https://s1.pearlcdn.com/NAEU/Upload/WIKI/bce12286af620220629215555154.png). A transparência e a resolução de cada arquivo ainda precisam ser inspecionadas.
6. Preferir original utilizável. Se houver fundo, preparar versão transparente preservando objeto, cores e silhueta. Edição por IA é alternativa para arquivos inadequados, com comparação lado a lado; não prometer reprodução idêntica pixel a pixel.
7. Salvar PNG RGBA com nomes baseados nos IDs, origem e registro do tratamento. Validar canal alfa, bordas sem halo, objeto sem corte e legibilidade no tamanho real da UI. Não embutir nome, quantidade ou +10 na imagem; esses elementos pertencem à interface.
8. Conferir ícones em fundos claros/escuros e em 32/48/64 px. Não inventar detalhe ausente em miniaturas pequenas nem trocar grau/cor por preferência estética. Usar fallback explícito se faltar asset, nunca outro item parecido.

## Ordem de execução e entregas

| Passo | Entrega | Condição para avançar |
| --- | --- | --- |
| 1. Consolidar regras | Atualizar specs 001/002 com matriz de origem, Improved e conflitos | Todas as combinações válidas e inválidas descritas |
| 2. Homologar uma rota | Catálogo SA da Gradual, evidências e manifest de ícones | Caminho completo sem quantidade ou nome pendente |
| 3. Preparar componentes visuais | Proposta local de material com +/−, slot +10 e painel de informação | Estados legíveis desktop/mobile; direção consistente |
| 4. Integrar primeira rota | Jornada Gradual com dados verificados e assets corretos | Cálculo, consumo, salvamento e backup funcionando |
| 5. Completar variantes | Equilíbrio, Emergência e Bravura verificadas | Nenhuma receita herdada por suposição |
| 6. QA e teste com Eduardo | Build local, screenshots e roteiro curto de teste | Checks técnicos e fluxo visual aprovados |

O trabalho de proposta visual pode avançar enquanto as evidências são conferidas, sempre identificado como demo. Sem liberar rota parcialmente validada como guia real. Eduardo participa quando houver dúvida de conteúdo não resolvida ou uma versão concreta para testar; Figma permanece como está.

## Arquivos e decisões afetados na execução

- `apps/web/src/selection.ts`: opções compatíveis e origem Melhorado.
- `apps/web/src/requirements.ts`, `journey.ts`, `ui.ts`, `style.css`: componentes, interação e informações sob demanda.
- `apps/web/src/core/schema.ts`, `catalog.ts` e testes: metadados editoriais, matriz e validação, conforme necessidade.
- Catálogo SA versionado e manifest de assets em arquivos próprios, separados de `demo.ts` e fixtures.
- Assets de itens em diretório próprio; screenshots/relatórios em `output/`.
- Atualizar specs 001/002, brief de interface e plano QA. Complementar ADR 005 se houver mudança de formato ou migração; registrar nova ADR somente se surgir decisão arquitetural real.

Não mapear materiais A/B/C da demo para materiais reais. A troca de catálogo requer fluxo explícito e backup; versões incompatíveis não são reinterpretadas silenciosamente. Não trocar IDs existentes ao corrigir nomes. Não criar backend ou mudar stack nesta fase.

## Critérios de aceitação e QA

- Cada destino oferece exatamente os precursores válidos; origens incompatíveis são rejeitadas também fora da UI.
- Melhorado é opcional e inicia a mesma evolução seguinte, preservando identificação da origem.
- +/−, digitação, zero, desconhecido, excesso e entradas inválidas funcionam sem perda de foco ou estoque.
- Equipamento exige peça/grau/+10 corretos. Ícone parecido não implica equivalência.
- Recursos compartilhados não são contados duas vezes; confirmação debita uma vez; desfazer e retomada preservam as regras existentes.
- Backup de demo não vira catálogo real automaticamente. Erros de persistência aparecem ao usuário.
- Todo requisito real tem evidência SA e ícone identificado; pendências ficam explicitamente fora da homologação.
- Navegação por teclado, painel de informação por toque, texto sem corte, contraste e ausência de rolagem horizontal a 390 px; testar também desktop e zoom de 200%.
- Rodar `npm run check` e `npm run build`; smoke no navegador dos quatro destinos, seleção de origem, atualização, confirmação, desfazer, reload e backup.
- Entregar a Eduardo um roteiro de cinco ações: escolher destino, escolher barco atual, registrar materiais, marcar peças +10 e confirmar evolução. Avaliar se ele identifica o que falta sem abrir a ajuda.

## Limites

MVP termina na carraca construída. Sem Panokseon, craft de peças, simulação de aprimoramento, equipamentos pós-carraca, login ou integração com o cliente. Assets de itens obtidos como PNGs originais transparentes; sem recriação por IA. Publicação e operações Git dependem de pedido próprio.
