# Spec 004 — Retomada e backup

Estado: implementado e validado. 01/10/2026.

Um projeto local, sem conta obrigatória. StoragePort permite localStorage no navegador e memória nos testes. Chave estaleiro-project-v1, exportação JSON format 2; importação aceita format 1 e 2, catálogo identificado por versão. Backup limita entrada a 1 milhão de caracteres.

Importar valida schema estrito, quantidades, IDs conhecidos, origem compatível, sequência histórica, materiais debitados exatos e equipamentos históricos. JSON estruturalmente válido mas adulterado também é rejeitado. Importação não grava por si; só substituir após validação e confirmação de interface. Backup inválido não modifica estado atual.

Leitura/gravação/JSON inválidos propagam erro ao chamador. A UI mostra erro e manter estado em memória com possibilidade de exportar; nunca indicar salvo antes de gravar. localStorage não oferece garantia contra perda de perfil do navegador; oferecer backup manual.

Versão futura de formato ou catálogo diferente é rejeitada, sem tentativa de migração automática. Alteração editorial exige revisão de compatibilidade antes de incorporar projetos antigos. Integridade validada evita inconsistência, não é proteção criptográfica contra edição voluntária de estoque pelo jogador.
