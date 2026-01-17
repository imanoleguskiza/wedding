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
          'We want everyone to have fun and have their music taste represented.',
          'Follow this link and feel free to add your favorite bangers for the tardeo: LINK'
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
      rsvp: 'RSVP' 
    }, 
    hero: { 
      names: 'Viktoria & Imanol', 
      subtitle: '28 de marzo de 2025 • Bruselas, Bélgica', 
      context: '<p>Después de casi 10 años de selfies, hemos decidido dar el gran paso.</p><p>Como es nuestro estilo, organizamos un guateque de boda para celebrarlo y nos encantaría que estuvieras allí con nosotros.</p><p>¡Considérate formalmente invitado!</p>' 
    }, 
    scheduleTitle: 'Programa', 
    schedule: [ 
      { 
        subtitle: 'La parte formal', 
        time: 'Sábado, 28 de marzo de 2025 • 11:30-13:00', 
        title: "Maison Communale d'Ixelles", 
        details: 'Place Eugène Flagey 18, 1050 Ixelles, Bruselas', 
        description: 'Tenemos cita para casarnos en la comuna de Ixelles y ¡estás más que invitado a acompañarnos! Aunque no sabemos exactamente cómo será, esperamos declarar nuestro amor eterno y firmar algunos papeles. ¡Yuju!' 
      }, 
      { 
        subtitle: 'La parte divertida', 
        time: 'Sábado, 28 de marzo de 2025 • 13:30-20:00', 
        title: 'Pompette', 
        details: 'Chausee d\'Ixelles 181, 1050 Ixelles, Bélgica', 
        description: 'El plan es comida y tardeo con barra libre, cafés, happy hour de cócteles y una buena merienda alrededor de las 18:00 para seguir hasta la noche.' 
      }, 
      { 
        subtitle: 'Hasta entrada la noche', 
        time: 'Sábado, 28 de marzo de 2025 • 20:00-hasta tarde', 
        title: 'En algún lugar de Bruselas', 
        details: '', 
        description: 'Aunque tenemos reservado Pompette hasta la 1:00, no hay un plan concreto para la noche y veremos adónde nos lleva. ¡Siéntete libre de unirte a nosotros para el after, donde sea que termine siendo!' 
      } 
    ], 
    infoTitle: 'Información práctica', 
    infoCards: [ 
      { 
        title: 'Viaje y alojamiento', 
        body: [ 
          'Para quienes viajen desde lejos (o no tan lejos), avísanos si necesitas ayuda con estos dos puntos.', 
          'En resumen: recomendamos volar a Zaventem y alojarse entre Place Fernand Coq, Place Flagey y Place du Châtelain. O ir al Barrio Europeo si te apetece ese ambiente corporativo.' 
        ] 
      }, 
      { 
        title: 'Código de vestimenta', 
        body: [ 
          'Nada específico, es una celebración informal.', 
          'Sé tú mismo y siéntete cómodo, eso es lo que más nos importa.' 
        ] 
      }, 
      { 
        title: 'Música', 
        body: [ 
          'Queremos que todo el mundo se divierta y que sus gustos musicales estén representados.', 
          'Sigue este enlace y añade tus temazos favoritos para el tardeo: LINK' 
        ] 
      } 
    ], 
    tipsTitle: 'Consejos e ideas', 
    tipsCards: [ 
      { 
        title: 'Comida y café', 
        body: [ 
          'Para quienes conocen Bruselas desde hace poco o desde hace mucho, aquí teneis una lista de sitios para comer y beber que hemos ido recopilando a lo largo de los años:', 
          'Comida: LINK', 
          'Café y dulces: LINK' 
        ] 
      }, 
      { 
        title: 'Qué hacer', 
        body: [ 
          'Si es tu primera vez en Bruselas, ve a disfrutar de la Grand Place.', 
          'Si no lo es, date una vuelta por Marolles y el mercadillo.', 
          'En cualquier caso, ¡disfruta de una buena cerveza belga!', 
          'Avísanos si necesitas recomendaciones personalizadas y estaremos encantados de ayudarte.' 
        ] 
      }, 
      { 
        title: 'Contactos', 
        body: [ 
          'Imanol +32 456 35 61 28 • Viktoria +32 456 32 49 67', 
          'Preguntas: imanolviki@gmail.com' 
        ] 
      } 
    ], 
    footer: { 
      monogram: 'V & I', 
      date: '28 de marzo de 2025 • Bruselas, Bélgica' 
    }, 
    rsvp: { 
      title: 'RSVP', 
      intro: 'Te agradeceríamos que confirmaras antes del 15 de febrero si podrás asistir.', 
      fields: { 
        names: 'Tu nombre(s)', 
        email: 'Correo electrónico', 
        attendance: '¿Asistirás?', 
        guests: '¿Cuántas personas asistirán?', 
        diet: 'Notas sobre alimentación', 
        song: 'Petición de canción (opcional)', 
        message: '¿Algo más?' 
      }, 
      placeholders: { 
        names: 'Viktoria & Imanol', 
        email: 'you@example.com', 
        diet: 'Alergias, preferencias vegetarianas/veganas, etc.', 
        song: 'Haremos todo lo posible por que suene.', 
        message: 'Detalles de viaje, nombres de acompañantes, niños o preguntas.' 
      }, 
      attendanceOptions: { 
        yes: 'Acepto con alegría', 
        no: 'Declino con pesar' 
      }, 
      submit: 'Enviar RSVP', 
      status: { 
        sending: 'Enviando tu RSVP…', 
        success: '¡Gracias! Hemos recibido tu RSVP.', 
        error: 'Algo salió mal. Por favor, inténtalo de nuevo o escríbenos.' 
      } 
    } 
  },
  bg: {
    meta: {
      title: 'Нашата сватба',
      dateLocation: '28-ми март 2026 • Брюксел, Белгия'
    },
    nav: {
      home: 'Начало',
      info: 'Детайли',
      rsvp: 'Потвърждение'
    },
    hero: {
      names: 'Виктория & Иманол',
      subtitle: '28 март 2025 • Брюксел, Белгия',
      context: '<p>След почти 10 години селфита решихме да подпишем. Йей!</p><p>Пък така и така ще се наконтим за подписа, с кеф ще си организираме едно партЕ, та да полеем голямата крачка. А колкото повече прекрасни хора дойдат да поливат с нас, толкоз по-плодородно ще да е. В превод: мноооого ще се радваме да дойдете.</p><p>Считайте се официално поканени!</p>'
    },
    scheduleTitle: 'Програма',
    schedule: [
      {
        subtitle: 'Официалната част',
        time: 'Събота, 28 март 2025 • 11:30–13:00',
        title: "Maison Communale d'Ixelles",
        details: 'Place Eugène Flagey 18, 1050 Ixelles, Брюксел',
        description: 'Имаме час за сключване на брак в общината на Иксел и сте добре дошли да се присъедините! Макар да не сме напълно сигурни как точно протича, очакваме да заявим вечната си любов пред белгийската администрация и да подпишем няколко документа. Ура!'
      },
      {
        subtitle: 'Забавната част',
        time: 'Събота, 28 март 2025 • 13:30–20:00',
        title: 'Pompette',
        details: "Chaussée d'Ixelles 181, 1050 Ixelles, Белгия",
        description: 'По испански тертип, ще обядваме и ще прекараме остатъка от деня в стил „tardeo“. Какво означава това: отворен бар, кафенца, коктейли и приятна мериенда (следобедна закуска) около 18:00, за да подхраним енергийните нива.'
      },
      {
        subtitle: 'До късно през нощта',
        time: 'Събота, 28 март 2025 • 20:00–късно',
        title: 'Някъде в Брюксел',
        details: '',
        description: 'Макар да сме резервирали Pompette до 1 сутринта, нямаме конкретен план за вечерта и ще видим накъде ще ни отведе нощта! Заповядайте с нас и след това, където и да се окажем.'
      }
    ],
    infoTitle: 'Практическа информация',
    infoCards: [
      {
        title: 'Пътуване и настаняване',
        body: [
          'За тези, които пътуват отдалеч (или не чак толкова), пишете ни, ако имате нужда от помощ по тези два въпроса.',
          'Накратко: препоръчваме полет до Завентем и настаняване между Place Fernand Coq, Place Flagey и Place du Châtelain. Или изберете Европейския квартал, ако търсите по-корпоративна атмосфера.'
        ]
      },
      {
        title: 'Дрескод',
        body: [
          'Нищо конкретно — празненството е неофициално.',
          'Бъдете себе си и се чувствайте удобно — това е най-важното за нас.'
        ]
      },
      {
        title: 'Музика',
        body: [
          'Искаме всички да се забавляват и да чуят музика, която обичат.',
          'Последвайте този линк и добавете любимите си парчета за tardeo-то: LINK'
        ]
      }
    ],
    tipsTitle: 'Съвети и идеи',
    tipsCards: [
      {
        title: 'Храна и кафе',
        body: [
          'За нови и стари познавачи на Брюксел — ето списък с места за хапване и напитки, които сме събрали през годините:',
          'Храна: LINK',
          'Кафе и сладкиши: LINK'
        ]
      },
      {
        title: 'Какво да правите',
        body: [
          'Ако ви е за първи път в Брюксел — посетете Grand Place.',
          'Ако не — разходете се из Marolles и битпазара.',
          'И в двата случая — насладете се на хубава белгийска бира!',
          'Пишете ни, ако имате нужда от персонализирани съвети — с радост ще помогнем.'
        ]
      },
      {
        title: 'Контакти',
        body: [
          'Imanol +32 456 35 61 28 • Viktoria +32 456 32 49 67',
          'Въпроси: imanolviki@gmail.com'
        ]
      }
    ],
    footer: {
      monogram: 'V & I',
      date: '28 март 2025 • Брюксел, Белгия'
    },
    rsvp: {
      title: 'Потвърждение',
      intro: 'Ще сме благодарни, ако потвърдите до 15 февруари дали ще присъствате.',
      fields: {
        names: 'Вашето име/имена',
        email: 'Имейл',
        attendance: 'Ще присъствате ли?',
        guests: 'Колко души ще присъстват?',
        diet: 'Хранителни изисквания',
        song: 'Заявка за песен (по избор)',
        message: 'Нещо друго?'
      },
      placeholders: {
        names: 'Виктория & Иманол',
        email: 'you@example.com',
        diet: 'Алергии, вегетариански/веган предпочитания и др.',
        song: 'Ще направим всичко възможно да я пуснем.',
        message: 'Детайли за пътуване, имена на придружители, деца или въпроси.'
      },
      attendanceOptions: {
        yes: 'С радост приемам',
        no: 'Съжалявам, няма да мога'
      },
      submit: 'Изпрати потвърждение',
      status: {
        sending: 'Изпращаме потвърждението…',
        success: 'Благодарим! Получихме вашето потвърждение.',
        error: 'Възникна грешка. Моля, опитайте отново или ни пишете по имейл.'
      }
    }
  }
};
