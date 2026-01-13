export const languages = ['en', 'es', 'bg'] as const;
export type Lang = (typeof languages)[number];

type ScheduleEntry = {
  subtitle: string;
  time: string;
  title: string;
  details: string;
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
      context: 'We hope this overview helps you plan the day—here is the schedule so you know what to expect next.'
    },
    scheduleTitle: 'Schedule',
    schedule: [
      {
        subtitle: 'Wedding ceremony',
        time: 'Saturday, 28 March, 2025 • HOUR TBD',
        title: "Maison Communale d'Ixelles",
        details: 'Place Eugène Flagey 18, 1050 Ixelles, Brussels'
      },
      {
        subtitle: "Cocktail & Reception",
        time: 'Saturday, 28 March, 2025 • HOUR TBD',
        title: "Pompette",
        details: 'Chausee d\'Ixelles 181, 1050 Ixelles, Belgium'
      }
    ],
    infoTitle: 'Practical Information',
    infoCards: [
      {
        title: 'Travel',
        body: [
          'Airport: Belgrade Nikola Tesla (BEG) or Timișoara (TSR).',
          'To Novi Sad: 1h by car from Belgrade; ~1.5h by shuttle or train.',
          'Getting around: taxis and Bolt are available; rides are short.'
        ]
      },
      {
        title: 'Stay',
        body: [
          'Historic center: Hotels Leopold I, Garni Arta, Prezident.',
          'By the river: Sheraton & Hotel Pupin near Petrovaradin.',
          'Book early: July is busy—reserve soon for walking distance.'
        ]
      },
      {
        title: 'Dress Code',
        body: [
          'Elegant summer attire; ceremony indoors, terrace for reception.',
          'Heels-friendly surfaces except a short cobblestone stretch.'
        ]
      },
      {
        title: 'Gifts',
        body: [
          'Your presence is the greatest gift.',
          'A handwritten note or favorite poem would mean a lot to us.'
        ]
      }
    ],
    tipsTitle: 'Tips & Ideas',
    tipsCards: [
      {
        title: 'Food & coffee',
        body: ['Carigradski Drum for brunch, Petrus for dinner, Trčika for sunset coffee.']
      },
      {
        title: 'Things to do',
        body: ['Walk Danube quay at golden hour, explore Petrovaradin fortress, visit Trg Slobode.']
      },
      {
        title: 'Contacts',
        body: [
          'Hosts: Isidora +381 60 000 000 • Danilo +381 60 111 111',
          'Questions: rsvp@ourday.example'
        ]
      }
    ],
    footer: {
      monogram: 'V & I',
      date: '28 March 2025 • Brussels, Belgium'
    },
    rsvp: {
      title: 'RSVP',
      intro: 'Please confirm by the 31st of January so we can plan ahead.',
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
      context: 'Compartimos este día con alegría; aquí tienes el programa para que sepas qué evento viene después.'
    },
    scheduleTitle: 'Programa',
    schedule: [
      {
        subtitle: 'Brindis con el novio',
        time: 'Domingo, 24 de julio de 2025 • 12:00–14:00',
        title: 'Casa del novio',
        details: 'Golabova 15, Inđija'
      },
      {
        subtitle: 'Encuentro de invitados',
        time: 'Domingo, 24 de julio de 2025 • 15:00–16:15',
        title: 'Casa de la novia',
        details: 'Šime Milutinovića Sarajlije 19, Novi Sad'
      },
      {
        subtitle: 'Ceremonia en la iglesia',
        time: 'Domingo, 24 de julio de 2025 • 17:00',
        title: 'Iglesia Nikolaevska',
        details: 'Nikolaevska Porta, Novi Sad'
      },
      {
        subtitle: 'Celebración',
        time: '18:00–01:00',
        title: 'Salón Lipov Gaj',
        details: 'BB Nova 1, Novi Sad',
        badge: 'Recepción • Ceremonia • Fiesta'
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
      context: 'Очакваме с нетърпение да празнуваме заедно; ето програмата, за да се ориентирате в деня.'
    },
    scheduleTitle: 'Програма',
    schedule: [
      {
        subtitle: 'Наздравица с младоженеца',
        time: 'Неделя, 24 юли 2025 • 12:00–14:00',
        title: 'Къщата на младоженеца',
        details: 'Golabova 15, Inđija'
      },
      {
        subtitle: 'Посрещане на гостите',
        time: 'Неделя, 24 юли 2025 • 15:00–16:15',
        title: 'Къщата на булката',
        details: 'Šime Milutinovića Sarajlije 19, Novi Sad'
      },
      {
        subtitle: 'Църковен обред',
        time: 'Неделя, 24 юли 2025 • 17:00',
        title: 'Църква Nikolaevska',
        details: 'Nikolaevska Porta, Novi Sad'
      },
      {
        subtitle: 'Празненство',
        time: '18:00–01:00',
        title: 'Зала Lipov Gaj',
        details: 'BB Nova 1, Novi Sad',
        badge: 'Прием • Ритуал • Парти'
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
