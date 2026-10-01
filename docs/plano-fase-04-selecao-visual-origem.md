# Fase 04 — Seleção visual do barco atual

Estado: implementado e verificado localmente. Data: 01/10/2026. Proposta consultada com agente UX/UI. Evidências em qa-fase04.md e referencias/barcos-origem/README.md. Artes são aproximações por IA.

## Experiência

Título “Qual barco você tem?”, sem subtítulo de destino. Quatro barcos em linha no desktop, 2×2 em telas intermediárias/celular. Imagens transparentes sobre preto, nomes completos, escala visual consistente e cascos alinhados. Reutilizar a linguagem da home: destaque dourado no hover/foco, sem caixas opacas.

Clique seleciona o barco; nome dourado e indicador de confirmação distinguem seleção de hover. Manter “Continuar” desabilitado até selecionar e preservar “Voltar às carracas”. Não abrir outra janela nem avançar automaticamente. O detalhe sobre Melhorado opcional fica em ajuda contextual, sem texto extra permanente.

## Compatibilidade

Usar compatibleOrigins como fonte única. Não criar listas paralelas de regras:

- Gradual/Equilíbrio: Bartali, Veleiro de Epheria, Veleiro de Epheria Melhorado e Navio Mercante de Epheria.
- Emergência/Bravura: Bartali, Fragata de Epheria, Fragata de Epheria Melhorada e Contratorpedeiro de Epheria.

Manter IDs das variantes Melhoradas e a normalização existente no motor. Nenhuma mudança em receitas, consumo ou progressão.

## Pesquisa e produção dos sete assets

1. Localizar referência individual de cada barco, começando pelo guia oficial PC SA: https://www.sa.playblackdesert.com/pt-BR/Wiki?wikiNo=291 e https://www.sa.playblackdesert.com/pt-BR/Wiki?wikiNo=173 . A árvore enviada por Eduardo também serve como referência de identidade.
2. Registrar página, URL da imagem, região/plataforma, identificação e limitações de resolução. Guias oficiais de outras regiões podem apoiar aparência, sem validar receitas SA. Diagramas pequenos são referência inicial, não imagem final suficiente.
3. Conferir modelos base sem skins e diferenças reais das versões Melhoradas. Se os modelos forem praticamente iguais, não inventar adornos: nome e selo “Melhorado” fazem a distinção.
4. Usar imagegen com referência para limpar/recriar cada barco em PNG transparente, mantendo casco, velas, mastros e silhueta reconhecíveis. Gerar separadamente e preservar originais. Não declarar arte gerada como captura oficial.
5. Padronizar perspectiva na medida permitida pela referência, margens, enquadramento e resolução. Conferir visualmente antes de integrar; referências ambíguas ou insuficientes exigem nova pesquisa ou validação com Eduardo.

Sete identidades: Bartali; Veleiro; Veleiro Melhorado; Mercante; Fragata; Fragata Melhorada; Contratorpedeiro. Bartali é compartilhado entre rotas.

Assets em assets/barcos-origem; evidências em docs/referencias/barcos-origem; manifesto associa ID, fonte, arte gerada e ajuste de enquadramento. Não editar ou substituir as imagens de carracas existentes.

## Implementação

- selection.ts: título, opções visuais, estado selecionado e continuidade existente.
- Módulo de assets por ID: referências tipadas e enquadramento individual, sem regras de rota duplicadas.
- style.css: apresentação scoped à origem, responsividade, hover/foco/seleção e movimento reduzido.
- Specs/QA: atualizar fluxo e registrar evidências de imagens e navegação.

Usar HTML acessível com aria-pressed, nome do barco, foco visível e indicador além da cor. Imagem decorativa dentro de opção já nomeada não deve duplicar anúncio. Nomes longos podem ocupar duas linhas com área reservada para manter alinhamento.

## Testes e aceite

- Conferir as quatro carracas: apenas os quatro precursores compatíveis e imagem correspondente ao ID.
- Testar seleção por clique/teclado e Continuar; as duas variantes Melhoradas preservam ID no projeto e backup.
- Verificar retorno à home, reset pela logo e ausência de consumo/início do plano apenas ao selecionar imagem.
- Conferir carregamento dos sete assets, fundo transparente e sem distorção/corte; desktop 1440/1722, tela intermediária e celular 390 px sem overflow.
- Garantir diferença entre hover e seleção persistente, foco e movimento reduzido.
- Rodar check/build e testes existentes; acrescentar testes significativos de cobertura de IDs/rotas e smoke de navegador, sem testes que espelhem CSS.

Entrega em duas etapas: referências e artes conferidas; depois integração e QA. Sem React, backend, commit ou publicação nesta fase.
