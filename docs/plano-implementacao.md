# Estaleiro — primeiro plano de implementação

Data: 01/10/2026. Execução local posteriormente autorizada por Eduardo. Specs 002–004, ADRs 004/005, motor, interface e origens Improved implementados; Figma criado e preservado por preferência do usuário. Fase 02 executada com catálogo SA baseado em fontes oficiais, PNGs e QA de navegador; ver `plano-fase-02-interface-catalogo.md`. Tabelas de fases abaixo preservam o planejamento inicial e devem ser lidas junto ao estado atual em PROJECT. Este plano é histórico. O MVP foi publicado; estado atual e autorização de publicação estão registrados em PROJECT.md e docs/publicacao.md.

## Resultado esperado

Uma web app SA/PT-BR que permita escolher uma carraca, informar o barco atual, acompanhar uma etapa por vez, registrar materiais e requisitos de equipamento +10 e chegar à carraca construída. A experiência deve permanecer legível durante a consulta junto ao jogo.

## Decisões e limites

Aceito: quatro carracas; entrada pelo barco atual; apresentação gradual; equipamentos precursores como requisitos finais; sem craft detalhado no MVP; equipamentos da carraca e Panokseon no roadmap; nomes oficiais separados da identidade do item.

Proposto: primeiro projeto único, salvamento local sem conta obrigatória, catálogo editorial versionado e regras separadas da UI. Ainda aberto: stack, mecanismo de persistência, fórmula de cobertura e tratamento definitivo de consumo/reservas.

## Documentos necessários

| Artefato | Conteúdo mínimo | Quando precisa estar pronto | Estado atual |
| --- | --- | --- | --- |
| PROJECT/README/AGENTS | Mapa, escopo, contexto e regras locais | Agora | Criados |
| Spec 001 — jornada | Fluxo, estados, escopo e critérios | Antes do Figma e navegação | Baseline criado |
| Spec 002 — catálogo SA | IDs, nomes oficiais, etapas, quantidades, fontes, versão e revisão | Antes de cálculo com dados reais | Planejada |
| Spec 003 — estoque/progresso | Quantidades, estados +10, reservas, consumo, desfazer, fórmula e mudança de destino | Antes do motor | Planejada |
| Spec 004 — persistência/backup | Retomada, exportação/importação, validação, falhas e migração | Antes de dados duráveis | Planejada |
| ADR 001 — limite do MVP | Craft fora da jornada inicial | Agora | Aceito |
| ADR 002 — identidade/localização | Região, idioma e nomes oficiais separados | Antes do catálogo | Aceito |
| ADR 003 — fronteiras | Catálogo/cálculo/UI | Antes do bootstrap | Proposto |
| ADR 004 — stack/persistência | Alternativas, custo de manutenção e comandos | Antes do bootstrap | Planejado |
| ADR 005 — catálogo/progresso versionados | Compatibilidade e impacto de patches | Antes da troca de versões | Planejado |
| Brief Figma | Frames, componentes, estados e tarefas de validação | Agora | Atualizado |
| Catálogo de evidências | Receita/item, fonte, conferência no cliente e divergências | Durante validação de dados | Pesquisa parcial disponível |
| Plano QA e checklist de conteúdo | Casos de cálculo, retomada, navegação, acessibilidade e receitas | Antes de entrega utilizável | Casos iniciais abaixo |

Criar specs 002–004 e ADRs restantes na ordem acima; não abrir arquivos vazios. Usar tabelas de evidência simples antes de construir um painel administrativo.

## Fases e dependências

### 0. Base documental — esta entrega

Consolidar escopo, registrar decisões aceitas e alinhar brief. Concluída quando os documentos não exigem craft detalhado ou equipamentos pós-carraca no MVP e distinguem proposta de decisão.

### 1A. Conferência de dados

Começar por uma rota completa e depois conferir as outras variantes. Registrar origem, requisitos por etapa, equipamento/grau/+10, quantidade, método de obtenção, fonte, região e data. Resolver os nomes Ascensão/Emergência e outros aliases no cliente SA. Catalogar somente dependências que a UI do MVP apresentará; receitas internas de equipamentos ficam no backlog.

Entrega: spec 002 + catálogo editorial conferido. Saída: cada requisito do caminho publicado tem evidência; nenhuma quantidade incerta é preenchida por suposição.

### 1B. Figma — pode começar enquanto 1A acontece

Eduardo desenha usando `brief-figma.md`. Criar fluxo e wireframes antes da alta fidelidade. Trabalhar com uma jornada representativa e dados ilustrativos identificados onde não houver conferência. A revisão deve validar registro de estoque, consulta de faltante e passagem manual de etapa.

Entrega: link do Figma e fluxo navegável desktop/mobile. Saída: nomes longos, equipamento abaixo de +10, material suficiente e bloqueios ficam compreensíveis. Aprovar direção visual com Eduardo antes da implementação de UI relevante.

### 2. Refinar comportamento e arquitetura

Escrever specs 003/004 e ADRs 003/004/005. Definir estoque compartilhado, consumo/desfazer e fórmula antes de calcular percentuais. Decidir persistência e registrar comandos reais. Confirmar se o ponto inicial cobrirá Bartali e compra de registro, sem tornar etapa opcional obrigatória.

Entrega: regras implementáveis com exemplos e decisões técnicas revisáveis. Saída: casos de borda têm resultado esperado e nenhuma escolha técnica importante fica escondida no código.

### 3. Primeira fatia navegável

Após pedido de implementação: bootstrap mínimo e uma rota com fixtures sintéticas. Seleção → origem → etapa → edição → ajuda → confirmação → retomada. Implementar UI conforme Figma e regras de domínio separadas. Evitar começar com quatro fluxos incompletos.

Entrega: preview local com indicação de dados ilustrativos. Checks: tipagem estrita, build e fluxo principal, com verificação visual desktop/mobile. Saída: uma jornada completa funciona; ainda não é catálogo de jogo publicado.

### 4. Catálogo real e quatro carracas

Conectar dados conferidos de 1A ao motor validado; cobrir as quatro variantes e todas as etapas iniciais acordadas. Implementar backup/importação segundo a spec, com validação externa e sem perder o estado salvo quando uma importação falhar.

Entrega: candidato utilizável localmente. Saída: receitas e origem corretas por variante, retomada confiável e estados consistentes. Revalidar conteúdo com Eduardo.

### 5. QA e preparação de entrega

Testar com um iniciante e um jogador experiente. Conferir conteúdo SA, mobile, teclado, salvamento, desfazer, troca de destino e atualização de catálogo. Corrigir problemas do escopo. Preparar instruções de uso e limitações conhecidas. Publicação e GitHub somente quando solicitados.

Entrega: MVP revisável com evidências de QA. Sem prazo em dias até avaliar catálogo e primeira fatia.

## Backlog inicial ordenado

| Ordem | Trabalho | Depende de | Evidência de conclusão |
| --- | --- | --- | --- |
| 1 | Conferir uma rota SA/PT-BR de ponta a ponta | Pesquisa | Requisitos e nomes conferidos |
| 2 | Desenhar wireframes no Figma | Spec 001 e brief | Fluxo navegável e estados |
| 3 | Definir catálogo e regras de estoque | 1 e revisão do fluxo | Specs 002/003 com exemplos |
| 4 | Decidir stack e retomada/backup | Requisitos funcionais | ADR 004 e spec 004 |
| 5 | Implementar uma jornada com fixtures | 2–4 | Preview local completo |
| 6 | Adicionar catálogo real das quatro rotas | 1 e 5 | Conferência por variante |
| 7 | QA de uso e conteúdo | 6 | Registro de casos e correções |

## QA que importa

- Material parcial e excedente; campo desconhecido versus zero; número inválido.
- Equipamento inexistente, abaixo de +10, +10 e incompatível com precursor.
- Item compartilhado em duas etapas: nenhuma unidade contada duas vezes.
- Etapa suficiente mas não realizada; confirmação e desfazer; insumos históricos não descontados novamente.
- Origem avançada, origem incompatível, carraca já existente e troca de destino.
- Retomada após fechar/reabrir; salvamento indisponível; importação inválida; catálogo alterado.
- Abrir ajuda sem perder edição, leitura de nomes longos e uso em celular/teclado.
- Quatro variantes conferidas; fixtures não publicadas como receitas reais.

## Riscos e limites

Maior risco: catálogo incorreto ou antigo. Mitigar com evidência por requisito e validação no cliente SA. UI sobrecarregada: uma etapa aberta, ajuda contextual e equipamento como requisito. Progresso enganoso: fórmula explícita e construção confirmada separada da disponibilidade. Perda de progresso: comportamento de persistência/backup definido antes do uso real.

Próximo passo concreto: iniciar os wireframes do brief e a conferência de uma rota, antes de fechar o catálogo e a arquitetura.
