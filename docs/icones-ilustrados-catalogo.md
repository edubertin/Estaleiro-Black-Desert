# Ícones ilustrados do catálogo SA

01/10/2026. Escopo autorizado: estender o estilo aprovado no piloto aos demais itens ativos, materiais e equipamentos. Originais preservados. Receitas, IDs, requisitos e nomes não são alterados pelas artes.

43 IDs ativos: 27 materiais e 16 equipamentos. Seis materiais do piloto preservados; 37 IDs restantes, com 32 novas gerações e cinco reaproveitamentos quando os PNGs oficiais são exatamente iguais (hash do arquivo), mantendo arquivos individuais por ID.

Destino: `assets/itens/ilustrados/<id>-v1.png`. Ferramenta integrada `image_gen`, um prompt e uma referência oficial por arte. Imagens ilustrativas, não assets oficiais. Não servem como evidência de diferenças de equipamento ou receita. O selo +10 é aplicado pelo componente, não desenhado na imagem.

## Prompt comum

“Recreate the attached tiny official game inventory icon as a crisp high-resolution faithful illustrative game item asset. Subject: [descrição do item]. Item identity: [nome SA]. The attached image is the visual identity reference; preserve its silhouette, perspective, main colors and recognizable structure. Match the approved Estaleiro assets: polished semi-realistic hand-painted fantasy inventory art, sharp edges, restrained readable detail at 110px. ONE isolated item or the exact grouped object seen in the reference centered, square PNG, occupies about 80% of canvas. True transparent alpha background. No invented props, no labels, no text, no frame, no background, no ground plane, no shadows or halos outside the object. No +10 badge; UI supplies it separately. Do not turn equipment parts into complete ships.”

## Reuso exato

Epheria Proa/Casco/Canhão/Vela Velhos reutilizam as artes dos respectivos itens Bartali, pois as referências oficiais usadas são idênticas. Proa de Dragão Negro do Contratorpedeiro reutiliza a do Mercante pelo mesmo motivo. Os demais componentes têm referências próprias e não foram agrupados apenas por semelhança ou nome.

## Verificação

Concluído localmente. Todos os 43 IDs ativos têm imagem correspondente; resolução mínima de 1000 px, alpha com pixels transparentes e visíveis conferido no navegador. Galeria completa inspecionada visualmente: `output/playwright/icones-galeria-final.png`. Prompts específicos registrados em `referencias/icones-ilustrados-prompts.json`.

Smoke em perfil isolado percorreu os quatro destinos a partir do precursor final, conferiu todas as imagens da etapa usando versão ilustrada, quatro selos +10 por etapa, edição de quantidade, incremento e seleção de equipamento +10. Desktop 1440 px e celular 390 px, sem overflow. Evidências: `output/playwright/icones-catalogo-smoke.js`, `icones-catalogo-desktop.png`, `icones-catalogo-mobile.png`. Check com 31 testes e TypeScript estrito passou; build passou. Sem commit ou publicação.

Limite: PNGs de alta resolução aumentam o volume de assets. Não houve otimização de compressão nesta entrega; originais preservados para comparação e futuras derivações.
