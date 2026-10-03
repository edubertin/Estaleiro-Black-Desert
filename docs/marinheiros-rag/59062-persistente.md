# Persistente — 59062

Inclusão local em 03/10/2026. Identidade Tenacious confirmada no [Codex US](https://bdocodex.com/us/sailor/59062/) e nome Persistente no [Codex PT](https://bdocodex.com/pt/sailor/59062/?sl=1). Nome atual do cliente SA ainda pendente de conferência direta. Saúde inicial 80, alimentação 100, cabine 5 e peso 300 LT, conforme Codex.

Nível 10, aba Tenacious da [planilha comunitária](https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit), M22:M29 e M32:M39: Persistência 1,1–1,5; Senso 1,1–1,5; Sentido 1,8–2,2; Força Física 5,6–6,4; demais 0–0. Destaque para frenagem; valores comunitários pendentes de confirmação SA. Não confundir Persistente com atributo Persistência nem com Perseverante, outro ID.

Referência visual Tenacious.webp da [coleção comunitária](https://infopixservice-debug.github.io/sailor/), salva em output/marinheiros/referencias. Anão sem barba, rosto rosado, capuz e cachecol vinho, camisa clara e couro escuro. Extensão de roupa inferior artística, não comprovada pelo retrato.

Assets prefixo persistente-59062: corpo-v1, retrato-v1 e olhos-fechados-v1. Prompt corporal preserva identidade, rosto sem barba e capuz vinho, frente para câmera, pés completos, proporção de anão, luz âmbar superior esquerda, fundo transparente 1024×1536. Retrato derivado do corpo, mesma luz e identidade. Piscar edita só pálpebras mantendo escala e posição. Sprite mantém 2:3; piscar padrão 18 s e respiração 4,8 s isolada no torso. Carrossel extensível de quatro posições preservado. Checkpoint anterior em output/marinheiros/checkpoint-tesouro-aprovado; sem publicação.

## Implementação verificada
Três PNGs gerados e integrados. Máscara da piscada ajustada por escala 1.1 e deslocamento (-3%, 1%) para registrar o quadro fechado no rosto original. Respiração limitada ao torso. Check: 35 testes passaram; revisão visual desktop/mobile e ciclo de piscada observados. Fontes e limites mantêm status comunitário, pendente SA.


### Correção do registro dos olhos
Substituído ajuste anterior por translate(-7%, -.2%) scaleX(1.18). A escala vertical anterior deslocava as pálpebras para baixo. Conferido quadro fechado no navegador; evidência output/marinheiros/expansao-persistente/olhos-alinhados.png. Ritmo de piscada preservado.


### Diagnóstico definitivo do registro — substitui ajustes anteriores
Os dois PNGs medem 1024x1536. As pálpebras já ocupam coordenadas próximas às do corpo aberto; aplicar escala e deslocamento ao quadro inteiro introduziu desalinhamento. Removidas ambas as regras antigas. Máscaras diretas: olho esquerdo na imagem (43.5%,10.8%) e direito (50.5%,10.6%), sem transform. Conferido quadro fechado estático com opacity 1; regra diagnóstica removida e ciclo original restaurado. Evidência piscada-registro-corrigido.png.
