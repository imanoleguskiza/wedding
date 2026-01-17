export const languages = ['en', 'es', 'bg'] as const;
export type Lang = (typeof languages)[number];

type ScheduleEntry = {
  subtitle: string;
  time: string;
  title: string;
  details: string;
  description: string;
  badge?: string;
};

type InfoCard = {
  title: string;
  body: string[];
};

type RsvpStrings = {
  title: string;
  intro: string;
  fields: {
    names: string;
    email: string;
    attendance: string;
    guests: string;
    diet: string;
    song: string;
    message: string;
  };
  placeholders: {
    names: string;
    email: string;
    diet: string;
    song: string;
    message: string;
  };
  attendanceOptions: {
    yes: string;
    no: string;
  };
  submit: string;
  status: {
    sending: string;
    success: string;
    error: string;
  };
};

export type Translation = {
  meta: {
    title: string;
    dateLocation: string;
  };
  nav: {
    home: string;
    info: string;
    rsvp: string;
  };
    hero: {
    names: string;
    subtitle: string;
    context: string;
  };
  scheduleTitle: string;
  schedule: ScheduleEntry[];
  infoTitle: string;
  infoCards: InfoCard[];
  tipsTitle: string;
  tipsCards: InfoCard[];
  footer: {
    monogram: string;
    date: string;
  };
  rsvp: RsvpStrings;
};

export const languageLabels: Record<Lang, string> = {
  en: 'English',
  es: 'Español',
  bg: 'Български'
};

export const translations: Record<Lang, Translation> = {
  en: {
    meta: {
      title: 'Our Wedding',
      dateLocation: 'July 24, 2025 • Novi Sad, Serbia'
    },
    nav: {
      home: 'Home',
      info: 'Details',
      rsvp: 'RSVP'
    },
    hero: {
      names: 'Viktoria & Imanol',
      subtitle: '28 March 2025 • Brussels, Belgium',
      context: '<p>After almost 10 years of selfies, we have decided to tie the knot.</p><p>As is our style, we are throwing a marriage shindig to celebrate the affair and we would love for you to be there with us.</p><p>Consider yourself formally invited!</p>'
    },
    scheduleTitle: 'Schedule',
    schedule: [
      {
        subtitle: 'The Formal Bit',
        time: 'Saturday, 28 March, 2025 • 11:30-13:00',
        title: "Maison Communale d'Ixelles",
        details: 'Place Eugène Flagey 18, 1050 Ixelles, Brussels',
        description: 'We have a marriage appointment at the Commune d’Ixelles and you are welcome to join us for this! While we are unsure how exactly it happens, we expect to declare our undying love and sign some papers. Woop!'
      },
      {
        subtitle: "The Fun Part",
        time: 'Saturday, 28 March, 2025 • 13:30-20:00',
        title: "Pompette",
        details: 'Chausee d\'Ixelles 181, 1050 Ixelles, Belgium',
        description: 'Going with a Spanish vibe, we\'ll have some lunch and spend the rest of the day "tardeo" syle. What does this mean: open bar, coffees, cocktail happy hour and a nice merienda around 18:00 to keep us going into the night.'
      },
      {
        subtitle: "Into the night",
        time: 'Saturday, 28 March, 2025 • 20:00-Late',
        title: "Somewhere in Brussels",
        details: '',
        description: 'While we have booked Pompette until 1AM, there is no specific plan for the evening and we will see where the night takes us! Feel free to join us for afters, wherever that may be.'
      }
    ],
    infoTitle: 'Practical Information',
    infoCards: [
      {
        title: 'Travel & Stay',
        body: [
          'For the ones traveling from afar (or not so afar), let us know if you need any help on these two items.',
          'In short: we recommend flying to Zaventem and staying between Place Fernand Coq, Place Flagey and Place du Châtelain. Or go to the European Quarter if you crave that corporate vibe.'
        ]
      },
      {
        title: 'Dress Code',
        body: [
          'Nothing specific, ours is a casual celebration.',
          'Be yourself and be comfortable, this is what matters to us.'
        ]
      },
      {
        title: 'Music',
        body: [
          'We are building the greatest playlist of all time and we would love for you to contribute.',
          'Follow this link and feel free to add your favorite tunes: LINK'
        ]
      }
    ],
    tipsTitle: 'Tips & Ideas',
    tipsCards: [
      {
        title: 'Food & coffee',
        body: [
          'For people new and old to Brussels, here is a list of places to eat and drink we have accumulated over the years:',
          'Food: LINK',
          'Coffee & Sweets: LINK'
        ]
      },
      {
        title: 'Things to do',
        body: [
          'If its your first time in Brussels, go enjoy the Grand Place.',
          'If it is not, go enjoy Maroles and the flea market.',
          'Either way, go and enjoy a good belgian beer!',
          'Let us know if you need personalized tips and we will happily provide.' 
        ]
      },
      {
        title: 'Contacts',
        body: [
          'Imanol +32 456 35 61 28 • Viktoria +32 456 32 49 67',
          'Questions: imanolviki@gmail.com'
        ]
      }
    ],
    footer: {
      monogram: 'V & I',
      date: '28 March 2025 • Brussels, Belgium'
    },
    rsvp: {
      title: 'RSVP',
      intro: 'We would be grateful if you could confirm by the 15th of February if you can make it.',
      fields: {
        names: 'Your name(s)',
        email: 'Email',
        attendance: 'Will you attend?',
        guests: 'How many are attending?',
        diet: 'Dietary notes',
        song: 'Song request (optional)',
        message: 'Anything else?'
      },
      placeholders: {
        names: 'Viktoria & Imanol',
        email: 'you@example.com',
        diet: 'Allergies, vegetarian/vegan preferences, etc.',
        song: "We'll do our best to have it played.",
        message: 'Travel details, plus-one names, kids, or questions.'
      },
      attendanceOptions: {
        yes: 'Joyfully accept',
        no: 'Regretfully decline'
      },
      submit: 'Send RSVP',
      status: {
        sending: 'Sending your RSVP…',
        success: 'Thank you! We received your RSVP.',
        error: 'Something went wrong. Please try again or email us.'
      }
    }
  },
  es: {
    meta: {
      title: 'Nuestra boda',
      dateLocation: '24 de julio de 2025 • Novi Sad, Serbia'
    },
    nav: {
      home: 'Inicio',
      info: 'Detalles',
      rsvp: 'Confirmar'
    },
    hero: {
      names: 'Viktoria & Imanol',
      subtitle: '24 de julio de 2025 • Novi Sad, Serbia',
      context: '<p>Compartimos este día con alegría.</p><p>Aquí tienes el programa para que sepas qué evento viene después.</p>'
    },
    scheduleTitle: 'Programa',
    schedule: [
      {
        subtitle: 'Brindis con el novio',
        time: 'Domingo, 24 de julio de 2025 • 12:00–14:00',
        title: 'Casa del novio',
        details: 'Golabova 15, Inđija',
        description: 'Comenzamos con un brindis ligero junto al novio, perfecto para saludar a los invitados que llegan temprano.'
      },
      {
        subtitle: 'Encuentro de invitados',
        time: 'Domingo, 24 de julio de 2025 • 15:00–16:15',
        title: 'Casa de la novia',
        details: 'Šime Milutinovića Sarajlije 19, Novi Sad',
        description: 'Café, dulces y charlas para que familias y amigos se reencuentren antes de la ceremonia.'
      },
      {
        subtitle: 'Ceremonia en la iglesia',
        time: 'Domingo, 24 de julio de 2025 • 17:00',
        title: 'Iglesia Nikolaevska',
        details: 'Nikolaevska Porta, Novi Sad',
        description: 'Nuestra ceremonia oficial se celebra con música suave; luego caminamos juntos hacia el salón.'
      },
      {
        subtitle: 'Celebración',
        time: '18:00–01:00',
        title: 'Salón Lipov Gaj',
        details: 'BB Nova 1, Novi Sad',
        badge: 'Recepción • Ceremonia • Fiesta',
        description: 'Cena, brindis y baile bajo las luces del salón hasta entrada la madrugada.'
      }
    ],
    infoTitle: 'Información práctica',
    infoCards: [
      {
        title: 'Viaje',
        body: [
          'Aeropuertos: Belgrado Nikola Tesla (BEG) o Timișoara (TSR).',
          'A Novi Sad: 1 h en coche desde Belgrado; ~1,5 h en shuttle o tren.',
          'Moverse: taxis y Bolt disponibles; trayectos cortos.'
        ]
      },
      {
        title: 'Alojamiento',
        body: [
          'Centro histórico: hoteles Leopold I, Garni Arta, Prezident.',
          'Junto al río: Sheraton y Hotel Pupin cerca de Petrovaradin.',
          'Reserva pronto: julio es temporada alta; así podrás ir andando.'
        ]
      },
      {
        title: 'Código de vestimenta',
        body: [
          'Elegante de verano; ceremonia interior y recepción con terraza exterior.',
          'Superficies aptas para tacones salvo un pequeño tramo empedrado.'
        ]
      },
      {
        title: 'Regalos',
        body: [
          'Su presencia es el mejor regalo.',
          'Una nota manuscrita o un poema favorito nos haría muy felices.'
        ]
      }
    ],
    tipsTitle: 'Consejos e ideas',
    tipsCards: [
      {
        title: 'Comida y café',
        body: ['Carigradski Drum para brunch, Petrus para cenar, Trčika para café al atardecer.']
      },
      {
        title: 'Qué hacer',
        body: ['Paseo por el Danubio al atardecer, fortaleza Petrovaradin, plaza Trg Slobode.']
      },
      {
        title: 'Contactos',
        body: [
          'Anfitriones: Isidora +381 60 000 000 • Danilo +381 60 111 111',
          'Dudas: rsvp@ourday.example'
        ]
      }
    ],
    footer: {
      monogram: 'I & D',
      date: '24 de julio de 2025 • Novi Sad, Serbia'
    },
    rsvp: {
      title: 'Confirmación',
      intro: 'Por favor confirma antes del 15 de junio para organizar asientos, menú y transporte.',
      fields: {
        names: 'Nombre(s)',
        email: 'Correo',
        attendance: '¿Asistirás?',
        guests: '¿Cuántas personas vienen?',
        diet: 'Restricciones o preferencias',
        song: 'Canción para pedir (opcional)',
        message: '¿Algo más?'
      },
      placeholders: {
        names: 'Viktoria & Imanol',
        email: 'tu@correo.com',
        diet: 'Alergias, vegetariano/vegano, etc.',
        song: 'Se la pediremos a la banda.',
        message: 'Detalles de viaje, acompañantes, niños o preguntas.'
      },
      attendanceOptions: {
        yes: 'Con mucho gusto',
        no: 'Con pena no podré'
      },
      submit: 'Enviar',
      status: {
        sending: 'Enviando tu confirmación…',
        success: '¡Gracias! Recibimos tu respuesta.',
        error: 'Algo salió mal. Intenta de nuevo o escríbenos.'
      }
    }
  },
  bg: {
    meta: {
      title: 'Нашата сватба',
      dateLocation: '24 юли 2025 г. • Нови Сад, Сърбия'
    },
    nav: {
      home: 'Начало',
      info: 'Детайли',
      rsvp: 'Потвърждение'
    },
    hero: {
      names: 'Viktoria & Imanol',
      subtitle: '24 юли 2025 г. • Нови Сад, Сърбия',
      context: '<p>Очакваме с нетърпение да празнуваме заедно.</p><p>Ето програмата, за да се ориентирате в деня.</p>'
    },
    scheduleTitle: 'Програма',
    schedule: [
      {
        subtitle: 'Наздравица с младоженеца',
        time: 'Неделя, 24 юли 2025 • 12:00–14:00',
        title: 'Къщата на младоженеца',
        details: 'Golabova 15, Inđija',
        description: 'Наздравица и леки хапки край дома на младоженеца, за да посрещнем гостите.'
      },
      {
        subtitle: 'Посрещане на гостите',
        time: 'Неделя, 24 юли 2025 • 15:00–16:15',
        title: 'Къщата на булката',
        details: 'Šime Milutinovića Sarajlije 19, Novi Sad',
        description: 'Кафе, сладкиши и приятни разговори преди церемонията.'
      },
      {
        subtitle: 'Църковен обред',
        time: 'Неделя, 24 юли 2025 • 17:00',
        title: 'Църква Nikolaevska',
        details: 'Nikolaevska Porta, Novi Sad',
        description: 'Официалната церемония с хор и свещи, след което ще се разходим до залата.'
      },
      {
        subtitle: 'Празненство',
        time: '18:00–01:00',
        title: 'Зала Lipov Gaj',
        details: 'BB Nova 1, Novi Sad',
        badge: 'Прием • Ритуал • Парти',
        description: 'Вечеря, музика и танци в Lipov Gaj до сутринта.'
      }
    ],
    infoTitle: 'Практична информация',
    infoCards: [
      {
        title: 'Пътуване',
        body: [
          'Летища: Белград Nikola Tesla (BEG) или Тимишоара (TSR).',
          'До Нови Сад: ~1 ч. с кола от Белград; ~1,5 ч. с шатъл или влак.',
          'Придвижване: таксита и Bolt; разстоянията са кратки.'
        ]
      },
      {
        title: 'Настаняване',
        body: [
          'Център: хотели Leopold I, Garni Arta, Prezident.',
          'До реката: Sheraton и Hotel Pupin близо до Petrovaradin.',
          'Резервирайте рано: юли е натоварен – удобно за ходене пеша.'
        ]
      },
      {
        title: 'Дрескод',
        body: [
          'Елегантно лятно облекло; церемонията е вътре, приемът – с тераса.',
          'Подходящо за токчета, освен кратък калдъръмен участък.'
        ]
      },
      {
        title: 'Подаръци',
        body: [
          'Вашето присъствие е най-ценният подарък.',
          'Бележка на ръка или любимо стихотворение ще ни зарадва.'
        ]
      }
    ],
    tipsTitle: 'Идеи и препоръки',
    tipsCards: [
      {
        title: 'Храна и кафе',
        body: ['Carigradski Drum за брънч, Petrus за вечеря, Trčika за залез с кафе.']
      },
      {
        title: 'Какво да правите',
        body: ['Разходка по Дунав на залез, крепост Petrovaradin, площад Trg Slobode.']
      },
      {
        title: 'Контакти',
        body: [
          'Домакини: Isidora +381 60 000 000 • Danilo +381 60 111 111',
          'Въпроси: rsvp@ourday.example'
        ]
      }
    ],
    footer: {
      monogram: 'I & D',
      date: '24 юли 2025 г. • Нови Сад, Сърбия'
    },
    rsvp: {
      title: 'Потвърждение',
      intro: 'Моля, потвърдете до 15 юни, за да планираме местата, менюто и транспорта.',
      fields: {
        names: 'Вашето име/имена',
        email: 'Имейл',
        attendance: 'Ще присъствате ли?',
        guests: 'Колко души идват?',
        diet: 'Диетични бележки',
        song: 'Песен по желание (по избор)',
        message: 'Още нещо?'
      },
      placeholders: {
        names: 'Viktoria & Imanol',
        email: 'vy@example.com',
        diet: 'Алергии, предпочитания (вегетариан, веган и др.)',
        song: 'Ще я поискаме от бандата.',
        message: 'Пътуване, придружители, деца или въпроси.'
      },
      attendanceOptions: {
        yes: 'С радост приемам',
        no: 'За съжаление няма да успея'
      },
      submit: 'Изпрати',
      status: {
        sending: 'Изпращаме вашето потвърждение…',
        success: 'Благодарим! Получихме отговора ви.',
        error: 'Нещо се обърка. Опитайте пак или ни пишете.'
      }
    }
  }
};
