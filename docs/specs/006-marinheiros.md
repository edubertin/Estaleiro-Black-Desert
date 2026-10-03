# Spec 006 — Coleção de marinheiros

Aceita por revisão e implementação autorizadas em 03/10/2026.

## Objetivo e limites

Consultar 21 perfis por identidade, arte e intervalos RNG do nível 10. Sem simular
crescimento, registrar conta do jogo ou alterar estoque/progresso das carracas.
Dados comunitários não constituem catálogo SA validado. Cada ficha apresenta fontes
e ressalvas; IDs permanecem independentes de nomes regionais e aliases escolhidos.

## Comportamento

- Entrada pela landing; logo retorna à raiz sem resetar progresso.
- Carrossel com quatro círculos visíveis, distâncias uniformes, nomes abaixo,
  setas que avançam dois slots e param nos limites. Rolagem manual cancela a animação.
- Seleção troca corpo, quadro de piscar, fatos, oito intervalos e descrição juntos.
  Apenas a seleção mais recente pode completar; falhas mantêm/restauram a ficha atual.
- Ficha compacta à direita em desktop e abaixo da cena em telas estreitas.
  Descrição recolhida, rolagem interna e fontes associadas ao ID.
- Preparar imagens antes de revelar a cena ou trocar o personagem. Timeout de 15 s,
  erro visível e acessível, nova tentativa disponível sem corromper seleção.
- Olhos e respiração têm máscaras individuais; luz âmbar combina com a taverna.
- Ficha sai pela direita antes de entrar a nova. Navegação fecha a cena de cima/baixo
  para o centro; entrada inverte o recorte. Preferência de movimento reduzido respeitada.
- Seleção anunciada por status, foco permanece no controle utilizado. Teclado tem
  indicação discreta no círculo/seta; não existe borda retangular de formulário.

## Aceitação

Seleção de todos os 21 perfis, cliques rápidos, falha/timeout e retorno ao início;
corpos/piscadas com mesmas dimensões; fontes/ranges consistentes por ID; 390 px sem
overflow horizontal; check/build e CI aprovados. Sem incluir Hatario/Pakuna ou
apresentar Durão como nome oficialmente validado SA.
