# ADR 003 — Separar catálogo, cálculo e apresentação

Estado: adotado na primeira implementação local autorizada. Data: 01/10/2026.

## Contexto

O catálogo muda com patches; o design será iterado no Figma; o cálculo precisa conservar estoque e progresso. Acoplar regras às telas tornaria essas alterações difíceis de conferir.

## Proposta

Manter catálogo versionado, motor determinístico de requisitos e UI como responsabilidades distintas dentro de uma única aplicação inicial. Equipamentos +10 são nós finais no MVP; o motor não expande suas receitas. Não criar microserviços ou pacotes compartilhados antes de necessidade concreta.

## Alternativas

Listas/receitas embutidas em componentes são rápidas, mas dificultam conferência e reutilização. Um backend completo desde o início amplia o escopo sem requisito confirmado de sincronização.

## Consequências e validação

Fixtures permitem validar o fluxo antes do catálogo real. Testes verificam faltantes, reservas e transições sem depender de layout. Confirmar a proposta ao escrever as specs de catálogo e cálculo. Framework, banco e persistência não são decididos aqui.
