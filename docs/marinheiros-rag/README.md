# Base de pesquisa / RAG — marinheiros, nível 10

Consulta: 03/10/2026. Este é o HAG solicitado: base documental recuperável por nome, ID, atributo e fonte. Não exige backend, embeddings ou serviço externo. Registro estruturado em `registro.json`; dados usados pela prévia em `apps/web/src/content/sailors-preview-data.ts`.

## Regras

Fichas seguem o padrão visual aprovado, nível 10, mínimo/máximo por atributo, descrição compacta e fontes em área rolável. Conservar ID do jogo, nome regional e chave do atributo separadamente. Limites individuais não incluem bônus de slot, soma de tripulação, equipamento ou buffs. Não confundir média, objetivo de jogador, maior valor observado e extremo teórico. Não calcular probabilidades sem distribuição documentada. Não assumir que todos os máximos são simultaneamente atingíveis.

## Evidência e decisão para Puro

Fonte primária comunitária: [BDO Sailors 2024 - Public v1.0](https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit), aba Innocent. A introdução atribui dados brutos a NekoNeko e testes à comunidade. M22:M29 são mínimos finais; M32:M39, máximos finais. Conferência adicional: soma do valor inicial e dos nove incrementos mínimos/máximos coincide com cada limite final. Esses são limites informados pela fonte, não amostra de um único jogador nem simulação nossa.

| Atributo SA | Mínimo | Máximo |
| --- | --- | --- |
| Persistência | 2,8% | 4,0% |
| Senso | 1,2% | 1,6% |
| Sentido | 1,4% | 2,5% |
| Força Física | 1,4% | 2,5% |
| Paciência | 0% | 0% |
| Força | 0% | 0% |
| Foco | 0% | 0% |
| Visão | 0% | 0% |

ID 59055 confirmado pela [ficha Codex US](https://bdocodex.com/us/sailor/59055/). Essa ficha retornou nível 1, não deve sustentar limites finais. Portal Codex direto não respondeu no ambiente local; consulta textual web funcionou. A nomenclatura SA usa o [guia oficial](https://www.sa.playblackdesert.com/pt-BR/Wiki?wikiNo=321), com Paciência ainda pendente de confirmação no cliente.

Aceito exclusivamente como referência comunitária na prévia independente. Confiança moderada para a faixa comunitária do Puro; confirmação regional SA pendente. Não promover esse conjunto para catálogo validado de produção. O título 2024 da planilha não prova atualização para 2026.

## Pesquisa cruzada e divergências

- [GrumpyG](https://grumpygreen.cricket/bdo-sailors-guide/): útil para descobrir a planilha original, mas sua tabela histórica contém limites diferentes. A data recente da página não garante revisão de cada tabela.
- [Relato Reddit](https://www.reddit.com/r/blackdesertonline/comments/183hb10): menciona teto de velocidade do Puro em 4%; reforço de relato, não prova do mínimo.
- [Discussão de atributos](https://www.reddit.com/r/blackdesertonline/comments/1j62tgt): valores observados de outros tipos; não usá-los como extremos de população.
- [Fórum Gamez](https://forum.gameznetwork.com/threads/sea-content-sailors-get-no-stats-at-level-10.233514/): servidor privado; excluído da validação do jogo oficial.
- [Alteração do Quick em laboratório, outubro de 2025](https://www.blackdesertfoundry.com/global-lab-updates-10th-october-2025/): alerta de dados anteriores ao rebalanceamento, especialmente alcance/visão. É reprodução de patch de laboratório; requer nota oficial SA antes de substituir valores.
- [BDO Workshop](https://bdoworkshop.com/sailor-presets): resultado indexado reforça os máximos do Puro; conteúdo completo não ficou disponível na leitura textual, portanto não usado como confirmação independente.
- YouTube: busca realizada e índice [Trinity Online](https://www.trinityonline.net/guides) encontrado. Não houve vídeo com tabela completa e timestamps verificáveis; nenhum número foi atribuído a vídeo não assistido.

## Candidatos seguintes

Registro contém 23 abas nomeadas da planilha, incluindo marinheiros especiais. Apenas Puro tem ID associado nesta base; outros não têm tradução SA nem ID presumidos. Isso é fila de pesquisa, não total comprovado de marinheiros do jogo. Os dez slots New foram excluídos por serem placeholders. Nenhum personagem foi criado ou adicionado ao carrossel nesta etapa.

Para cada candidato: confirmar ID e disponibilidade SA; obter limites por atributo/nível com versão; cruzar rebalanceamentos oficiais; registrar unitização e fonte exata; resolver conflitos; só então aprovar para ficha. Caso falte evidência, manter pendente em vez de copiar estatísticas do Puro.

## Reprodução e checks

Download público consultado: URL da planilha com `/export?format=xlsx`, arquivo local `output/sailors-research.xlsx`. Hash SHA-256 no registro. Script `scripts/research/extract-sailors-research.py` lê esse arquivo com openpyxl, valida intervalos e somas, e gera o registro. Não lê credenciais. O arquivo original é saída ignorada, não catálogo publicável.

TypeScript passou após integração. A grade do Puro consome dados explícitos, formata vírgula decimal em PT-BR e trata os quatro zeros como valores da fonte, não placeholders. A ressalva comunitária fica na descrição recolhida.
