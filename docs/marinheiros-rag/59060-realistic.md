# Realistic — ID 59060

Pesquisa: 03/10/2026. Prévia local; nome SA confirmado como **Realista** no [evento oficial de 16/04/2026](https://www.sa.playblackdesert.com/Pt-BR/News/Detail?groupContentNo=7829) e associado ao ID 59060 na [ficha portuguesa do Codex](https://bdocodex.com/pt/sailor/59060/). “Realistic” permanece como nome da fonte inglesa. Essa confirmação de nome não valida os intervalos RNG comunitários.

## Identidade e referências

- [BDO Codex US](https://bdocodex.com/us/sailor/59060/): identifica ID e tipo; saúde 80, alimentação 100, cabine 10, peso 300 LT. Os atributos mostrados inicialmente são do nível 1.
- [Ícone associado pelo Codex](https://bdocodex.com/items/new_icon/11_employee/employee_59060.webp): endereço extraído do link da ficha. Download direto falhou por timeout nesta sessão.
- [Coleção comunitária](https://infopixservice-debug.github.io/sailor/): identifica Realistic como anão; imagem `assets/sailors/Realistic.webp` usada como referência visual secundária. Associação visual ainda precisa de confronto com captura identificada do cliente.

A imagem apresenta gorro marrom gasto, rosto sem barba, gola volumosa de pele escura, mangas claras e colete de couro com cordões. A parte inferior não aparece no ícone: calça e botas da recriação são uma extrapolação artística conservadora, não aparência comprovada pelo ícone.

## Limites de nível 10

Fonte primária da extração: [BDO Sailors 2024 — Public v1.0](https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit), aba Realistic, mínimo M22–M29, máximo M32–M39. Referência comunitária, não confirmação SA atual.

| Campo interno | Mínimo | Máximo |
| --- | ---: | ---: |
| stamina | 1,1 | 2,5 |
| wits | 1,7 | 3 |
| awareness | 5,7 | 9,8 |
| superArmor | 2,2 | 3,5 |
| patience | 0 | 0 |
| strength | 1,2 | 1,5 |
| focus | 1,2 | 1,5 |
| vision | 41,9 | 48 |

Valores percentuais por indivíduo, sem bônus de função a bordo. Máximos independentes não garantem ocorrência conjunta.

## Cruzamento coreano e divergências

- [Inven — informações sobre marinheiros e imediato](https://www.inven.co.kr/board/black/3584/56288): usa 현실적인 e recomenda esse tipo em funções de manobra/canhão. Evidência comunitária de uso, não prova dos limites SA.
- [Inven — composições por atividade](https://m.inven.co.kr/board/black/3584/58712?my=chu): descreve realidade de ângulo de tiro e rotação. Não converter bônus de posicionamento em atributos individuais.
- [Velia Hub](https://velia-hub.com/es/bdo-wiki/sailors/59060) retorna os mesmos intervalos, mas cabine 5 e valores iniciais diferentes. Não importar esses campos: conservar a origem Codex explicitamente e manter a divergência aberta.

## Arte

Ferramenta: image_gen integrada. Corpo frontal baseado no ícone comunitário; transparência deve ser verificada antes da inclusão. Retrato e olhos fechados devem derivar desse corpo para preservar identidade. Prompts finais ficam em `59060-prompts.md`.

Conjunto incluído na prévia: corpo v2, retrato v1 e olhos fechados v1 em `assets/marinheiros/preview/`. Alpha do corpo verificado: cerca de 50% dos pixels totalmente transparentes, áreas externas amostradas com alpha zero. A visualização do arquivo mostrou o RGB residual do fundo; no navegador, o recorte alpha aparece corretamente sobre a taverna. Tentativas v1/v3 preservadas, mas não utilizadas.

Geometria independente: corpo ocupa 58% da altura da cena no desktop, 60% em telas estreitas; base em 13%. Olhos mascarados em 44,1%/53,4% horizontal e 14,4% vertical. Respiração usa somente o torso, mantendo pés estáticos. Iluminação mantém luz âmbar lateral, saturação contida e sombra coerente com o padrão aprovado do Puro.
