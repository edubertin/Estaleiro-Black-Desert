# Página inicial — especificação aceita

Atualizado em 03/10/2026.

- Raiz: header preto, arte marítima em camadas, logo e três atalhos circulares dourados de 74px.
- Produção abre #/carracas e retoma o projeto existente. Voltar ao início preserva estoque e histórico.
- Gerir Marinheiro abre `/marinheiros-preview.html`; o logo da página retorna à raiz sem resetar progresso. Acessórios exibe aviso de preparação. Integração autorizada em 03/10/2026; dados comunitários dos marinheiros mantêm suas limitações documentadas.
- Guias orienta o uso; Sobre identifica o projeto independente.
- Hover ou foco revela uma única legenda na faixa preta inferior. Sem hover, legendas estáticas.
- Movimento decorativo respeita prefers-reduced-motion e pausa com página oculta. Atalhos têm nomes acessíveis e foco visível.
- Reset exige confirmação, remove somente o projeto do Estaleiro e retorna à raiz. Cancelar preserva o progresso.
- Rodapé: Instagram @edubertin, ícone GitHub e copyright.
- A cena aguarda oito recursos essenciais carregados e decodificados. Loading no centro da faixa marítima, sem espera artificial; falha ou timeout de 15 s oferece nova tentativa.
- PNGs originais preservados; derivados WebP lossless sem alteração de dimensões ou pixels RGBA.
- Entrada abre do centro para as bordas em 650 ms; menus e logo aparecem suavemente. Saída para produção ou marinheiros fecha a cena em 800 ms antes de navegar. Cliques repetidos ficam bloqueados durante a saída.
- Retornar à raiz executa a abertura novamente. Movimento reduzido elimina transições. A navegação dos marinheiros ainda é entre documentos HTML.

Aceitação: navegação de ida e volta, origens compatíveis, uma legenda por vez, ícones iguais, ausência de overflow horizontal em 390px e check/build aprovados. Specs 001–004 continuam regendo o motor.
