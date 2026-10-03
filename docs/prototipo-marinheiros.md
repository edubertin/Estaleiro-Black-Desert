# Marinheiros — estado atual

Atualizado em 03/10/2026. Rota `/marinheiros-preview.html` integrada à landing;
logo retorna à raiz, sem alterar estoque ou progresso das carracas. Build inclui
ambas as entradas. Contrato vigente em `specs/006-marinheiros.md`.

21 perfis por ID, com corpo, retrato e olhos fechados; quatro círculos no carrossel,
avanço de dois slots. Nove perfis foram aprovados um a um e doze foram adicionados
na expansão autônoma autorizada. Hatario/Pakuna aguardam referência visual e não
aparecem na UI. Durão é alias escolhido para Tough; Arkan mantém identidade por ID.

Fichas representam os intervalos comunitários de nível 10, sem seletor/interpolação.
Zeros atuais vêm da fonte e não são placeholders. Confirmação SA permanece pendente;
ver `marinheiros-rag/README.md`. Nomes/aba de fonte são dimensões separadas.

Composição: taverna 16:9, personagem com escala e máscaras individuais, iluminação
âmbar, piscar em 18 s e respiração isolada do torso. Em telas estreitas a ficha fica
abaixo da cena. Descrição recolhida com rolagem interna e fontes. Menu inferior,
logo transparente sobre a cena, degradês superior/inferior. Padrão de geração em
`padrao-visual-marinheiros.md`; partes não visíveis no jogo são reconstruções artísticas.

Entrada aguarda imagens decodificadas. Clique troca ficha somente após preparar corpo
+ olhos; a ficha sai/entra pela direita. Logo inicia fechamento vertical da taverna e
fade do menu/personagem antes de retornar à landing. Movimento reduzido respeitado.
Status acessível anuncia seleção e falha. Relatório final em `qa-revisao-final.md`.

Checkpoints e evidências ficam em output/ (ignorados pelo Git). Não confundir este
estado do código com uma confirmação de deploy nos Sites.
