# Muito Curioso — ID 59067

Após aprovação do alinhamento, Eduardo solicitou restaurar o piscar padrão dos demais: animação puro-blink de 18 s, três fechamentos de 144 ms. A respiração ampliada e a proporção corrigida permanecem.

Correção do piscar: sprite preserva proporção 2:3 sem encolhimento por flex. A caixa estreita provocava margem vertical no object-fit contain, deslocando as pálpebras em relação à máscara. Proporção 0,66666 e fechamento conferidos no navegador; ciclo de 12 s mantido. Ajuste exclusivo desse personagem.

Pesquisa e inclusão local: 03/10/2026. Quinto marinheiro da prévia independente.

Nome português, ID e dados básicos conferidos no [BDO Codex PT](https://bdocodex.com/pt/sailor/59067/): saúde 100, alimentação 100, cabine 10, peso 300 LT. Esses dados são os valores iniciais da ficha; não são uma extrapolação de saúde no nível 10.

Intervalos de nível 10: aba Curious da [planilha comunitária](https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit), mínimos M22:M29 e máximos M32:M39. Persistência 1,1–2,5; Senso 3,9–5,2; Sentido 1,5–2; Força Física 4–6,6; Paciência 0–0; Força 2,6–5; Foco 6,1–9; Visão 1,1–1,3. Referência comunitária, não limites validados para SA. Foco é precisão; Força Física é frenagem. A função a bordo pode modificar a contribuição.

Referência visual: retrato Curious.webp da [coleção comunitária](https://infopixservice-debug.github.io/sailor/), preservado em output/marinheiros/referencias. Humano de pele clara, gorro preto lateral, bigode preto espesso e cavanhaque estreito comprido. Parte inferior não aparece no retrato: extensão artística conservadora, não comprovação do traje completo do jogo.

## Assets e prompts

Arquivos versionados em assets/marinheiros/preview, prefixo curioso-59067: corpo-v1, retrato-v1 e olhos-fechados-v1. Fundo transparente RGBA. Corpo 1024×1536 com pés completos, luz âmbar superior esquerda e rosto frontal. Prompt corporal: preservar identidade e roupa do retrato, completar calças e botas rústicas, postura neutra, sem armas ou cenário. Retrato: derivar rosto e ombros do corpo aprovado, mesma luz e transparência. Piscar: editar somente pálpebras mantendo canvas, escala, pose e alinhamento.

Mesma animação de piscar de 18 s e respiração de 4,8 s; máscaras ajustadas ao humano, sem mover cabeça ou pés. Altura proporcional maior que goblins e anões. Iluminação da taverna persiste durante a troca. Checkpoint do Rápido aprovado preservado em output/marinheiros/checkpoint-rapido-aprovado.

Ajuste solicitado por Eduardo: respiração do torso ampliada de scale(1.02,1.014) para scale(1.025,1.018), mantendo ciclo 4,8 s. Piscar exclusivo em ciclo de 12 s, três fechamentos de 180 ms (antes 18 s e 144 ms); intervalo aproximado de 4 s. Outros marinheiros preservados. CSS computado confirmado no navegador. Movimento reduzido continua desativando ambos os efeitos.
