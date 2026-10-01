# Spec 003 — Estoque e progresso

Estado: regras implementadas no motor inicial, revisáveis. 01/10/2026.

Um estoque por projeto. Materiais: inteiro seguro não negativo, ou null/ausente para desconhecido. Equipamento específico: missing ou inteiro +0 a +10; below-10 é preservado somente para legado de grau desconhecido. Entrada ready-10 é normalizada para 10. Cada peça exigida tem identidade própria; somente 10 atende. Excedentes preservados.

Alocar na etapa atual, depois nas futuras, sem duplicar unidades. As reservas são cálculo derivado, não consumo. Faltante = necessário − alocado, mínimo zero. Equipamento é alocado uma única vez.

Cobertura da etapa = média das frações atendidas de cada requisito, cada fração limitada a 1. Exemplo: madeira 40/100 e equipamento pendente → (0,4 + 0)/2 = 20%. É disponibilidade registrada, não tempo, esforço ou custo; UI mantém requisitos atendidos e desconhecidos explícitos.

Fase 02: cobertura da jornada considera todos os requisitos do caminho desde a origem escolhida. Requisitos de etapas confirmadas contam como atendidos; os pendentes usam a alocação única do estoque. Dividir a soma das frações pelo total de requisitos, em vez de calcular média simples das porcentagens das etapas. Exemplo: primeira etapa com dois requisitos completos e última com um pendente resulta em 2/3. Confirmar a primeira etapa mantém 2/3 mesmo depois do débito. Cobertura de 100% continua distinta de carraca construída; a confirmação é manual.

Confirmar manualmente somente a etapa atual suficiente. Consumir quantidades e peças uma vez; registrar histórico de débitos exatos. Disponibilidade nunca confirma construção. Origem avançada pula requisitos anteriores sem inventar histórico. Origem já igual ao destino é objetivo declarado alcançado.

Desfazer apenas a última confirmação: somar os débitos ao estoque atual, preservando aquisições posteriores. Se quantidade foi apagada para desconhecido ou equipamento consumido foi editado posteriormente, rejeitar desfazer sem alterar estado; UI deverá explicar como resolver o conflito. Nunca sobrescrever edições silenciosamente.

Troca de destino conserva estoque e histórico apenas quando etapas confirmadas são idênticas. Caso incompatível exige novo plano com origem no barco atual; UX dessa ação fica pendente. Funções retornam novo estado e não alteram o projeto recebido.
