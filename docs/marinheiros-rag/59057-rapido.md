# Rápido — Quick, ID 59057

03/10/2026. Nome Rápido aparece no [site oficial SA](https://www.sa.playblackdesert.com/pt-BR/News/Detail?groupContentNo=7057). Identidade Quick/59057 e ficha inicial no [Codex US](https://bdocodex.com/us/sailor/59057/?sl=1). Ficha PT não acessível nesta consulta; não declarar confirmação direta no cliente SA.

Saúde 80, alimentação 100, cabine 10, peso 250 LT. Atributos iniciais atuais do Codex: Força 2 e Visão 6, diferentes de referências históricas. Não reutilizar guias antigos sem conferir versão.

Referência visual: [coleção comunitária](https://infopixservice-debug.github.io/sailor/), `assets/sailors/Quick.webp`. Goblin cinza esverdeado, grandes orelhas caídas rosadas, olhos grandes bem abertos, nariz volumoso, dentes visíveis, pequeno tufo preto e adornos nas orelhas; colar de malha, gola de pele e roupa marrom. Parte inferior completada artisticamente, sem evidência de corpo inteiro no ícone.

## Limites de nível 10

[Planilha comunitária](https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit), aba Quick, mínimo M22–M29 e máximo M32–M39. A extração local contém Força 3,6–5; não contém o teto antigo 9 mencionado em guias históricos. Isso não comprova todos os limites SA atuais. Não alterar mínimo por relato de patch sem resolver divergência.

| Campo | Mínimo % | Máximo % |
| --- | ---: | ---: |
| stamina | 1,1 | 2,5 |
| wits | 4,6 | 7,8 |
| awareness | 1,3 | 2 |
| superArmor | 2,2 | 3,5 |
| patience | 0 | 0 |
| strength | 3,6 | 5 |
| focus | 1,2 | 1,8 |
| vision | 6,9 | 7,1 |

Referência comunitária sem bônus de função; máximos independentes não garantem ocorrência conjunta. Diferenças de patch precisam de fonte oficial SA antes de validar catálogo.

## Arte e prompts

image_gen integrada. Corpo 1024 × 1536 frontal, preservar identidade do ícone: olhos grandes, orelhas caídas, nariz, dentes, tufo e roupa com malha/gola. Goblin baixo e magro, braços ao lado, pernas e pés completos; completar roupa inferior conservadoramente. Luz âmbar superior esquerda no padrão Puro, fundo alpha transparente, sem texto, armas ou adereços extras.

Retrato deriva do mesmo corpo e identidade. Frame ocular edita apenas pálpebras, mantendo canvas, pose, luz e roupa. Máscara de olhos e torso devem ser individualizadas.

## Preservação

Entrega local: corpo, retrato e olhos fechados v1 em `assets/marinheiros/preview/`. Corpo 1024 × 1536 com aproximadamente 67% dos pixels totalmente transparentes. Máscaras oculares em 44%/53% horizontal e 13,4% vertical. Filtro igual ao Puro e respiração restrita ao torso; pés estáticos.

Verificação: typecheck e 35 testes passaram. Quatro fichas e uma seleção ativa no navegador, todas as imagens carregadas. Viewport 390 × 844 sem excesso horizontal na página; carrossel permite rolagem. Capturas em `output/marinheiros/expansao-rapido/`.

Confiante aprovado por Eduardo. Checkpoint anterior em `output/marinheiros/checkpoint-confiante-aprovado/` com TS, CSS e dados. Arte versionada original preservada. Sem commit, push ou publicação.
