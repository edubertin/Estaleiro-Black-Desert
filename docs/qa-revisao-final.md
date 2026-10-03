# Revisão final — 03/10/2026

## Escopo

Landing marítima, 21 marinheiros, carrossel, transições e preparação de imagens.
Revisados PROJECT, README, specs 001–006, ADRs 001–008 e índice documental.
Planos de fases e relatórios antigos permanecem históricos. Não altera receitas,
estoque, formato de backup nem amplia craft de equipamentos.

## Correções

- Timeout agora expira cada recurso, remove cache pendente e permite nova tentativa.
- Progresso de resposta tardia não atualiza outra tentativa; cleanup retira overlay/observador.
- Falha após cliques rápidos restaura seleção e entrada da ficha, evitando painel fora da tela.
- Status acessível anuncia nova ficha; erro de imagem tem aviso visível e pode ser tentado novamente.
- Nome do marinheiro e aba da fonte separados: Born in the Sea / Born on the Sea.
- Documentos atuais substituem notas antigas de nível 1, placeholders e prévia fora do build.
- Arquivos de experimento não usados ficam fora do PR; originais aprovados são preservados.

## Evidências

- `npm run check`: TypeScript estrito e 41 testes passaram, incluindo cache concorrente,
  rejeição com retry e timeout com resposta tardia. `npm run build`: ambas as entradas HTML.
- Seleção dos 21 perfis no navegador: uma seleção ativa, ficha correspondente e corpo/
  olhos carregados. Desktop e 390×844 sem overflow horizontal; imagens carregadas.
- Ida landing → marinheiros e retorno, entrada/saída do planejador conferidos nesta sessão.
- Harness temporário em output/: imagem inexistente gerou aviso e botão de retry; após
  disponibilizar o recurso, retry liberou a cena. Harness e evidências não entram no Git.
- PNG/WebP: igualdade de dimensões e todos os pixels RGBA dos oito derivados;
  9.021.709 → 6.547.590 bytes. Sem redução de resolução ou compressão com perda.
- Links Markdown relativos revisados; sem secrets/credenciais nos arquivos selecionados.
- CI do PR deve repetir check/build antes do merge; resultado final registrado no PR.

## Limitações

Intervalos de marinheiros são comunitários, pendentes de conferência SA. Alguns nomes
são editoriais; Durão foi escolhido pelo usuário. Hatario/Pakuna continuam fora da UI.
Artes são interpretações com partes extrapoladas das referências. Sem teste em aparelho
físico, leitor de tela real ou rede móvel real; movimento reduzido revisado no código.
Navegação dos marinheiros ainda é entre documentos HTML, com download inicial de PNGs.
Merge do GitHub não confirma novo deploy nos Sites.

Git local apresentou referência interna Codex inválida no fetch. Preparação/merge usam
clone limpo em output/github-revisao-final, preservando alterações e referências originais.
O clone limpo passou em npm ci/check (41 testes, zero vulnerabilidades no audit).
Windows bloqueou o binding Rolldown recém-instalado nesse diretório; build aprovado
usando NAPI_RS_NATIVE_LIBRARY_PATH com a versão já instalada no checkout original.
Nenhuma política do Windows foi alterada. CI Linux executa instalação/build padrão.
