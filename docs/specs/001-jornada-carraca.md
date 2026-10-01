# Spec 001 — Jornada de construção da carraca

Estado: MVP implementado. Data: 01/10/2026. Escopo conforme ADR 001.

## Objetivo e usuários

Permitir que jogadores iniciantes e experientes acompanhem a construção de uma das quatro carracas a partir do barco que já possuem, sem consultar uma tabela global de todas as receitas.

## Dentro e fora do MVP

Dentro: quatro carracas; origem compatível; etapas relevantes; materiais numéricos; equipamentos precursores +10; ajuda de obtenção; faltantes; disponibilidade; confirmação da evolução; retomada do projeto.

Fora: craft detalhado de equipamento, simulador de aprimoramento, equipamento da carraca após construção, Panokseon, múltiplas construções simultâneas, integração com o jogo, preços/rotas de mercado ao vivo e idiomas adicionais. Login/sincronização não são requisito desta primeira entrega.

## Jornada

1. Entrada apresenta quatro destinos transparentes com imagem e nome, em linha no desktop e grade 2×2 nas telas menores. Clique abre apresentação animada com especialidade e fonte; cancelar preserva o projeto.
2. “Escolher esta carraca” abre a tela de barco atual com somente origens compatíveis; escolher uma e clicar Continuar abre a jornada.
3. Quem começa do zero vê o caminho inicial; quem tem precursor compatível começa dali.
4. Jornada mostra linha do tempo visual com origem real, evoluções e destino. Barco possuído recebe destaque dourado e marcador; disponibilidade por evolução e cobertura geral ficam abaixo. Materiais da etapa atual ocupam a largura disponível; etapas futuras permitem consulta sem edição ou avanço.
5. Materiais em slots com quantidade atual/necessária, +/− e ajuda. Equipamentos em slots clicáveis com grau centralizado, seletor de ausência ou +0 a +10 e ajuda; apenas +10 atende.
6. Como conseguir abre detalhe contextual e preserva a posição na jornada.
7. Atendimento completo habilita “Confirmar evolução”; o jogador realiza a operação no jogo e confirma aqui. Disponibilidade de 100% não muda o barco possuído automaticamente.
8. Confirmação registra a etapa e destaca a próxima. Ao final, exibe a carraca grande e centralizada, a mensagem de parabéns e seu nome, sem navegação da jornada.

## Regras

A seleção oferece somente origens compatíveis, sem a opção “Já tenho esta carraca”. Não descartar estoque ao trocar o destino.

Materiais aceitam inteiros não negativos e preservam excedentes. “Não informado” é distinto de zero. Nunca marcar equipamentos abaixo de +10 como suficientes; mostrar a preparação que falta sem calcular tentativas.

Atualizações de estoque não realizam craft automaticamente. Antes de descontar materiais numa confirmação de evolução, explicar o efeito e permitir desfazer. Recursos de uma etapa confirmada não devem reaparecer como faltantes dessa etapa. A estratégia de reserva e consumo será refinada na spec de estoque.

Mudança de destino recalcula requisitos mantendo quantidades reais e etapas compatíveis. Mudança incompatível de rota pede um novo ponto de partida. Não concluir etapas inexistentes no histórico como se tivessem sido executadas no aplicativo.

Progresso por item é limitado a 100%, sem limitar estoque real. Cobertura agregada é a média das proporções atendidas dos requisitos, conforme spec 003; nunca representa tempo ou custo garantido.

## Critérios de aceitação

- Selecionar cada carraca gera a linha de origem correta conforme catálogo conferido.
- Um precursor existente remove do plano restante a necessidade de fabricar barcos anteriores.
- Necessário 100 e Tenho 40 resulta em Falta 60; Tenho 120 mantém estoque 120 e Falta 0.
- Peça abaixo de +10 permanece pendente; peça correta +10 atende o requisito.
- Materiais suficientes deixam a etapa pronta, sem avançar automaticamente.
- Confirmar/desfazer evolução mantém estado e estoque consistentes.
- Abrir e fechar ajuda mantém edição e contexto.
- Reabrir a aplicação retoma o último estado salvo; falha de salvamento é visível.
- Interface funciona em desktop e celular, por teclado e sem depender só de cor.
- Uma receita não conferida permanece identificada e não é publicada como requisito exato.

## Dependências e pendências

Catálogo SA/PT-BR baseado no guia e em atualizações oficiais, conforme `../catalogo-evidencias-sa.md`; interface local e regras de estoque/persistência implementadas. Nenhuma receita é certificada somente por exemplo visual. Craft de processamento com rendimento incerto permanece fora do cálculo.
