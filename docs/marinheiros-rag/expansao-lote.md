# Expansão autônoma — 03/10/2026

Escopo: prévia local independente. Nenhuma publicação, commit ou alteração da fabricação de carracas. Os nove exemplos aprovados foram preservados; checkpoint em `output/marinheiros/checkpoint-9-aprovados`.

## Cobertura

| ID | Nome apresentado | Fonte do nome | Arte |
|---|---|---|---|
|59053|Ganancioso|Codex PT|Corpo, retrato e olhos fechados|
|59054|Dedicado|Codex PT|Corpo, retrato e olhos fechados|
|59056|Perdido de Amor|Codex PT|Corpo, retrato e olhos fechados|
|59063|Perseverante|Codex PT|Corpo, retrato e olhos fechados|
|59064|Durão|Nome escolhido por Eduardo; origem Tough; oficial SA pendente|Corpo, retrato e olhos fechados|
|59065|Forte|Codex PT|Corpo, retrato e olhos fechados|
|59068|Sonho de Pesca Farta|Codex PT|Corpo, retrato e olhos fechados|
|59070|Nascido no Mar|Codex PT|Corpo, retrato e olhos fechados|
|59069|Osso Duro|Codex PT|Corpo, retrato e olhos fechados|
|59071|Inteligente|Codex PT|Corpo, retrato e olhos fechados|
|59072|Rápido no Cálculo|Codex PT|Corpo, retrato e olhos fechados|
|59101|Arkan|Guia oficial SA|Corpo, retrato e olhos fechados|
|59227|Hatario|Codex PT|Pendente de referência visual|
|59228|Pakuna|Codex PT|Pendente de referência visual|

Codex PT não equivale automaticamente à conferência do cliente SA atual. Durão é o nome de apresentação escolhido por Eduardo para Tough; não é tratado como tradução oficial SA confirmada. Corpo e vestimenta inferior são reconstruções artísticas a partir de retratos; precisam de revisão visual do usuário.

## Fontes e limites

- Identidade por ID: `https://bdocodex.com/pt/sailor/ID/` e versão `/us/` quando necessário. IDs preservados, não deduzidos pela ordem da planilha.
- Referências visuais dos 11 comuns: [coleção comunitária](https://infopixservice-debug.github.io/sailor/), assets com nome correspondente a cada ficha.
- Arkan: [guia oficial SA](https://www.sa.playblackdesert.com/pt-BR/Wiki?wikiNo=321), retrato pequeno identificado como Arkahn na captura de informações de marinheiros. A imagem maior de Icaron não foi usada como identidade do Arkan.
- Intervalos: [BDO Sailors 2024 — Public v1.0](https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit), folhas individuais, mínimos M22:M29 e máximos M32:M39. `Born on the Sea` na planilha corresponde ao `Born in the Sea` do Codex/coleção.
- Oito atributos no nível 10; saúde, alimentação, cabine e peso são fatos básicos do catálogo, não novos intervalos de nível 10. Valores comunitários não são garantia de RNG nem catálogo SA validado.
- Força/alcance e Foco/precisão seguem a semântica já registrada no projeto. Divergência de rótulos do Codex não foi usada para trocar colunas.

Hatario/Pakuna: [relato de Global Lab de 26/06/2020](https://www.tr.playblackdesert.com/tr-TR/Forum/ForumTopic/Detail?_topicNo=18518) descreve contratação em Papua Crinea por missões. A vigência atual SA não está confirmada. Imagens do Codex tiveram timeout; o fórum oficial não expôs conteúdo acessível. Não gerar lontra/Papu genéricos nem colocar placeholder como arte validada.

## Integração

Dados em `sailors-expansion-data.ts`, assets/perfis em `sailors-expansion.ts` e máscaras em `sailors-expansion.css`. Apenas perfis com os três arquivos completos entram na coleção. O carrossel continua com quatro posições visíveis, rolagem manual e nomes sem alterar a distância dos círculos. Iluminação da taverna permanece montada durante a seleção.

As máscaras dos olhos são específicas por personagem no mesmo canvas 1024×1536, sem transformação herdada. Respiração usa só torso; pés e cabeça ficam estáveis. Redução de movimento segue a preferência do sistema.
