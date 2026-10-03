# Preparação das cenas

Implementação local em 03/10/2026, sem publicação.

A entrada marítima aguarda decode() dos oito assets essenciais antes de abrir.
Indicador informa recursos preparados, sem simular porcentagem de bytes.
Falhas e espera acima de 15 segundos oferecem nova tentativa; não liberam uma cena incompleta.
O cache em memória evita repetir a preparação na mesma página.

O conjunto WebP lossless preserva dimensões, transparência e todos os pixels RGBA.
Os oito PNGs originais continuam intactos. Comparação binária dos pixels decodificados
confirmada com Pillow: 9.021.709 bytes originais contra 6.547.590 bytes WebP.
Nenhuma imagem foi recriada nem reduzida em resolução.

A taverna aguarda fundo, logo, corpo, piscada e os quatro retratos iniciais.
A troca de marinheiro prepara corpo e piscada antes de começar a saída da ficha.
Os assets restantes dos marinheiros seguem em PNG; não foram comprimidos com perda.

Referências: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode
e https://web.dev/learn/performance/resource-hints.
