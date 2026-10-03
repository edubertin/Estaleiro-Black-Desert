# Expansão da prévia de marinheiros

Data: 03/10/2026. Plano solicitado por Eduardo. Desenvolvimento local na página independente `marinheiros-preview.html`; sem publicação ou integração ao menu principal nesta fase.

## Base disponível

O Puro (Innocent, ID 59055) é a referência visual aprovada: retrato frontal, corpo inteiro, iluminação âmbar, olhos fechados alinhados, piscar e respiração. Preservar seus arquivos e comportamento durante a expansão.

O registro em `marinheiros-rag/registro.json` contém 23 candidatos derivados de uma planilha comunitária, com IDs identificados. Isso não comprova o total atual de marinheiros do jogo nem a lista inteira validada para SA. Os limites são referências comunitárias de nível 10, ainda pendentes de confirmação SA. Nove exemplos foram aprovados individualmente. A expansão autônoma acrescenta 12 exemplos locais para revisão de Eduardo, totalizando 21. Hatario e Pakuna têm dados preparados, mas aguardam referência visual acessível antes de gerar arte. Ver `marinheiros-rag/expansao-lote.md`.

Pesquisa adicional: [Realistic, ID 59060 no BDO Codex](https://bdocodex.com/us/sailor/59060/?sl=1). Nome Realista confirmado em fonte oficial SA; arte aceita para a prévia. Confiante/Confident identificado como ID 59061 no Codex PT. Essas fichas iniciais não comprovam os mínimos e máximos do nível 10.

## Ordem proposta

1. Consolidar o Puro no modelo de dados reutilizável, mantendo a aparência aprovada.
2. Preparar Realistic (59060) como próximo exemplo, pois já existe identificação rastreável.
3. Pesquisar Confident e os demais candidatos, confirmando IDs antes de associar qualquer imagem.
4. Tratar Quick separadamente: conferir alterações recentes e vigência SA antes de aproveitar limites de uma planilha de 2024.

Essa ordem é uma proposta operacional, não uma definição do catálogo completo. Marinheiros especiais devem ter critérios de obtenção e atributos conferidos separadamente.

## Ciclo por marinheiro

### 1. Ficha de evidências

Registrar ID, nomes por região, tipo, obtenção, saúde, alimentação, cabine, peso e oito atributos de nível 10. Para cada intervalo, guardar fonte, data, versão/patch, região, método e situação de conferência. Separar limites calculados, relatos observados e máximos teóricos; não misturar bônus de equipamentos ou função a bordo.

Consultar Codex, guia oficial SA, planilha comunitária, fóruns, Reddit e vídeos. Vídeos utilizados como evidência precisam de link e minuto verificável. Divergências permanecem documentadas até resolução. Não substituir limite desconhecido por zero: zero confirmado e ausência de evidência são estados diferentes. Na apresentação, ausência pode usar “—”, sem criar estimativa.

### 2. Referência e arte

Reunir referências identificadas do mesmo marinheiro antes de gerar. Comparar rosto, espécie, orelhas, cabelo, roupa, acessórios, postura e altura relativa. Produzir retrato frontal e corpo inteiro com a mesma identidade; fundo transparente e pés completos. Gerar a variação de olhos fechados editando somente a região dos olhos.

Aplicar `padrao-visual-marinheiros.md`: realismo compatível com a taverna, luz quente lateral e sombra de contato. Verificar transparência real, resolução e alinhamento. Evitar regenerar a taverna para cada personagem.

### 3. Composição e animação

Definir por personagem escala, posição no piso, recorte, região dos olhos e máscara do torso. Marinheiros maiores devem caber na mesma cena sem copiar a escala do goblin. Reutilizar o ritmo aprovado de piscar e respirar, ajustando as regiões animadas individualmente. Cabeça, canelas e pés não podem saltar ou deformar durante a respiração.

Manter respeito a `prefers-reduced-motion`. Trocar o marinheiro não deve reiniciar a iluminação da taverna nem acumular temporizadores.

### 4. Entrada no carrossel

Adicionar somente depois de conferir identidade, ficha e conjunto visual. Cada retrato exibe nome e seleção dourada; o ID interno permanece estável. A seleção atualiza corpo, olhos, título, atributos, descrição e fontes em conjunto. Nenhum personagem herda informações do Puro por falta de dados.

Conferir a entrega visual de cada marinheiro antes de repetir o ciclo no próximo. Guardar um checkpoint da versão aprovada para permitir reversão isolada.

## Implementação técnica

Manter TypeScript estrito e a estrutura atual de DOM/Vite. A expansão não exige migração para React.

- `apps/web/src/content/sailors-preview-data.ts`: catálogo tipado por ID, atributos com situação de evidência, fontes e caminhos de assets.
- `apps/web/src/sailors-preview.ts`: seleção por ID, renderização da ficha e carrossel acessível; separar funções pequenas de renderização.
- `apps/web/src/sailors-preview.css`: geometria configurável por personagem, seleção, carrossel com rolagem horizontal e composição responsiva.
- `assets/marinheiros/preview/`: retrato, corpo e olhos fechados versionados por ID.
- `docs/marinheiros-rag/`: evidências e divergências por marinheiro; preservar pesquisa manual ao atualizar extrações automáticas.
- `docs/padrao-visual-marinheiros.md` e `docs/prototipo-marinheiros.md`: registrar o padrão final e a cobertura efetivamente entregue.

O fundo e suas luzes permanecem montados. O carrossel centraliza coleções curtas e permite rolagem quando houver mais personagens, com foco visível e identificação acessível da seleção. Em telas estreitas, a ficha pode ficar abaixo da cena para manter leitura e proporções.

## Verificação específica

1. Dados: IDs únicos; mínimos menores ou iguais aos máximos; nível 10 explícito; fontes presentes; desconhecido distinto de zero.
2. Seleção: cada ícone troca todos os campos e imagens corretamente; alternar repetidamente não duplica eventos ou animações.
3. Arte: conferir olhos abertos/fechados sobrepostos, transparência, pés completos, sombra e proporção com a taverna.
4. Movimento: observar ciclos completos de piscar/respiração; não cortar canelas nem mover o chão; verificar modo de movimento reduzido.
5. Layout: desktop largo, janela intermediária e celular; sem sobreposição entre logo, ficha, descrição e carrossel.
6. Acessibilidade: seleção por teclado, foco visível, nomes dos controles e descrição rolável por teclado.
7. Regressão: executar typecheck, build e checks existentes; confirmar que a fabricação de carracas continua funcionando.

## Critério de entrega

Uma ficha pronta significa identidade conferida, dados rastreáveis com suas limitações expostas, três assets alinhados, animações verificadas e seleção funcional. A primeira entrega deve ser Puro + um novo marinheiro completo. Expandir a partir desse exemplo, sem considerar a quantidade de candidatos pesquisados como quantidade implementada.


Atualização: Muito Experiente aprovado. Procurando o tesouro (59059) é o oitavo perfil local aguardando revisão visual; nome Codex PT pendente SA. Carrossel mantém janela de quatro posições, navegação suave e catálogo extensível.


### Persistente — 59062
Nono perfil incluído na prévia local: corpo, retrato, piscada e respiração. Quatro posições visíveis no carrossel preservadas. Nome PT identificado no Codex; conferência SA e limites comunitários seguem explicitamente pendentes.
