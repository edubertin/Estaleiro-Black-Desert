# Spec 002 — Catálogo versionado

Estado: contrato implementado e catálogo SA de oito receitas conectado ao MVP. Atualizado em 03/10/2026. Fixture antiga preservada como ilustrativa. Evidências e limites da conferência em `../catalogo-evidencias-sa.md`.

IDs são estáveis, sem ligação com tradução. Catálogo identifica versão, região e condição ilustrativa. Item informa tipo, nome editorial, fonte e conferência SA. Região do jogo e idioma da interface serão dimensões separadas na apresentação; os nomes reais devem vir de uma tabela editorial de nomes oficiais por região/idioma, nunca de tradução automática.

Rota é uma sequência de etapas com origem, destino e requisitos finais. Validar IDs únicos, ausência de ciclos, continuidade, destino final e correspondência entre tipo do item e requisito. Catálogo publicável rejeita requisitos sem fonte e conferência SA. Fixture identificada como ilustrativa não serve como certificação de receita.

Rotas previstas: Bartali → Sailboat → Caravel → Gradual/Equilíbrio; Bartali → Frigate → Galleass → Bravura/Emergência. Improved é opcional, permite entrada como variante do precursor e não acrescenta etapa obrigatória. Origem Melhorado tem ID próprio preservado no projeto e backup; o motor resolve seu precursor base para calcular etapas. A seleção deriva as origens da rota e a importação rejeita famílias incompatíveis. Ascensão e Emergência são aliases SA da mesma carraca, conforme confirmação de Eduardo.

Fontes iniciais: `pesquisa-inicial.md`, `referencias/estaleiro/README.md` e wiki SA 291. Quantidades atuais e resoluções das divergências estão em `../catalogo-evidencias-sa.md`; inspeção direta do cliente SA permanece pendente. Ícone exige vínculo verificável com item; não inferir nomes por imagem. Craft de equipamento não se expande no motor.
