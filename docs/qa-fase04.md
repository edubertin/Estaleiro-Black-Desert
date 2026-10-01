# QA — seleção visual da origem

01/10/2026. Check com TypeScript estrito e 29 testes passou; build passou.

Smoke percorreu Gradual, Equilíbrio, Emergência e Bravura: quatro opções em cada tela, botão Continuar inicialmente desabilitado, seleção por Espaço e preservação dos IDs epheria-sailboat-improved/epheria-frigate-improved ao iniciar a jornada. Sem subtítulo de destino. Sete imagens distintas carregadas e decodificadas; pixels totalmente transparentes e opacos presentes em cada PNG. Reset da logo usado entre cenários num perfil isolado.

Capturas desktop 1440×1000 das duas famílias e mobile 390×844 foram geradas. Desktop de ambas e mobile comércio inspecionados. Nenhum overflow horizontal detectado. Evidências em output/playwright: fase04-smoke.js e origem-{trade,combat}-{desktop,mobile}.png.

IDs/rotas e Improved seguem cobertos pelos testes existentes; novos comportamentos de UI foram exercitados no navegador, sem teste que espelhe CSS. As artes foram revistas contra referências, mas são aproximações por IA; validação de fidelidade fina pelo jogador continua útil. Não houve auditoria de leitor de tela ou revisão específica em 1722 px/tela intermediária nesta fase. Movimento reduzido usa CSS scoped sem nova execução de smoke dedicada.
