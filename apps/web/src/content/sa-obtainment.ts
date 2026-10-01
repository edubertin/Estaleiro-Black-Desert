import type { EditorialObtainment } from './types.ts';

export const saObtainmentEvidence: EditorialObtainment[] = [
  {
    itemId: 'licenca-de-expansao-de-navio-veleiro-de-epheria', method: 'npc', inputs: [],
    sourceId: 'sa-wiki-291', locator: 'table[0]: licença', verifiedSA: false,
    note: 'Compra de Philaberto Falasi, no Porto de Epheria.',
  },
  {
    itemId: 'licenca-de-expansao-de-navio-fragata-de-epheria', method: 'npc', inputs: [],
    sourceId: 'sa-wiki-291', locator: 'table[1]: licença', verifiedSA: false,
    note: 'Compra de Philaberto Falasi, no Porto de Epheria.',
  },
  {
    itemId: 'licenca-de-expansao-de-navio-navio-mercante-de-epheria', method: 'npc', inputs: [],
    sourceId: 'sa-wiki-291', locator: 'table[3]: licença', verifiedSA: false,
    note: 'Compra de Philaberto Falasi, no Porto de Epheria. As instruções antigas de pedras de aprimoramento da wiki foram substituídas pelo patch 4657.',
  },
  {
    itemId: 'licenca-de-expansao-de-navio-contratorpedeiro-de-epheria', method: 'npc', inputs: [],
    sourceId: 'sa-wiki-291', locator: 'table[4]: licença', verifiedSA: false,
    note: 'Compra de Philaberto Falasi, no Porto de Epheria. As instruções antigas de pedras de aprimoramento da wiki foram substituídas pelo patch 4657.',
  },
  {
    itemId: 'gold-bar-1000g', method: 'npc', inputs: [],
    sourceId: 'sa-patch-5019', locator: 'Melhoria dos Materiais da Expansão de Veleiro Bartali → Veleiro/Fragata', verifiedSA: false,
    note: 'Troca com Guardador de Armazém. O patch também escreve Guardador de Porto na tabela do Veleiro; não é compra de equipamento com Falasi.',
  },
  {
    itemId: 'lenho-padronizado', method: 'market', inputs: [],
    sourceId: 'sa-patch-5019', locator: 'Bartali → Veleiro/Fragata', verifiedSA: false,
    note: 'Madeira de Construção: obtenção por produção ou Mercado. Nome antigo Lenho Padronizado.',
  },
  {
    itemId: 'aco', method: 'market', inputs: [],
    sourceId: 'sa-patch-5019', locator: 'Bartali → Veleiro', verifiedSA: false,
    note: 'Produção ou Mercado; conferir receita de processamento antes de expandir os insumos.',
  },
  {
    itemId: 'madeira-compensada-de-pinheiro', method: 'market', inputs: [],
    sourceId: 'sa-patch-5019', locator: 'Bartali → Veleiro', verifiedSA: false,
    note: 'Produção ou Mercado; o requisito é o compensado pronto.',
  },
  {
    itemId: 'tecido-de-linho', method: 'market', inputs: [],
    sourceId: 'sa-patch-5019', locator: 'Bartali → Veleiro', verifiedSA: false,
    note: 'Produção ou Mercado; o requisito é o tecido pronto.',
  },
  {
    itemId: 'barra-de-acessorio-de-coral-com-jade', method: 'market', inputs: [],
    sourceId: 'sa-patch-5019', locator: 'Bartali → Fragata', verifiedSA: false,
    note: 'Coleta, produção ou Mercado. Não substituir por outro tipo de barra de coral.',
  },
  {
    itemId: 'madeira-compensada-revestida-de-pinheiro', method: 'market', inputs: [],
    sourceId: 'sa-patch-5019', locator: 'Bartali → Fragata', verifiedSA: false,
    note: 'Coleta, produção ou Mercado; diferente do compensado de pinheiro comum.',
  },
  {
    itemId: 'linho-reforcado', method: 'market', inputs: [],
    sourceId: 'sa-patch-5019', locator: 'Bartali → Fragata', verifiedSA: false,
    note: 'Coleta, produção ou Mercado; diferente do tecido de linho comum.',
  },
  {
    itemId: 'barra-de-grafite-para-expansao', method: 'heating',
    inputs: [{ observedName: 'Essência de Criatura Marinha', quantity: 1 }, { observedName: 'Barra de Zinco', quantity: 100 }],
    sourceId: 'sa-wiki-291', locator: 'table[3]: Barra de Grafite para Expansão', verifiedSA: false,
    note: 'Insumos observados para processamento; rendimento não informado. Diário de Lavinia é alternativa. Não multiplicar por quantidade final sem conferir rendimento.',
  },
  {
    itemId: 'madeira-para-expansao', method: 'chopping',
    inputs: [{ observedName: 'Essência de Criatura Marinha', quantity: 1 }, { observedName: 'Caroço de Árvore Vermelha', quantity: 100 }, { observedName: 'Casca de Árvore Velha', quantity: 100 }],
    sourceId: 'sa-wiki-291', locator: 'table[3]: Madeira para Expansão', verifiedSA: false,
    note: 'Insumos observados para processamento; rendimento não informado. Diário de Lavinia é alternativa.',
  },
  {
    itemId: 'cola-para-expansao', method: 'heating',
    inputs: [], sourceId: 'sa-wiki-291', locator: 'table[3]: Cola para Expansão', verifiedSA: false,
    note: 'Fonte mistura nome espanhol de seiva e quantidades 100/300; receita de processamento permanece bloqueada. Não inferir insumos oficiais portugueses.',
  },
  {
    itemId: 'tecido-de-linho-com-a-veia-da-lua-gravada', method: 'drying',
    inputs: [{ observedName: 'Tendão do Khan', quantity: 1 }],
    sourceId: 'sa-wiki-291', locator: 'table[6]: Tecido de Linho com a veia da lua gravada', verifiedSA: false,
    note: 'Fonte cita processamento de espólio de Khan, Loja Corvo e missões diárias como alternativas. Rendimento não homologado.',
  },
  {
    itemId: 'madeira-de-construcao-envolto-com-um-brilho-azul-marinho', method: 'chopping',
    inputs: [{ observedName: 'Estilhaço do Navio Pirata Utilizável', quantity: 1 }],
    sourceId: 'sa-wiki-291', locator: 'table[6]: Madeira de Construção Envolto com um Brilho Azul Marinho', verifiedSA: false,
    note: 'Fonte cita processamento de espólio Cox e alternativas por missão ou Loja Corvo. Rendimento não homologado.',
  },
  {
    itemId: 'madeira-de-construcao-com-um-brilho-de-onda', method: 'chopping',
    inputs: [{ observedName: 'Destroço do Navio Fantasma Naufragado', quantity: 1 }],
    sourceId: 'sa-wiki-291', locator: 'table[4]: Madeira de Construção com um brilho de onda', verifiedSA: false,
    note: 'Fonte cita espólio Cox e missão diária como alternativas; rendimento não homologado.',
  },
  {
    itemId: 'madeira-compensada-gravada-com-escama-da-lua', method: 'drying',
    inputs: [{ observedName: 'Escama de Khan', quantity: 1 }],
    sourceId: 'sa-wiki-291', locator: 'table[4]: Madeira Compensada Gravada com Escama da Lua', verifiedSA: false,
    note: 'Fonte cita espólio de Khan, Loja Corvo e missões como alternativas; rendimento não homologado.',
  },
  {
    itemId: 'madeira-compensada-revestida-de-rubus', method: 'barter', inputs: [],
    sourceId: 'sa-wiki-291', locator: 'tables[3-4]: Rubus', verifiedSA: false,
    note: 'Permuta de mercadorias de nível 2. A lista de mercadorias da wiki mistura idiomas; consultar a oferta atual no jogo.',
  },
  {
    itemId: 'barra-de-sal-gema', method: 'barter', inputs: [],
    sourceId: 'sa-wiki-291', locator: 'table[3]: sal gema', verifiedSA: false,
    note: 'Permuta de mercadorias de nível 2. Não confundir com a barra de sal exuberante exigida pela carraca.',
  },
  {
    itemId: 'cola-com-memorias-do-mar-profundo', method: 'quest', inputs: [],
    sourceId: 'sa-wiki-291', locator: 'table[3]: cola do mar profundo', verifiedSA: false,
    note: 'Alternativas por permuta de nível 3, Loja Corvo ou diária de Ravikel. Escolher uma obtenção; não somar os métodos como requisitos.',
  },
  {
    itemId: 'caule-de-alga-profunda', method: 'quest', inputs: [],
    sourceId: 'sa-wiki-291', locator: 'tables[3-4]: alga', verifiedSA: false,
    note: 'Alternativas por Loja Corvo, trocas com comerciantes Lontra e missão diária de coral.',
  },
  {
    itemId: 'barra-de-cobalto', method: 'barter', inputs: [],
    sourceId: 'sa-wiki-291', locator: 'table[4]: cobalto', verifiedSA: false,
    note: 'Alternativas por permuta de nível 2 ou Loja Corvo. Nomes da lista de permuta estão em inglês na fonte SA; não traduzir automaticamente.',
  },
  {
    itemId: 'barra-de-sal-de-rocha-exuberante', method: 'barter', inputs: [],
    sourceId: 'sa-wiki-291', locator: 'tables[6-9]: sal exuberante', verifiedSA: false,
    note: 'Alternativas por permuta de nível 5 ou Loja Corvo. Diferente do sal gema da evolução intermediária.',
  },
  {
    itemId: 'cristal-de-perola-brilhante', method: 'barter', inputs: [],
    sourceId: 'sa-wiki-291', locator: 'tables[6-9]: pérola', verifiedSA: false,
    note: 'Alternativas por permuta de nível 5 ou Loja Corvo.',
  },
  {
    itemId: 'olho-abissal', method: 'quest', inputs: [],
    sourceId: 'sa-wiki-291', locator: 'tables[6-9]: olho abissal', verifiedSA: false,
    note: 'Alternativas por missão de caça naval, Loja Corvo, permuta no oceano e pesca. A indicação de alquimia simples está incompleta; não publicar fórmula presumida.',
  },
];
