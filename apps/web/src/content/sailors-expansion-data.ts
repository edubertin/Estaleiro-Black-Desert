import type { SailorPreviewProfile } from './sailors-preview-data.ts';

export interface SailorExpansionReference extends Omit<SailorPreviewProfile, 'links' | 'portraitUrl' | 'bodyUrl' | 'blinkUrl' | 'figureClass' | 'imageDescription'> {
  species: string;
  evidenceStatus: string;
}

export const sailorExpansionReferences = [
  {
    "id": 59053,
    "name": "Ganancioso",
    "sourceName": "Ambitious",
    "species": "goblin",
    "level": 10,
    "evidenceStatus": "community-reference-sa-pending",
    "sourceUrl": "https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit",
    "attributes": [
      {
        "id": "stamina",
        "label": "Persistência",
        "minimum": 2.7,
        "maximum": 3.4
      },
      {
        "id": "wits",
        "label": "Senso",
        "minimum": 1.1,
        "maximum": 1.5
      },
      {
        "id": "awareness",
        "label": "Sentido",
        "minimum": 1.1,
        "maximum": 1.5
      },
      {
        "id": "superArmor",
        "label": "Força Física",
        "minimum": 1.1,
        "maximum": 1.5
      },
      {
        "id": "patience",
        "label": "Paciência",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "strength",
        "label": "Força",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "focus",
        "label": "Foco",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "vision",
        "label": "Visão",
        "minimum": 0,
        "maximum": 0
      }
    ],
    "facts": [
      [
        "Saúde",
        "50"
      ],
      [
        "Alimentação",
        "150"
      ],
      [
        "Cabine",
        "10"
      ],
      [
        "Peso",
        "200 LT"
      ]
    ],
    "summary": "Um companheiro para velocidade",
    "description": "Ganancioso: perfil para velocidade, com custo básico de 10 cabines e 200 LT de peso. Intervalos comunitários de nível 10, pendentes de confirmação SA e de revisão de patch. A função a bordo modifica a contribuição. Saúde e recursos são valores básicos do catálogo. Corpo completado artisticamente a partir do retrato de referência."
  },
  {
    "id": 59054,
    "name": "Dedicado",
    "sourceName": "Diligent",
    "species": "goblin",
    "level": 10,
    "evidenceStatus": "community-reference-sa-pending",
    "sourceUrl": "https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit",
    "attributes": [
      {
        "id": "stamina",
        "label": "Persistência",
        "minimum": 1.2,
        "maximum": 1.6
      },
      {
        "id": "wits",
        "label": "Senso",
        "minimum": 1.2,
        "maximum": 1.6
      },
      {
        "id": "awareness",
        "label": "Sentido",
        "minimum": 3.6,
        "maximum": 4.4
      },
      {
        "id": "superArmor",
        "label": "Força Física",
        "minimum": 3.6,
        "maximum": 4.4
      },
      {
        "id": "patience",
        "label": "Paciência",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "strength",
        "label": "Força",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "focus",
        "label": "Foco",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "vision",
        "label": "Visão",
        "minimum": 0,
        "maximum": 0
      }
    ],
    "facts": [
      [
        "Saúde",
        "40"
      ],
      [
        "Alimentação",
        "80"
      ],
      [
        "Cabine",
        "10"
      ],
      [
        "Peso",
        "100 LT"
      ]
    ],
    "summary": "Um companheiro para manobra",
    "description": "Dedicado: perfil para manobra, com custo básico de 10 cabines e 100 LT de peso. Intervalos comunitários de nível 10, pendentes de confirmação SA e de revisão de patch. A função a bordo modifica a contribuição. Saúde e recursos são valores básicos do catálogo. Corpo completado artisticamente a partir do retrato de referência."
  },
  {
    "id": 59056,
    "name": "Perdido de Amor",
    "sourceName": "Enamored",
    "species": "goblin",
    "level": 10,
    "evidenceStatus": "community-reference-sa-pending",
    "sourceUrl": "https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit",
    "attributes": [
      {
        "id": "stamina",
        "label": "Persistência",
        "minimum": 1.1,
        "maximum": 1.5
      },
      {
        "id": "wits",
        "label": "Senso",
        "minimum": 2.7,
        "maximum": 3.4
      },
      {
        "id": "awareness",
        "label": "Sentido",
        "minimum": 1.1,
        "maximum": 1.5
      },
      {
        "id": "superArmor",
        "label": "Força Física",
        "minimum": 1.1,
        "maximum": 1.5
      },
      {
        "id": "patience",
        "label": "Paciência",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "strength",
        "label": "Força",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "focus",
        "label": "Foco",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "vision",
        "label": "Visão",
        "minimum": 0,
        "maximum": 0
      }
    ],
    "facts": [
      [
        "Saúde",
        "50"
      ],
      [
        "Alimentação",
        "150"
      ],
      [
        "Cabine",
        "10"
      ],
      [
        "Peso",
        "300 LT"
      ]
    ],
    "summary": "Um companheiro para aceleração",
    "description": "Perdido de Amor: perfil para aceleração, com custo básico de 10 cabines e 300 LT de peso. Intervalos comunitários de nível 10, pendentes de confirmação SA e de revisão de patch. A função a bordo modifica a contribuição. Saúde e recursos são valores básicos do catálogo. Corpo completado artisticamente a partir do retrato de referência."
  },
  {
    "id": 59063,
    "name": "Perseverante",
    "sourceName": "Honest",
    "species": "human",
    "level": 10,
    "evidenceStatus": "community-reference-sa-pending",
    "sourceUrl": "https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit",
    "attributes": [
      {
        "id": "stamina",
        "label": "Persistência",
        "minimum": 1.6,
        "maximum": 2.3
      },
      {
        "id": "wits",
        "label": "Senso",
        "minimum": 1.6,
        "maximum": 2.3
      },
      {
        "id": "awareness",
        "label": "Sentido",
        "minimum": 1.6,
        "maximum": 2.3
      },
      {
        "id": "superArmor",
        "label": "Força Física",
        "minimum": 1.6,
        "maximum": 2.3
      },
      {
        "id": "patience",
        "label": "Paciência",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "strength",
        "label": "Força",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "focus",
        "label": "Foco",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "vision",
        "label": "Visão",
        "minimum": 0,
        "maximum": 0
      }
    ],
    "facts": [
      [
        "Saúde",
        "60"
      ],
      [
        "Alimentação",
        "120"
      ],
      [
        "Cabine",
        "7"
      ],
      [
        "Peso",
        "200 LT"
      ]
    ],
    "summary": "Um companheiro para uma composição equilibrada",
    "description": "Perseverante: perfil para uma composição equilibrada, com custo básico de 7 cabines e 200 LT de peso. Intervalos comunitários de nível 10, pendentes de confirmação SA e de revisão de patch. A função a bordo modifica a contribuição. Saúde e recursos são valores básicos do catálogo. Corpo completado artisticamente a partir do retrato de referência."
  },
  {
    "id": 59064,
    "name": "Durão",
    "sourceName": "Tough",
    "species": "human",
    "level": 10,
    "evidenceStatus": "community-reference-sa-pending",
    "sourceUrl": "https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit",
    "attributes": [
      {
        "id": "stamina",
        "label": "Persistência",
        "minimum": 1.3,
        "maximum": 1.7
      },
      {
        "id": "wits",
        "label": "Senso",
        "minimum": 1.3,
        "maximum": 1.7
      },
      {
        "id": "awareness",
        "label": "Sentido",
        "minimum": 2.6,
        "maximum": 3.9
      },
      {
        "id": "superArmor",
        "label": "Força Física",
        "minimum": 7.1,
        "maximum": 8.3
      },
      {
        "id": "patience",
        "label": "Paciência",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "strength",
        "label": "Força",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "focus",
        "label": "Foco",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "vision",
        "label": "Visão",
        "minimum": 0,
        "maximum": 0
      }
    ],
    "facts": [
      [
        "Saúde",
        "100"
      ],
      [
        "Alimentação",
        "100"
      ],
      [
        "Cabine",
        "5"
      ],
      [
        "Peso",
        "300 LT"
      ]
    ],
    "summary": "Um companheiro para frenagem",
    "description": "Durão: perfil para frenagem, com custo básico de 5 cabines e 300 LT de peso. Nome de apresentação escolhido para o projeto; tradução oficial SA não conferida. Intervalos comunitários de nível 10, pendentes de confirmação SA e de revisão de patch. A função a bordo modifica a contribuição. Saúde e recursos são valores básicos do catálogo. Corpo completado artisticamente a partir do retrato de referência."
  },
  {
    "id": 59065,
    "name": "Forte",
    "sourceName": "Strong",
    "species": "human",
    "level": 10,
    "evidenceStatus": "community-reference-sa-pending",
    "sourceUrl": "https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit",
    "attributes": [
      {
        "id": "stamina",
        "label": "Persistência",
        "minimum": 1.4,
        "maximum": 1.8
      },
      {
        "id": "wits",
        "label": "Senso",
        "minimum": 1.4,
        "maximum": 1.8
      },
      {
        "id": "awareness",
        "label": "Sentido",
        "minimum": 3.5,
        "maximum": 4.8
      },
      {
        "id": "superArmor",
        "label": "Força Física",
        "minimum": 3.5,
        "maximum": 4.8
      },
      {
        "id": "patience",
        "label": "Paciência",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "strength",
        "label": "Força",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "focus",
        "label": "Foco",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "vision",
        "label": "Visão",
        "minimum": 0,
        "maximum": 0
      }
    ],
    "facts": [
      [
        "Saúde",
        "70"
      ],
      [
        "Alimentação",
        "100"
      ],
      [
        "Cabine",
        "8"
      ],
      [
        "Peso",
        "250 LT"
      ]
    ],
    "summary": "Um companheiro para manobra",
    "description": "Forte: perfil para manobra, com custo básico de 8 cabines e 250 LT de peso. Intervalos comunitários de nível 10, pendentes de confirmação SA e de revisão de patch. A função a bordo modifica a contribuição. Saúde e recursos são valores básicos do catálogo. Corpo completado artisticamente a partir do retrato de referência."
  },
  {
    "id": 59068,
    "name": "Sonho de Pesca Farta",
    "sourceName": "Dreaming of a Full Haul",
    "species": "giant",
    "level": 10,
    "evidenceStatus": "community-reference-sa-pending",
    "sourceUrl": "https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit",
    "attributes": [
      {
        "id": "stamina",
        "label": "Persistência",
        "minimum": 1.1,
        "maximum": 1.5
      },
      {
        "id": "wits",
        "label": "Senso",
        "minimum": 3.5,
        "maximum": 6.5
      },
      {
        "id": "awareness",
        "label": "Sentido",
        "minimum": 1.1,
        "maximum": 1.5
      },
      {
        "id": "superArmor",
        "label": "Força Física",
        "minimum": 1.1,
        "maximum": 1.5
      },
      {
        "id": "patience",
        "label": "Paciência",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "strength",
        "label": "Força",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "focus",
        "label": "Foco",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "vision",
        "label": "Visão",
        "minimum": 0,
        "maximum": 0
      }
    ],
    "facts": [
      [
        "Saúde",
        "70"
      ],
      [
        "Alimentação",
        "150"
      ],
      [
        "Cabine",
        "13"
      ],
      [
        "Peso",
        "400 LT"
      ]
    ],
    "summary": "Um companheiro para aceleração",
    "description": "Sonho de Pesca Farta: perfil para aceleração, com custo básico de 13 cabines e 400 LT de peso. Intervalos comunitários de nível 10, pendentes de confirmação SA e de revisão de patch. A função a bordo modifica a contribuição. Saúde e recursos são valores básicos do catálogo. Corpo completado artisticamente a partir do retrato de referência."
  },
  {
    "id": 59070,
    "name": "Nascido no Mar",
    "sourceName": "Born in the Sea",
    "sourceSheet": "Born on the Sea",
    "species": "giant",
    "level": 10,
    "evidenceStatus": "community-reference-sa-pending",
    "sourceUrl": "https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit",
    "attributes": [
      {
        "id": "stamina",
        "label": "Persistência",
        "minimum": 3,
        "maximum": 3.4
      },
      {
        "id": "wits",
        "label": "Senso",
        "minimum": 1.3,
        "maximum": 1.7
      },
      {
        "id": "awareness",
        "label": "Sentido",
        "minimum": 0.6,
        "maximum": 1
      },
      {
        "id": "superArmor",
        "label": "Força Física",
        "minimum": 0.6,
        "maximum": 1
      },
      {
        "id": "patience",
        "label": "Paciência",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "strength",
        "label": "Força",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "focus",
        "label": "Foco",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "vision",
        "label": "Visão",
        "minimum": 0,
        "maximum": 0
      }
    ],
    "facts": [
      [
        "Saúde",
        "120"
      ],
      [
        "Alimentação",
        "150"
      ],
      [
        "Cabine",
        "10"
      ],
      [
        "Peso",
        "500 LT"
      ]
    ],
    "summary": "Um companheiro para velocidade",
    "description": "Nascido no Mar: perfil para velocidade, com custo básico de 10 cabines e 500 LT de peso. Intervalos comunitários de nível 10, pendentes de confirmação SA e de revisão de patch. A função a bordo modifica a contribuição. Saúde e recursos são valores básicos do catálogo. Corpo completado artisticamente a partir do retrato de referência."
  },
  {
    "id": 59069,
    "name": "Osso Duro",
    "sourceName": "Powerful",
    "species": "giant",
    "level": 10,
    "evidenceStatus": "community-reference-sa-pending",
    "sourceUrl": "https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit",
    "attributes": [
      {
        "id": "stamina",
        "label": "Persistência",
        "minimum": 2.1,
        "maximum": 2.8
      },
      {
        "id": "wits",
        "label": "Senso",
        "minimum": 2.1,
        "maximum": 2.8
      },
      {
        "id": "awareness",
        "label": "Sentido",
        "minimum": 2.1,
        "maximum": 2.8
      },
      {
        "id": "superArmor",
        "label": "Força Física",
        "minimum": 2.1,
        "maximum": 2.8
      },
      {
        "id": "patience",
        "label": "Paciência",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "strength",
        "label": "Força",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "focus",
        "label": "Foco",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "vision",
        "label": "Visão",
        "minimum": 0,
        "maximum": 0
      }
    ],
    "facts": [
      [
        "Saúde",
        "150"
      ],
      [
        "Alimentação",
        "150"
      ],
      [
        "Cabine",
        "8"
      ],
      [
        "Peso",
        "500 LT"
      ]
    ],
    "summary": "Um companheiro para uma composição equilibrada",
    "description": "Osso Duro: perfil para uma composição equilibrada, com custo básico de 8 cabines e 500 LT de peso. Intervalos comunitários de nível 10, pendentes de confirmação SA e de revisão de patch. A função a bordo modifica a contribuição. Saúde e recursos são valores básicos do catálogo. Corpo completado artisticamente a partir do retrato de referência."
  },
  {
    "id": 59071,
    "name": "Inteligente",
    "sourceName": "Smart",
    "species": "giant",
    "level": 10,
    "evidenceStatus": "community-reference-sa-pending",
    "sourceUrl": "https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit",
    "attributes": [
      {
        "id": "stamina",
        "label": "Persistência",
        "minimum": 1.3,
        "maximum": 1.7
      },
      {
        "id": "wits",
        "label": "Senso",
        "minimum": 1.3,
        "maximum": 1.7
      },
      {
        "id": "awareness",
        "label": "Sentido",
        "minimum": 1.3,
        "maximum": 1.7
      },
      {
        "id": "superArmor",
        "label": "Força Física",
        "minimum": 1.3,
        "maximum": 1.7
      },
      {
        "id": "patience",
        "label": "Paciência",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "strength",
        "label": "Força",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "focus",
        "label": "Foco",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "vision",
        "label": "Visão",
        "minimum": 0,
        "maximum": 0
      }
    ],
    "facts": [
      [
        "Saúde",
        "150"
      ],
      [
        "Alimentação",
        "100"
      ],
      [
        "Cabine",
        "5"
      ],
      [
        "Peso",
        "500 LT"
      ]
    ],
    "summary": "Um companheiro para baixo consumo de cabine",
    "description": "Inteligente: perfil para baixo consumo de cabine, com custo básico de 5 cabines e 500 LT de peso. Intervalos comunitários de nível 10, pendentes de confirmação SA e de revisão de patch. A função a bordo modifica a contribuição. Saúde e recursos são valores básicos do catálogo. Corpo completado artisticamente a partir do retrato de referência."
  },
  {
    "id": 59072,
    "name": "Rápido no Cálculo",
    "sourceName": "Quick-Witted",
    "species": "giant",
    "level": 10,
    "evidenceStatus": "community-reference-sa-pending",
    "sourceUrl": "https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit",
    "attributes": [
      {
        "id": "stamina",
        "label": "Persistência",
        "minimum": 1.1,
        "maximum": 2.5
      },
      {
        "id": "wits",
        "label": "Senso",
        "minimum": 1.7,
        "maximum": 3
      },
      {
        "id": "awareness",
        "label": "Sentido",
        "minimum": 1.5,
        "maximum": 2
      },
      {
        "id": "superArmor",
        "label": "Força Física",
        "minimum": 5.7,
        "maximum": 9.8
      },
      {
        "id": "patience",
        "label": "Paciência",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "strength",
        "label": "Força",
        "minimum": 1.1,
        "maximum": 1.5
      },
      {
        "id": "focus",
        "label": "Foco",
        "minimum": 9.1,
        "maximum": 13
      },
      {
        "id": "vision",
        "label": "Visão",
        "minimum": 1.1,
        "maximum": 1.5
      }
    ],
    "facts": [
      [
        "Saúde",
        "120"
      ],
      [
        "Alimentação",
        "150"
      ],
      [
        "Cabine",
        "10"
      ],
      [
        "Peso",
        "500 LT"
      ]
    ],
    "summary": "Um companheiro para precisão e frenagem",
    "description": "Rápido no Cálculo: perfil para precisão e frenagem, com custo básico de 10 cabines e 500 LT de peso. Intervalos comunitários de nível 10, pendentes de confirmação SA e de revisão de patch. A função a bordo modifica a contribuição. Saúde e recursos são valores básicos do catálogo. Corpo completado artisticamente a partir do retrato de referência."
  },
  {
    "id": 59101,
    "name": "Arkan",
    "sourceName": "Arkahn",
    "species": "human",
    "level": 10,
    "evidenceStatus": "community-reference-sa-pending",
    "sourceUrl": "https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit",
    "attributes": [
      {
        "id": "stamina",
        "label": "Persistência",
        "minimum": 1.1,
        "maximum": 1.4
      },
      {
        "id": "wits",
        "label": "Senso",
        "minimum": 1.1,
        "maximum": 1.4
      },
      {
        "id": "awareness",
        "label": "Sentido",
        "minimum": 1.1,
        "maximum": 1.4
      },
      {
        "id": "superArmor",
        "label": "Força Física",
        "minimum": 1.1,
        "maximum": 1.4
      },
      {
        "id": "patience",
        "label": "Paciência",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "strength",
        "label": "Força",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "focus",
        "label": "Foco",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "vision",
        "label": "Visão",
        "minimum": 0,
        "maximum": 0
      }
    ],
    "facts": [
      [
        "Saúde",
        "30"
      ],
      [
        "Alimentação",
        "100"
      ],
      [
        "Cabine",
        "3"
      ],
      [
        "Peso",
        "300 LT"
      ]
    ],
    "summary": "Um companheiro para baixo consumo de cabine",
    "description": "Arkan: perfil para baixo consumo de cabine, com custo básico de 3 cabines e 300 LT de peso. Intervalos comunitários de nível 10, pendentes de confirmação SA e de revisão de patch. A função a bordo modifica a contribuição. Saúde e recursos são valores básicos do catálogo. Corpo completado artisticamente a partir do retrato de referência."
  },
  {
    "id": 59227,
    "name": "Hatario",
    "sourceName": "Hetario",
    "species": "otter",
    "level": 10,
    "evidenceStatus": "community-reference-sa-pending",
    "sourceUrl": "https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit",
    "attributes": [
      {
        "id": "stamina",
        "label": "Persistência",
        "minimum": 1.7,
        "maximum": 2.2
      },
      {
        "id": "wits",
        "label": "Senso",
        "minimum": 1.4,
        "maximum": 1.5
      },
      {
        "id": "awareness",
        "label": "Sentido",
        "minimum": 1.1,
        "maximum": 1.1
      },
      {
        "id": "superArmor",
        "label": "Força Física",
        "minimum": 1.1,
        "maximum": 1.1
      },
      {
        "id": "patience",
        "label": "Paciência",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "strength",
        "label": "Força",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "focus",
        "label": "Foco",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "vision",
        "label": "Visão",
        "minimum": 0,
        "maximum": 0
      }
    ],
    "facts": [
      [
        "Saúde",
        "48"
      ],
      [
        "Alimentação",
        "100"
      ],
      [
        "Cabine",
        "5"
      ],
      [
        "Peso",
        "150 LT"
      ]
    ],
    "summary": "Um companheiro para velocidade",
    "description": "Hatario: perfil para velocidade, com custo básico de 5 cabines e 150 LT de peso. Intervalos comunitários de nível 10, pendentes de confirmação SA e de revisão de patch. A função a bordo modifica a contribuição. Saúde e recursos são valores básicos do catálogo. Corpo completado artisticamente a partir do retrato de referência."
  },
  {
    "id": 59228,
    "name": "Pakuna",
    "sourceName": "Pacuna",
    "species": "papu",
    "level": 10,
    "evidenceStatus": "community-reference-sa-pending",
    "sourceUrl": "https://docs.google.com/spreadsheets/d/1CFJOgyhnw2_Rq4UM2zs2uK6J15nipv1LiwrDQUWxU0o/edit",
    "attributes": [
      {
        "id": "stamina",
        "label": "Persistência",
        "minimum": 1.7,
        "maximum": 2.2
      },
      {
        "id": "wits",
        "label": "Senso",
        "minimum": 1.4,
        "maximum": 1.5
      },
      {
        "id": "awareness",
        "label": "Sentido",
        "minimum": 1.1,
        "maximum": 1.1
      },
      {
        "id": "superArmor",
        "label": "Força Física",
        "minimum": 1.1,
        "maximum": 1.1
      },
      {
        "id": "patience",
        "label": "Paciência",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "strength",
        "label": "Força",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "focus",
        "label": "Foco",
        "minimum": 0,
        "maximum": 0
      },
      {
        "id": "vision",
        "label": "Visão",
        "minimum": 0,
        "maximum": 0
      }
    ],
    "facts": [
      [
        "Saúde",
        "46"
      ],
      [
        "Alimentação",
        "80"
      ],
      [
        "Cabine",
        "5"
      ],
      [
        "Peso",
        "100 LT"
      ]
    ],
    "summary": "Um companheiro para velocidade",
    "description": "Pakuna: perfil para velocidade, com custo básico de 5 cabines e 100 LT de peso. Intervalos comunitários de nível 10, pendentes de confirmação SA e de revisão de patch. A função a bordo modifica a contribuição. Saúde e recursos são valores básicos do catálogo. Corpo completado artisticamente a partir do retrato de referência."
  }
] satisfies SailorExpansionReference[];
