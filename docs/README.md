# Documentação do Estaleiro Black Desert

## Sistema atual

- [Projeto e comandos](../PROJECT.md)
- [Jornada](specs/001-jornada-carraca.md)
- [Catálogo](specs/002-catalogo.md)
- [Estoque e progresso](specs/003-estoque-progresso.md)
- [Retomada e backup](specs/004-persistencia.md)
- [Equipamentos e graus](equipamentos-graus.md)
- [Fontes oficiais SA](catalogo-evidencias-sa.md)
- [Ícones ilustrados](icones-ilustrados-catalogo.md)
- [Publicação e manutenção](publicacao.md)

## Decisões

ADRs 001–006 em [adr](adr/) definem escopo, identidades regionais, separação do motor, stack, versões e hospedagem pública. Equipamentos possuem grau exato; apenas +10 atende. O backup exportado usa formato 2 e aceita legado formato 1.

## Histórico e QA

O [plano inicial](plano-implementacao.md), pesquisa, brief Figma e planos de fases preservam o histórico; as specs e documentos atuais acima prevalecem sobre estados antigos. Relatórios qa-fase02.md, qa-fase03.md, qa-fase04.md e qa-fase05.md registram suas respectivas verificações. Screenshots e scripts de smoke ficam em output/, fora do Git.
