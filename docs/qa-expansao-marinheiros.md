# QA — primeira expansão de marinheiros

Registro histórico de etapas. Estado vigente e correções finais em `qa-revisao-final.md`:
21 perfis, build com ambas as entradas HTML e Durão como alias escolhido pelo usuário.
Os números de testes e notas de não integração abaixo descrevem o momento de cada etapa.

03/10/2026. Escopo local: Puro + Realistic na página independente.

## Verificado

- TypeScript estrito passou e build principal passou. A página independente continua fora da entrada de produção.
- 35 testes passaram, incluindo identidade/intervalos das duas referências e regressões do planejador.
- Navegador interno: selecionar Realistic troca nome, imagem, saúde, alimentação, cabine, peso, oito intervalos e descrição. Retornar ao Puro por Enter restaura sua ficha.
- Uma única seleção ativa; todos os assets carregados. Fundo/luzes mantidos no DOM, somente figura e ficha são substituídas.
- Composição conferida no viewport padrão e em 390 × 844; ausência de excesso horizontal. Em tela estreita, a ficha fica abaixo do cenário e os atributos usam duas colunas.
- Corpo Realistic com alpha real e pés completos; visualização sobre a taverna sem retângulo de fundo. Piscar configurado em 18 s com máscara individual e respiração de torso em 4,8 s. Modo de movimento reduzido preservado nas regras existentes.
- Descrição continua recolhida e usa área rolável; fontes e ressalvas permanecem associadas ao personagem correto.
- Tratamento luminoso do Realistic usa o mesmo filtro do Puro: saturação .86, brilho .8, contraste 1.04, sobre arte iluminada em âmbar pela esquerda.

Evidências locais: `output/marinheiros/expansao-realistic/desktop.png` e `mobile.png`. Esses arquivos são saídas de validação, não fonte da aplicação.

## Limites abertos

Dados são referências comunitárias, sem confirmação final SA dos intervalos. Nome Realista confirmado no site oficial SA e Codex PT; fonte inglesa permanece Realistic. Ícone comunitário não mostra pernas: parte inferior foi completada artisticamente. Aparência final e intensidade das animações precisam de avaliação visual de Eduardo antes de replicar esta identidade em outros assets. Não houve publicação, commit ou push.

## Muito Curioso — 03/10/2026
Check TypeScript e 35 testes passaram; build principal passou (prévia validada por TypeScript e Vite local). Seleção atualiza cinco marinheiros; corpo, respiração e olhos carregados em 1024 px. Verificado desktop e viewport 390×844 sem overflow horizontal (scrollWidth 390). Assets transparentes; máscara dos olhos em 45,3%/51% × 8,5%; respiração isolada no torso. Screenshots em output/marinheiros/expansao-curioso. Viewport restaurado e novo marinheiro selecionado para revisão.


## Calculista — 03/10/2026
TypeScript e 35 testes passaram. Seleção do sexto marinheiro atualiza nome, atributos e três imagens. Corpo e olhos 1024×1536, proporção renderizada 2:3, piscar de 18 s observado em execução. Desktop e 390×844 conferidos: documento sem overflow horizontal; carrossel com rolagem própria (699 px de conteúdo). Viewport restaurado, Calculista selecionado. Screenshots em output/marinheiros/expansao-calculista. Valores permanecem comunitários, pendentes SA.


## Muito Experiente — 03/10/2026
TypeScript e 35 testes passaram. Conferência local: seleção troca ficha e imagens; piscar de 18 s observado, proporção 2:3. Todos os sete círculos mantêm 120 px entre centros. Desktop e 390×844 sem overflow horizontal do documento; viewport restaurado. Screenshots em output/marinheiros/expansao-experiente. Arte inferior é extensão artística; atributos comunitários pendentes SA. Calculista aprovado preservado em checkpoint separado.


Carrossel quatro posições: TypeScript e 35 testes passaram. Navegação manual conferida do início ao fim, avanço 120 px em desktop, seta final desabilitada e seleção preservada durante rolagem. Seleção do Muito Experiente funciona após navegação. Layout 390×844 mantém quatro slots, sem overflow horizontal do documento. Screenshots carrossel-quatro-desktop/mobile em output/marinheiros. Toque usa overflow nativo; não houve dispositivo físico para gesto real.


## Procurando o tesouro — 03/10/2026
TypeScript e 35 testes passaram. Oitavo perfil selecionado na prévia, dados e imagens corretos; piscar padrão observado. Corpo transparente 1024×1536; máscara dos olhos ajustada à pose. Carrossel mantém quatro posições e limite final, nomes longos em duas linhas. Layout 390×844 sem overflow horizontal do documento. Viewport restaurado. Screenshots em output/marinheiros/expansao-tesouro. Nome oficial SA pendente; atributos comunitários. Divergência de alimentação registrada, usado valor 100 do Codex.


### Persistente — 2026-10-03
TypeScript estrito e 35 testes aprovados. Desktop: seleção, nove perfis, imagens carregadas e ciclo de piscada observado. Celular 390x844: largura de documento 383px, sem overflow horizontal; imagens carregadas. Screenshots em output/marinheiros/expansao-persistente. Máscara de olhos com registro ajustado ao quadro fechado; respiração mantém cabeça e pés estáticos.

# Lote autônomo — 03/10/2026

TypeScript estrito, 38 testes e build principal passaram. O build padrão não inclui a prévia independente; sua validação ocorreu no servidor local. Os 12 novos perfis carregaram corpo, respiração e olhos fechados em 1024×1536. Comparação visual dos quadros fechados registrada em `output/marinheiros/expansao-completa/*-piscada.png`; override de inspeção removido, ciclo padrão de 18 s restaurado e piscada natural do Ganancioso observada. Descrição recolhível e fontes conferidas sem encostar no carrossel.

Desktop: 21 opções, seleção troca identidade, recursos e oito intervalos; sem erros no console nem overflow horizontal. A cena mantém a iluminação e cada figura possui máscara própria. Celular 390×844: gigante e goblin conferidos sem overflow horizontal; escala nova reduzida para não cobrir rosto com logo. Quatro círculos e setas mantidos; viewport restaurado. Toque físico não testado.

Dados de Hatario/Pakuna preparados, mas sem assets ou entrada pública. Nome português de Tough pendente. Intervalos comunitários não validados SA; reconstruções visuais aguardam Eduardo. Nenhum commit, push ou publicação realizado.
