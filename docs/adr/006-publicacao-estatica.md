# ADR 006 — Publicação estática e privacidade local

Estado: aceito pelo pedido de publicação do usuário. 01/10/2026.

## Decisão

Publicar o código no repositório público Estaleiro-Black-Desert do GitHub de Eduardo e servir o build estático Vite nos Sites do GPT com acesso público. Preservar a marca Estaleiro Black Desert. Não adicionar servidor, conta ou integração com o jogo.

O código fonte revisável e a documentação ficam no GitHub. O checkout de hospedagem separado contém o export estático e `.openai/hosting.json`; não compartilha credenciais nem Git com o repositório principal. Publicações usam o workflow oficial do plugin Sites. Metadados Open Graph e Twitter Card apontam para imagem PNG 1200 × 630 com o logo.

## Consequências

localStorage pertence à origem do site. Um projeto salvo no endereço local não migra automaticamente ao site público: exportar/importar o backup. Hospedagem não sincroniza progresso. Sem telemetria de aplicação ou banco; fontes/fontes tipográficas externas e provedor de hospedagem mantêm suas próprias requisições.

Novos backups usam formato 2; importação aceita formato 1 e normaliza ready-10 para 10, preservando missing e below-10 desconhecido. Catálogo não é convertido entre versões.

Não adicionar licença que conceda direitos sobre artes, marcas ou referências oficiais de terceiros. O projeto é comunitário e independente. Otimização de imagens e revisão direta no cliente SA ficam como melhorias futuras, sem afirmar homologação oficial.

## Operação

Checks: npm ci, npm run check e npm run build. Após alteração autorizada, gerar build, sincronizar o checkout do Site e publicar versão registrada; conservar versões anteriores para recuperação. Revisões GitHub passam por branch codex/ e PR draft. Commits, push, merge e novas publicações seguem autorização do usuário.
