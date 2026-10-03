# Confiante — ID 59061

03/10/2026. Nome português confirmado na [ficha Codex PT](https://bdocodex.com/pt/sailor/59061/); origem inglesa Confident. Sem confirmação independente no cliente SA nesta sessão.

Ficha Codex: saúde 80, alimentação 100, cabine 5, peso 300 LT. Não usar atributos de nível 1 como limites do nível 10.

Referência visual secundária: [coleção comunitária](https://infopixservice-debug.github.io/sailor/), `assets/sailors/Confident.webp`. Anão baixo e robusto, barba e costeletas pretas densas, gorro escuro inclinado, mangas claras e colete simples. Parte inferior completada artisticamente, pois o ícone não mostra pernas.

## Intervalos de nível 10

Extraídos da [planilha comunitária](https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit), aba Confident, mínimo M22–M29 e máximo M32–M39. Pendentes de confirmação SA atual; sem bônus de função.

| Campo | Mínimo % | Máximo % |
| --- | ---: | ---: |
| stamina | 1,3 | 1,7 |
| wits | 1,3 | 1,7 |
| awareness | 7,1 | 8,3 |
| superArmor | 2,6 | 3,9 |
| patience | 0 | 0 |
| strength | 0 | 0 |
| focus | 0 | 0 |
| vision | 0 | 0 |

## Prompts e padrão

Ferramenta image_gen integrada. Corpo frontal baseado no ícone: preservar barba preta longa, gorro carvão inclinado, rosto pálido angular, mangas cinza claras gastas, colete de couro simples, proporções de anão adulto. Luz âmbar contida superior esquerda e sombras neutras como o Puro. Canvas 1024 × 1536, botas completas, fundo alpha transparente, sem armas, adornos inventados, texto ou halo.

Retrato: derivar cabeça e ombros da mesma arte corporal, preservar rosto/barba/gorro e luz. Olhos fechados: editar somente pálpebras do corpo, preservar canvas e alinhamento; sobreposição restrita à região ocular.

Corpo v2: edição para cabeça totalmente frontal e ambos os olhos visíveis, mantendo o gorro inclinado. Luz corrigida para âmbar pela esquerda; transparência verificada por leitura do alpha, não pela aparência do RGB residual do arquivo.

## Preservação

Entrega local: corpo v2, retrato v1 e olhos fechados v1 em `assets/marinheiros/preview/`. Corpo 1024 × 1536; cerca de 49,7% dos pixels alpha zero. Máscaras dos olhos em 43,5% e 51,4% horizontal, 12,2% vertical. Filtro do corpo e frame ocular igual ao Puro: saturação .86, brilho .8, contraste 1.04. Respiração mantém pés estáticos.

Verificação: typecheck e 35 testes passaram; seleção no navegador interno conferida nos três personagens, incluindo retorno por Enter ao Realista. Viewport 390 × 844 sem excesso horizontal e todas as imagens carregadas. Capturas em `output/marinheiros/expansao-confiante/`. Nome português sustentado pelo Codex, limites comunitários ainda sem confirmação SA final.

Realista aprovado por Eduardo em 03/10. Checkpoint local em `output/marinheiros/checkpoint-realista-aprovado/`, com fonte da prévia, CSS e dados. Assets versionados originais preservados. Não corresponde a commit ou publicação.
