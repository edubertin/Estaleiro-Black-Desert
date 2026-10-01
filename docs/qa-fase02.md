# QA independente — Fase 02

Data: 01/10/2026. Execução local http://127.0.0.1:5173, perfil isolado Playwright `estaleiro`. Não houve acesso a credenciais, publicação ou alteração da fonte pelo QA.

## Resultado da demo

Aprovados em navegador real:

- Quatro destinos apresentam apenas Veleiro/Mercante ou Fragata/Contratorpedeiro da família correta; Bartali compartilhado. Continuar exige seleção.
- Origens Melhorado preservam identificação na jornada.
- Quantidade desconhecida, + inicial para 1, decremento até zero bloqueado, excesso acima do necessário e digitação de 100 sem perda de foco.
- Repetição por Enter em +/− mantém o controle em foco.
- Informações abre dialog e devolve foco ao botão original ao fechar.
- Equipamento abaixo de +10 bloqueia confirmação; estoque suficiente não evolui automaticamente.
- Confirmação manual debita 101 para 1; reload mantém 1; desfazer recupera 101.
- Exportação gera backup; importação por seletor nativo restaura 101; arquivo malformado é rejeitado e preserva o projeto aberto.
- Sem rolagem horizontal a 1440 e 390 px. Reflow verificado a 720 px, equivalente ao espaço CSS de desktop 1440 px com zoom 200%; zoom nativo não foi executado.
- Screenshots desktop/mobile inspecionados. Slots e botões estão legíveis, etapa futura recolhida, equipamentos com estados explícitos. Ícones desta execução ainda são marcadores de demo.

## Correções verificadas

QA identificou botões de backup com 40 px e confirmação ainda habilitada com número negativo visível. O desenvolvedor corrigiu; nova execução confirmou controles habilitados de pelo menos 44 px, aria-invalid para -1, bloqueio de confirmação e reativação após corrigir para 101. Valor inválido não altera o estoque salvo.

## Ocorrência resolvida

Na rodada da demo, rejeição de backup malformado mostrava JSON técnico extenso do Zod no alerta. A correção foi verificada na rodada SA: mensagem curta ao usuário, tipo de erro no console e integridade dos dados preservada.

## Evidências

- `output/playwright/fase02-smoke.js`: rotas e jornada.
- `output/playwright/fase02-fix-check.js`: entrada inválida e controles.
- `output/playwright/fase02-desktop.png`, `fase02-mobile.png`, `fase02-zoom-equivalent.png`.
- `output/playwright/fase02-backup.json`: backup sintético exportado; importação e rejeição finalizaram por comandos CLI explícitos click/upload porque run-code pausa no seletor nativo.

## Limites

Este resultado cobre a demo. Homologação de receitas SA, todos os ícones reais e a troca entre catálogo real/demo exigem nova rodada após integração. Não foi feita auditoria de contraste automatizada, leitor de tela, navegador secundário ou desempenho. Não atribuir a estes checks validação de conteúdo do jogo.

## Rodada do catálogo SA integrado

Execução posterior à integração, fonte estabilizada pelo desenvolvedor.

- Troca explícita da demo para SA abre escolha de destino e projeto novo com campos desconhecidos; estoque sintético não é convertido.
- Bartali → Veleiro: licença 1, madeira 350, aço 250, pinheiro 700, linho 100, ouro 5; quatro equipamentos +10. Quantidades verificadas como exibidas pela aplicação, sem nova auditoria editorial pelo QA.
- Preparação, confirmação, reload e desfazer executados com requisitos reais. Licença voltou a 1 após desfazer.
- Os quatro destinos SA ocultam a família incompatível.
- Ícones presentes nas etapas Bartali carregaram a 44×44; ouro usou fallback explícito. Nove imagens da etapa Veleiro foram verificadas sem falha, 36 ocorrências nas quatro rotas iniciais. Não confundir isso com inspeção visual dos 42 assets únicos.
- Painel do item apresenta link para fonte oficial e data. Screenshots `fase02-sa-desktop.png` e `fase02-sa-mobile.png` inspecionados; sem overflow em 390 px.
- Backup SA exportado e importado entre destinos restaurou Gradual e estoque; importação de backup legado voltou à demo com banner próprio, sem conversão silenciosa.
- Backup inválido agora mostra mensagem curta: “Dados inválidos. Confira os valores ou o arquivo de backup.” Projeto preservado. Um erro de console corresponde ao diagnóstico intencional da rejeição.

Artefatos adicionais: `fase02-sa-smoke.js`, `fase02-sa-routes.js`, `fase02-sa-backup.json`, screenshots SA. A primeira tentativa do roteiro SA errou a ordem dos requisitos (licença primeiro); roteiro corrigido e repetido passou. Esse erro era do teste, não da aplicação.

Resultado: fluxo SA navegável aprovado para teste local de Eduardo. Transparência de todos os arquivos, nomes/receitas oficiais e todos os métodos de obtenção dependem do trabalho editorial e sua evidência específica; esta rodada não substitui essa homologação.

## Verificação final integrada

27 testes e TypeScript estrito passaram. Os testes cobrem as quatro jornadas SA completas, quantidades específicas de variantes, preservação de excedentes e seleção do catálogo por versão de backup. Smoke final confirmou o ícone de ouro carregado, nome compacto da licença, disponibilidade da etapa em 100% e cobertura da jornada em 10/31 (~32%). Confirmar/debitar preservou essa cobertura; desfazer restaurou a etapa. Sem overflow em 390 px. Screenshots finais desktop/mobile foram gerados; desktop inspecionado pelo integrador.

Os 43 PNGs ativos foram conferidos em fundos claros/escuros no tamanho nativo. A página de revisão mostrou 86 imagens carregadas sem falha, largura natural de 44 px; screenshot `fase02-icones.png` inspecionado. Ouro deixou de usar fallback. Evidências: `fase02-final-smoke.js`, `fase02-final-desktop.png`, `fase02-final-mobile.png`.

## Simplificação das telas solicitada por Eduardo

27 testes, TypeScript e build passaram após os ajustes. Smoke no navegador confirmou os quatro botões em grade 2×2, ausência de exportação na seleção e da opção de carraca já construída na origem. A confirmação final mostrou somente imagem, parabéns e nome no conteúdo principal, sem rota, progresso ou botões da jornada. Screenshots de seleção e conclusão desktop e conclusão em 390 px foram inspecionados; sem overflow horizontal no celular. Evidências em `output/playwright/`: `telas-simples.js`, `selecao-simples.png`, `conclusao-simples.png` e `conclusao-simples-mobile.png`.
