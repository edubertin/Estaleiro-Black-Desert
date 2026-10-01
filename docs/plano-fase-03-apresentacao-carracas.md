# Fase 03 — Apresentação das carracas

Data: 01/10/2026. Estado: interface implementada e verificada localmente; atributos numéricos SA pendentes de conferência. Direção revisada com agente UX/UI. Não inclui migração para React, commits ou publicação.

## Resultado

Home com logo aprovada, vitrine transparente e quatro embarcações visualmente alinhadas. O clique abre uma apresentação animada antes da escolha do barco atual. Assumida a última disposição descrita por Eduardo: barco à esquerda, informações à direita. Importação continua sendo do arquivo de backup local; não existe integração com loja.

## 1. Cabeçalho e composição

- Retirar SA PT-BR do cabeçalho, mantendo região/idioma no catálogo e nos dados internos.
- Substituir o texto Importar backup por SVG dourado de bandeja com seta entrando, área clicável mínima de 44×44 px, tooltip e nome acessível “Importar backup”. Preservar validação e confirmação da importação existente.
- Preservar logo e paleta preto/grafite/dourado. Manter exportação disponível na jornada.
- Padronizar escala visual das quatro imagens: área comum, proporções preservadas, ajuste individual de escala/deslocamento por ID. Alinhar base visual e nomes; reduzir a Bravura conforme inspeção, sem inventar percentual antes da comparação.
- Usar os mesmos parâmetros de imagem na vitrine e no diálogo, com tamanhos próprios para cada contexto. Não alterar os arquivos originais nem aplicar o ajuste indiscriminadamente à tela de conclusão.

## 2. Conteúdo conferido

Criar conteúdo tipado por ID existente, separado das receitas: nome, aliases, resumo, usos, vantagens/limitações, precursor, atributos base e fontes/data de conferência.

Ponto de partida confirmado no guia oficial SA: Gradual prioriza armazenamento/Permuta; Equilíbrio distribui atributos de forma equilibrada; Emergência/Ascensão prioriza velocidade; Bravura prioriza ataque/combate. Fonte: https://www.sa.playblackdesert.com/pt-BR/Wiki?wikiNo=291

Durante implementação, pesquisar peso de carga, slots, velocidade e características de combate em fontes oficiais PC SA. Diferenciar valores base de bônus de equipamentos, marinheiros e habilidades. Fonte de outra região só pode ser complementar, sem assumir equivalência SA. Números ainda não conferidos não serão apresentados como exatos.

Explicar atividades e perfil de uso, sem prometer alcance máximo, acesso exclusivo a regiões ou superioridade universal. Manter Emergência como nome exibido e Ascensão como alias. Fontes e atributos adicionais ficam em “Mais informações”; não criar tabela global nem acrescentar craft de equipamento.

## 3. Janela de apresentação

- Diálogo dedicado, largura máxima aproximada de 960 px, fundo grafite e backdrop preto suave.
- Desktop: imagem ocupa cerca de 45%; conteúdo 55%. Nome, propósito em uma frase, até quatro indicadores, indicação de uso e uma limitação relevante.
- CTA “Escolher esta carraca” fecha o diálogo e abre a seleção de origem compatível existente. Abrir/fechar a apresentação não muda projeto, estoque ou destino salvo.
- Celular: imagem acima e conteúdo abaixo; altura limitada à janela, rolagem interna e ação final acessível, sem rolagem horizontal.
- Fechar por X, Escape ou clique real no backdrop. Cliques dentro não fecham. Título associado ao diálogo, foco contido e restaurado na carraca de origem ao cancelar.

## 4. Animação

DOM TypeScript atual, CSS e, se necessário, Web Animations API. Entrada/saída de aproximadamente 180–220 ms com opacidade e pequeno deslocamento. Imagem e descrição podem entrar com atraso discreto, sem repetir movimento continuamente.

Respeitar prefers-reduced-motion. Fechamento remove o diálogo após a animação, com fallback; evitar múltiplas instâncias e ações repetidas durante transições. Não animar o tamanho do layout nem sacrificar a legibilidade. React/Motion só entra em uma decisão futura de arquitetura.

## Arquivos previstos

| Arquivo | Responsabilidade |
| --- | --- |
| apps/web/src/main.ts | Cabeçalho e ícone de importação |
| apps/web/src/selection.ts | Abrir apresentação no clique; preservar seleção existente |
| apps/web/src/ship-details.ts (novo) | Diálogo e seu ciclo de vida |
| content/sa-ship-profiles.ts (novo) | Conteúdo e evidências dos quatro perfis |
| apps/web/src/ship-presentation.ts (novo, se necessário) | Parâmetros de enquadramento por ID compartilhados |
| apps/web/src/style.css | Composição, enquadramento, estados e animação |
| docs/specs/001-jornada-carraca.md | Etapa de apresentação antes da origem |
| docs/qa-fase03.md (novo) | Evidências e limitações da validação |

## Ordem e critérios de entrega

1. Conferir perfis e registrar fontes; não misturar com validação das receitas.
2. Ajustar cabeçalho e enquadramento, comparando as quatro silhuetas.
3. Implementar diálogo e continuidade para a origem.
4. Adicionar animações e verificar foco, fechamento e movimento reduzido.
5. Rodar check/build; validar desktop 1440/1722 px, tela intermediária e celular 390 px.

Aceite: quatro perfis corretos; Bravura sem maior destaque involuntário; nomes alinhados; ícone de backup reconhecível; nenhuma mutação ao cancelar; CTA leva somente às origens compatíveis; teclado Enter/Espaço/Escape e foco funcionam; animação não bloqueia interação; conteúdo cabe no celular; importação/exportação e retomada seguem funcionando.

Artefatos de navegador ficam em output/playwright, fora da fonte. Não criar testes que apenas reproduzam CSS; usar testes de dados/comportamento quando houver novas regras e smoke visual para apresentação.
