# Padrão aprovado — arte e animação dos marinheiros

Aprovado em 03/10/2026. Referência: Puro/Innocent, ID 59055. Página `marinheiros-preview.html` integrada à landing; independente do estado e estoque do planejador. Ver spec 006.

## Arte para novos personagens

Pesquisar identidade por ID e região antes de gerar: espécie, fisionomia, roupa e proporção real. Produzir corpo inteiro frontal e retrato frontal consistentes, preservando referências do jogo. Não transformar goblins em humanos nem reutilizar proporções do Puro para marinheiros maiores.

Prompt base: “Recriar o marinheiro da referência, preservando fisionomia, espécie, roupa, pose frontal e proporções. Corpo inteiro com pés completos, câmera frontal, textura realista compatível com Estaleiro Black Desert, iluminação âmbar lateral de taverna, sem texto. Fundo transparente. Não adicionar acessórios nem alterar identidade.” Retrato deriva dessa mesma identidade. Corpo do Puro: 1024 × 1536.

Frame de piscar: editar a imagem aprovada, solicitando exclusivamente olhos fechados; preservar dimensões, posição, roupa, luz e contorno. Conferir alinhamento e sobrepor apenas a região dos olhos. Não alternar o corpo inteiro entre frames, pois a geração pode mudar outras partes.

Verificar alpha real antes de chamar um asset de transparente. O Puro atual usa máscara CSS aproximada porque os arquivos gerados retiveram fundo; essa limitação não deve ser repetida como promessa de PNG final.

## Movimento aprovado

- Piscar: três fechamentos de aproximadamente 144 ms em 18 s, intervalos de 5–7 s; olhos abertos com movimento reduzido.
- Respiração: sobreposição do mesmo corpo, máscara restrita ao torso, ciclo suave de 4,8 s; pico scale(1.02, 1.014), origem 50% 52%. Cabeça e pés estáticos.
- Luz da taverna permanece atrás do personagem, concentrada nas velas. Tratamento do corpo atual: saturação .86, brilho .8, contraste 1.04.
- Coordenadas dos olhos, máscara do torso, escala e pontos de contato com o chão precisam ser ajustados por asset. Não copiar coordenadas do goblin para outra espécie.

## Validação e recuperação

Conferir bordas, canelas, pés, ausência de duplicação no torso, olhos alinhados, proporção com o cenário e versão estreita. Respeitar prefers-reduced-motion. Manter arquivos aprovados como referência antes de novas tentativas.

Checkpoint local anterior à mudança de rótulos: `output/marinheiros/checkpoint-puro-animacao-aprovada/` (TS e CSS, saída ignorada pelo Git). Assets aprovados ficam em `assets/marinheiros/preview/`. Salvar não significa commit ou publicação.

## Nomenclatura regional

Fonte oficial SA: https://www.sa.playblackdesert.com/pt-BR/Wiki?wikiNo=321
Confirmação SA de 06/03/2025: https://www.sa.playblackdesert.com/pt-br/News/Detail?groupContentNo=5908
Codex português: https://bdocodex.com/pt/sailors/

| Campo original do Codex | Nome mostrado SA | Referente NA encontrado em guias, ainda pendente de fonte oficial NA |
| --- | --- | --- |
| Stamina | Persistência | Endurance |
| Wits | Senso | Wits |
| Awareness | Sentido | Awareness |
| Super Armor | Força Física | Strength |
| Patience | Paciência | Patience |
| Strength | Força | Force |
| Focus | Foco | Focus |
| Vision | Visão | Vision |

A correspondência SA é sustentada pelos grupos oficiais: Vela (Persistência/Senso), Manobra (Sentido/Força Física), Canhão (Foco/Força/Visão). Paciência aparece no Codex PT, mas não nesses grupos oficiais; confirmar no cliente SA antes de validar o catálogo. Não confundir Força Física e Força. As correspondências NA ainda não são catálogo validado: o portal oficial NA não retornou conteúdo legível nesta pesquisa. Não usar nomes do Codex como equivalência regional automática.

Os intervalos de nível 10 do Puro e do Realistic são referências extraídas da planilha comunitária, pendentes de confirmação SA. Zero é um valor da fonte, não um substituto para ausência de evidência. Consultar `marinheiros-rag/` para origem, células e divergências; não apresentar o catálogo de pesquisa como validado.
# Extensão autônoma de 03/10/2026

Aplicar o padrão aprovado aos novos perfis sem modificar os nove anteriores. Os corpos novos usam canvas 1024×1536 com alpha; retratos usam recorte frontal. Goblins ocupam 50% da altura da cena, humanos 66% e gigantes 74%, com apoio no mesmo piso e iluminação quente lateral.

Cada rosto tem máscara de pálpebras própria em `sailors-expansion.css`. Não copiar coordenadas de outro ID nem transformar o quadro fechado para compensar um alinhamento não medido. Conferir primeiro o canvas e a posição do sprite; comparar olhos abertos/fechados na cena com a animação temporariamente parada, depois restaurar o ritmo padrão. A experiência com Persistente mostrou que transformações herdadas deslocam a máscara.

Respiração mantém pés e cabeça estáveis e usa máscara do torso. A taverna não é regenerada para novos personagens. Referência pequena não comprova o corpo inteiro: roupas e partes não visíveis são reconstruções artísticas, registradas na ficha.
