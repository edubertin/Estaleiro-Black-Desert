# Revisão da landing

02/10/2026.

## Correções

- Uma legenda ativa elimina sobreposição de produção/marinheiros/acessórios.
- Consolidada parte das propriedades CSS repetidas, removidos keyframes duplicados e blocos vazios.
- Reset agora retorna à raiz, conforme a mensagem de confirmação.
- Três ícones conferidos em 74 × 74px com borda dourada uniforme.

## Validação

TypeScript e 33 testes do motor aprovados em npm run check; build de produção aprovado. Navegador local: entrada no planejador, apresentação da Gradual, escolha e quatro origens compatíveis, retorno ao início. Foco por teclado mostra apenas a legenda ativa. Viewport 390 × 844 sem overflow horizontal ou imagens quebradas; composição e rodapé inspecionados. Viewport restaurado ao final.

Redução de movimento e pausa por visibilidade revisadas no código; não simulamos dispositivo físico ou preferência do sistema. Testes do motor não substituem QA visual. Reset não foi confirmado sobre dados pessoais nesta rodada.

## Limites

Artes ilustrativas; sem reconferência de receitas no cliente. Marinheiros e acessórios em preparação. PNGs grandes merecem otimização futura, preservando a arte aprovada. GitHub recebe PR draft; não há autorização de merge nesta solicitação. Sites recebe fonte enviada e build empacotado antes do deploy público.
