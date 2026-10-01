# Ícones ilustrados — piloto

01/10/2026. Seis materiais da expansão Bartali → Fragata, conforme a tela enviada pelo usuário. Artes ilustrativas geradas com a ferramenta integrada image_gen, a partir dos PNGs oficiais locais. Não alteram identidade, receitas ou fontes do catálogo. Não são assets oficiais.

Destino: `assets/itens/ilustrados/<id>-v1.png`. Originais preservados em `assets/itens/originais`. O componente escolhe a versão ilustrada por ID quando existe, somente para materiais; demais itens continuam usando o original.

## Prompt utilizado

“Recreate this tiny Black Desert inventory material icon as a crisp high resolution faithful illustrative game item icon: [subject]. Preserve reference silhouette, angle, colors and identity. Single isolated object centered on true transparent alpha background, square PNG, object occupies 78% of canvas. Polished semi-realistic hand painted fantasy inventory art, sharp edges, restrained detail readable at 110px. No added props, no text labels, no frame, no background, no ground shadow or glow. Save final generated image.”

Cada chamada recebeu o ícone original correspondente como referência e transparência ativada.

| ID | Subject |
| --- | --- |
| licenca-de-expansao-de-navio-fragata-de-epheria | cream parchment expansion license with burgundy crossed nautical symbols and narrow gold rolled top |
| lenho-padronizado | single long tan construction timber plank in diagonal perspective with visible cut end and grain |
| barra-de-acessorio-de-coral-com-jade | single cyan turquoise jade coral alloy rectangular metal ingot, beveled edges |
| madeira-compensada-revestida-de-pinheiro | square pine plywood panel in diagonal perspective with reddish coated bottom edge and small white coating streaks |
| linho-reforcado | folded square thick reinforced linen cloth, muted burgundy and cream woven pattern |
| gold-bar-1000g | small stack of rich yellow gold rectangular bars with embossed marks |

Símbolos pequenos e texturas são aproximações artísticas. O nome do material e o ID permanecem a identificação funcional. Piloto para revisão antes de ampliar o conjunto.

## Verificação

Seis PNGs com 1254 × 1254 pixels e canal alpha validado no navegador. Conferidos individualmente e nos slots sobre fundo preto. Smoke isolado na rota Bravura a partir de Bartali: seis versões ilustradas carregadas, desktop 1440 px e celular 390 px, sem overflow da página. Screenshots em `output/playwright/icones-ilustrados-desktop.png` e `icones-ilustrados-mobile.png`. `npm run check` (31 testes e tipagem estrita) e `npm run build` passaram. Os controles de quantidade foram preservados. Originais e equipamentos não foram substituídos.
