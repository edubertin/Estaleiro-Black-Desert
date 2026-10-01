# Estaleiro — regras propostas de produto e dados

Estado: contexto inicial para specs/ADRs, atualizado em 01/10/2026. SA PC em português é o escopo inicial confirmado por Eduardo. Para o MVP, prevalecem a spec 001 e os ADRs: jornada até a carraca construída, com equipamentos precursores tratados como requisitos +10. Possibilidades abaixo que envolvem craft interno são evolução futura.

## Localização e regiões

Requisito explícito: nomes dos itens não devem ser tratados como tradução literal. Futuramente contemplar SA espanhol e NA inglês.

Separar três dimensões:

| Dimensão | Exemplo | Responsabilidade |
| --- | --- | --- |
| Região do jogo | SA, NA | Regras e versões regionais |
| Idioma da interface | pt-BR, es, en | Botões, mensagens e explicações do Estaleiro |
| Nome oficial de item | Nome conferido no cliente regional | Identificação que o jogador reconhece |

Proposta: uma chave interna estável por conceito de item, sem usar nome exibido como identificador. IDs externos ficam em mapeamentos com namespace da fonte; não assumir que um número de terceiros representa a mesma coisa em todas as regiões.

Cada nome deve registrar item, região, idioma, texto oficial, aliases, fonte, data de conferência e estado de validação. O idioma espanhol exato do cliente deverá ser confirmado; não pressupor um locale por conveniência. Não preencher nomes ausentes com tradução automática e apresentá-los como oficiais.

Receitas pertencem a uma região/versão, não ao idioma. Só compartilhar uma receita entre regiões quando sua equivalência tiver sido validada. A interface pode estar em português e mostrar o nome oficial NA de um item, se essa for a região do projeto.

Projetos e estoque referenciam IDs internos. Trocar idioma muda apresentação; trocar região exige conferir regras e mostrar impacto. Busca futura pode reconhecer aliases, mas precisa resolver ambiguidades com região, categoria e ícone. Identidade, receitas e traduções do guia permanecem separadas.

## Entidades mínimas

- Item: identidade, categoria, nomes e referências externas.
- Barco: variante, linha de origem e slots compatíveis.
- Receita: entradas, saídas, rendimento, processo, local, requisitos, região e versão.
- Método de obtenção: NPC, missão, processamento, mercado, permuta, drop ou evento; custo, cadência e validade quando conferidos.
- Estado de equipamento no MVP: peça/grau exigido; não possuo, possuo abaixo de +10 ou possuo +10. Somente +10 satisfaz o requisito. Regras de tentativas, falha e custos de aprimoramento ficam para o módulo futuro.
- Projeto pessoal: destino, origem, metas, versão do catálogo e etapas confirmadas.
- Estoque: item e quantidade declarada disponível. Equipamentos incluem grau, nível e slot.
- Alocação: quantidade reservada a um requisito; uma unidade não satisfaz dois usos simultâneos.

## Cálculo e estados

Materiais usam quantidades; requisitos binários usam confirmação. Zero é diferente de “ainda não informado”. Excedentes continuam no estoque, embora a contribuição ao requisito pare em 100%.

No MVP, peças de equipamento são requisitos finais: não expandir seus insumos no cálculo. No futuro, uma peça pronta substituirá suas dependências ainda necessárias; nunca contar peça e insumos simultaneamente. Um item compartilhado deve ter demanda agregada e alocação determinística. Alternativas de receita são escolhas, não requisitos cumulativos.

Ter todos os materiais significa “pronto para fabricar”. A construção só passa a concluída quando o jogador confirma. Ao confirmar uma fabricação dentro do aplicativo, deve-se atualizar os insumos utilizados e registrar o resultado numa operação consistente, com possibilidade de desfazer. Para peças declaradas como já existentes, não descontar novamente insumos históricos.

Trocar destino deve recalcular o plano e liberar/reaplicar reservas, preservando o inventário real. Trocar versão do catálogo deve mostrar alterações antes de replanejar um projeto existente.

## Progresso compreensível

Mostrar primeiro “requisitos atendidos” e “pronto para evoluir”. Percentual por material: disponível alocado / necessário, limitado a 100%. Não somar unidades de madeira, moedas e peças como se tivessem o mesmo esforço.

Para um percentual agregado inicial, proposta a validar: média do atendimento dos requisitos explícitos da etapa, com uma contribuição por requisito e dependências representadas uma única vez. Denominar “cobertura dos requisitos”; não “tempo restante” nem “custo concluído”. A árvore expandida para consulta não deve alterar o denominador.

O MVP termina no casco construído; metas de equipamento posterior são futuras. Quem já possui o precursor não deve aparentar ter feito no aplicativo etapas históricas que nunca registrou. Mostrar o ponto de partida e a cobertura do plano restante. Adiar percentual único de toda a jornada até validar pesos e comportamento com usuários.

## Critérios iniciais de aceitação

1. Escolher destino e barco atual gera um caminho compatível ou explica a incompatibilidade.
2. Informar quantidade atualiza faltantes e disponibilidade sem mudar o estoque de outros itens.
3. Uma peça pronta elimina insumos pendentes dessa peça, sem duplicar crédito.
4. Estoque compartilhado não é alocado duas vezes.
5. Metas com material suficiente continuam “prontas”, sem concluir fabricação automaticamente.
6. Falha de salvamento é visível; exportação/importação deve preservar identidade e versão.
7. Cada requisito tem fonte e estado de conferência.
8. Mudança de idioma preserva projeto e estoque; receitas não dependem do texto do item.
9. Aprimoramento incerto não produz um total garantido fictício.

## Validação

Exemplos indispensáveis para o futuro motor: estoque parcial; excesso; componente pronto; recurso compartilhado por dois slots; receita alternativa; barco atual incompatível; início com carraca existente; fabricação confirmada e desfeita; mudança de variante; catálogo atualizado; nome oficial indisponível.

Tecnologia e persistência permanecem em aberto. Preferência proposta: catálogo editorial versionado separado do motor de cálculo e da UI. O primeiro protótipo pode usar fixtures claramente identificadas sem antecipar integração com o jogo.
