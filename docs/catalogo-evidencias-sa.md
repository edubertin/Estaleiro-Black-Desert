# Catálogo SA — conferência de fontes

Conferido em 01/10/2026. O usuário autorizou o guia oficial como base e a consulta a fóruns/Reddit para dúvidas. `verifiedSA` significa conferência nas fontes oficiais SA, sem afirmar inspeção direta do cliente. `clientChecked` permanece falso. Não usar fóruns para inventar quantidade ou tradução regional.

## Entrega estruturada

`apps/web/src/content/sa-editorial.ts` contém oito receitas, 81 requisitos e 43 identidades compartilhadas. Cada requisito aponta para fonte e localização; cada item separa nome observado, apresentação atual e aliases. A versão é `sa-official-2026-10-01`. Este arquivo não contém estoque nem migra o material sintético da demo.

Os quatro requisitos de equipamento de cada receita são peças individuais +10. Licenças são unidades únicas: a wiki lista o item sem sufixo numérico, e o print de Bartali mostra 0/1. A inferência fica identificada como `single-license-inferred`, em vez de fingir que a tabela escreveu uma quantidade.

## Fontes e decisões

| Fonte | Uso |
| --- | --- |
| [Guia SA 291](https://www.sa.playblackdesert.com/pt-BR/Wiki?wikiNo=291) | Árvore, oito receitas, nomes, requisitos, miniaturas e obtenção |
| [Atualização SA 08/08/2024 — 5019](https://www.sa.playblackdesert.com/pt-BR/News/Notice/Detail?groupContentNo=5019) | Substitui quantidades antigas de Bartali, confirma ouro e nome da vela |
| [Atualização SA 29/05/2024 — 4657](https://www.sa.playblackdesert.com/pt-BR/News/Detail?groupContentNo=4657) | Pedras antigas de aprimoramento substituídas pela Pedra Negra da Onda |
| [Guia PC Asia 172](https://blackdesert.pearlabyss.com/asia/en-US/Game/Wiki?_masterWikiNo=172) | Corrobora somente topologia e equipamentos do Contratorpedeiro para Bravura |
| [Reddit: Carrack Valor total mats](https://www.reddit.com/r/blackdesertonline/comments/1n7fopz/) | Contexto comunitário consistente com Contratorpedeiro/Galleass; não fornece certificação SA |
| [Fórum Steam: Ships](https://steamcommunity.com/app/582660/discussions/0/2262439317588994951/) | Confirma a compreensão comunitária das famílias; não rege receitas |

Os links das quatro carracas dentro da wiki são âncoras da própria página, e não quatro fontes independentes.

## Divergências resolvidas

1. Bartali: a wiki conserva quantidades anteriores à redução. A atualização oficial 5019 coincide com os prints fornecidos: Veleiro usa 350/250/700/100 dos quatro materiais principais e cinco barras de ouro; Fragata usa 450/350/750/200 e cinco barras de ouro. Poste Resistente fica fora dessas receitas atuais. Não escolher a tabela antiga apenas por estar na wiki.
2. O mesmo patch usa Madeira de Construção e Vela Desgastada. Os IDs existentes da coleta editorial preservam os aliases Lenho Padronizado e Vela de Vento Velha; alteração de nome não altera identidade.
3. O resumo da wiki repete Mercante para a família de combate. A descrição, o cabeçalho da receita e a árvore confirmam Contratorpedeiro. A Bravura também copia o prefixo Mercante nos quatro equipamentos; corrigimos apenas a família das peças com a seção específica de equipamentos SA e a tabela internacional de Bravura/Valor. As quantidades de materiais continuam das fontes SA.
4. Ascensão e Emergência são aliases válidos para a mesma carraca, conforme confirmação de Eduardo. Emergência continua sendo a apresentação principal.
5. A wiki ainda ensina Verdejante/Calor/Frio. Não publicar essa orientação antiga no painel de equipamento: o patch 4657 substitui esses materiais por Pedra Negra da Onda. Craft e simulação de aprimoramento permanecem fora do MVP.

## Receitas consolidadas

Cada linha soma os materiais à licença quando aplicável e às quatro peças +10 correspondentes. IDs e nomes completos estão no arquivo tipado.

| Evolução | Quantidades de materiais |
| --- | --- |
| Bartali → Veleiro | Madeira 350; aço 250; compensado de pinheiro 700; linho 100; ouro 1kG 5 |
| Bartali → Fragata | Madeira 450; coral com jade 350; compensado revestido de pinheiro 750; linho reforçado 200; ouro 1kG 5 |
| Veleiro → Mercante | Grafite 100; madeira para expansão 100; cola 100; Rubus 100; sal gema 100; cola do mar profundo 4; alga 4 |
| Fragata → Contratorpedeiro | Grafite 100; madeira para expansão 100; cola 100; Rubus 100; madeira com brilho de onda 3; cobalto 2; compensado com escama da lua 10; alga 4 |
| Mercante → Gradual | Linho lunar 180; madeira azul 144; sal exuberante 35; pérola 35; olho abissal 42 |
| Mercante → Equilíbrio | Linho lunar 180; madeira azul 144; sal exuberante 30; pérola 30; olho abissal 50 |
| Contratorpedeiro → Emergência/Ascensão | Linho lunar 210; madeira azul 144; sal exuberante 30; pérola 30; olho abissal 42 |
| Contratorpedeiro → Bravura | Linho lunar 180; madeira azul 170; sal exuberante 30; pérola 30; olho abissal 42 |

## Obtenção e dependências

`sa-obtainment.ts` registra processamento de grafite/madeira para expansão e materiais de Khan/Cox como informação editorial. Fonte não informa sempre o rendimento. Não multiplicar insumos pelo requisito final nem reservar simultaneamente item final e matéria-prima. Missões, permuta, compra e processamento são alternativas, não custos cumulativos.

A cola para expansão tem texto misturado com espanhol e quantidades 100/300 no bloco de obtenção. Sua quantidade final para evolução está clara; sua fórmula de processamento não está homologada e o painel não deve apresentá-la como receita certa. Evitar nomes de missões ou rendimentos traduzidos automaticamente. Demais métodos só entram na ajuda quando seus detalhes forem conferidos.

## Assets e qualidade

49 PNGs originais foram obtidos da wiki e de uma página oficial SA de recompensas, sem recriação por IA. Todos têm 44×44 px e transparência. 48 têm alfa mínimo 0; a pérola tem alfa mínimo 30, preservando seu brilho original. O alfa máximo é 255 em todos. O manifest registra URL, página, SHA-256, dimensões e inspeção. 43 entradas são elegíveis para apresentação; variantes conflitantes e o antigo Poste ficam como evidência, sem seleção automática. Os 43 ícones ativos foram examinados lado a lado em fundo claro/escuro e tamanho nativo; imagem de conferência em `output/playwright/fase02-icones.png`. Os 86 elementos de imagem carregaram sem falha e com largura natural de 44 px.

Os fundos de qualidade integrados ao próprio ícone são preservados. Não eliminar parte colorida do item só por parecer um fundo. Exibir na escala nativa próxima de 44 px; ampliar miniatura não recupera detalhes. O PNG de ouro 1kG foi identificado na [página oficial SA 3450](https://www.sa.playblackdesert.com/pt-BR/News/Detail?groupContentNo=3450), junto ao nome exato e separado das barras de 10G e 100G.

## Pendências restritas

- Conferência visual dos 43 ícones ativos concluída em tamanho nativo e fundos escuro/claro.
- Asset oficial de ouro 1kG concluído: PNG de 44 px, alfa 0–255 e vínculo ao nome exato na fonte SA.
- Rendimento de processamento e nomes misturados no bloco de obtenção; mantê-los fora da ajuda até resolver.
- A conferência direta no cliente é evidência adicional futura, não requisito imposto novamente após a autorização de usar as fontes oficiais.

Não há migração automática entre demo e SA. Publicação remota e operações Git continuam fora deste trabalho.
