export interface Dacha {
  id: number;
  title: string;
  description: string;
  area: number; // площадь участка (соток)
  houseArea: number; // площадь дома (кв.м)
  distance: number; // расстояние от КАД (км)
  direction: string; // направление
  year: number; // год постройки
  material: string; // материал дома
  price: number; // цена в рублях
  image: string;
}

export const dachas: Dacha[] = [
  {
    id: 1,
    title: "Дача у озера в Приозерском районе",
    description: "Уютный деревянный дом 60 кв.м на участке 12 соток. Рядом озеро, сосновый бор. Баня, колодец, электричество.",
    area: 12,
    houseArea: 60,
    distance: 95,
    direction: "Приозерское",
    year: 2005,
    material: "Брус",
    price: 3200000,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Каркасный дом в Всеволожске",
    description: "Современный каркасный дом 85 кв.м в СНТ. Газ, вода, канализация центральные. До ж/д станции 10 минут пешком.",
    area: 8,
    houseArea: 85,
    distance: 25,
    direction: "Всеволожское",
    year: 2018,
    material: "Каркас",
    price: 5800000,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Старая дача в Гатчинском районе",
    description: "Щитовой дом 40 кв.м, участок 6 соток. Требуется ремонт. Электричество, летний водопровод. Тихое место.",
    area: 6,
    houseArea: 40,
    distance: 45,
    direction: "Гатчинское",
    year: 1985,
    material: "Щитовой",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Кирпичный коттедж в Выборгском направлении",
    description: "Двухэтажный кирпичный дом 150 кв.м на участке 15 соток. Камин, гараж, ландшафтный дизайн. Все коммуникации.",
    area: 15,
    houseArea: 150,
    distance: 70,
    direction: "Выборгское",
    year: 2012,
    material: "Кирпич",
    price: 8500000,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Садовый домик в Тосно",
    description: "Небольшой садовый домик 30 кв.м на участке 4 сотки. Печное отопление, свет. Подходит для сезонного проживания.",
    area: 4,
    houseArea: 30,
    distance: 55,
    direction: "Московское",
    year: 1990,
    material: "Бревно",
    price: 800000,
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Дом из газобетона в Кировске",
    description: "Тёплый дом из газобетона 110 кв.м. Газовое отопление, скважина, септик. Участок 10 соток с плодовыми деревьями.",
    area: 10,
    houseArea: 110,
    distance: 40,
    direction: "Московское",
    year: 2015,
    material: "Газобетон",
    price: 4500000,
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    title: "Финский домик в Сосново",
    description: "Утеплённый финский домик 70 кв.м на берегу реки. Сауна, терраса, причал. Участок 8 соток, лес вокруг.",
    area: 8,
    houseArea: 70,
    distance: 65,
    direction: "Приозерское",
    year: 2008,
    material: "Брус",
    price: 4100000,
    image: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    title: "Дача с баней в Ломоносове",
    description: "Деревянный дом 55 кв.м + баня. Участок 7 соток в охраняемом СНТ. Рядом Финский залив. Дорога круглый год.",
    area: 7,
    houseArea: 55,
    distance: 40,
    direction: "Петергофское",
    year: 1998,
    material: "Брус",
    price: 3800000,
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400&h=300&fit=crop"
  },
  {
    id: 9,
    title: "Участок с фундаментом в Луге",
    description: "Участок 12 соток с фундаментом под дом. Подведены электричество и газ. Рядом сосновый лес, река.",
    area: 12,
    houseArea: 0,
    distance: 130,
    direction: "Киевское",
    year: 0,
    material: "Участок",
    price: 650000,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
  },
  {
    id: 10,
    title: "Двухэтажный дом в Токсово",
    description: "Просторный дом 180 кв.м из клеёного бруса. Тёплый пол, камин, два санузла. Участок 10 соток, ИЖС.",
    area: 10,
    houseArea: 180,
    distance: 20,
    direction: "Приозерское",
    year: 2019,
    material: "Клеёный брус",
    price: 12000000,
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=400&h=300&fit=crop"
  },
  {
    id: 11,
    title: "Зимняя дача в Рощино",
    description: "Утеплённый дом 90 кв.м для круглогодичного проживания. Магистральный газ, центральная вода. Участок 8 соток.",
    area: 8,
    houseArea: 90,
    distance: 55,
    direction: "Выборгское",
    year: 2010,
    material: "Каркас",
    price: 5200000,
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=400&h=300&fit=crop"
  },
  {
    id: 12,
    title: "Дача в Павловске",
    description: "Кирпичный дом 120 кв.м в черте города. Все коммуникации центральные. До парка 15 минут пешком. ИЖС.",
    area: 6,
    houseArea: 120,
    distance: 30,
    direction: "Московское",
    year: 2001,
    material: "Кирпич",
    price: 7200000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop"
  },
  {
    id: 13,
    title: "Летний домик в Сестрорецке",
    description: "Компактный дом 45 кв.м для летнего отдыха. До Финского залива 500 метров. Участок 4 сотки. Свет, вода скважина.",
    area: 4,
    houseArea: 45,
    distance: 35,
    direction: "Приморское",
    year: 1995,
    material: "Брус",
    price: 4800000,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=400&h=300&fit=crop"
  },
  {
    id: 14,
    title: "Большой участок с домом в Кингисеппе",
    description: "Дом 75 кв.м на участке 20 соток. Колодец, баня, гараж. Плодовый сад. Тихая деревня, хорошие соседи.",
    area: 20,
    houseArea: 75,
    distance: 110,
    direction: "Таллинское",
    year: 1992,
    material: "Бревно",
    price: 2100000,
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=400&h=300&fit=crop"
  },
  {
    id: 15,
    title: "Модерн-дача в Зеленогорске",
    description: "Дизайнерский дом 130 кв.м в скандинавском стиле. Панорамные окна, терраса, ландшафт. До моря 300 м.",
    area: 7,
    houseArea: 130,
    distance: 45,
    direction: "Приморское",
    year: 2020,
    material: "Каркас",
    price: 15000000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
  },
  {
    id: 16,
    title: "Блочный дом в Сланцевом карьере",
    description: "Дом из шлакоблока 65 кв.м. Участок 8 соток. Свет, летний водопровод. Рядом лес, грибные места.",
    area: 8,
    houseArea: 65,
    distance: 100,
    direction: "Киевское",
    year: 1988,
    material: "Шлакоблок",
    price: 1500000,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop"
  },
  {
    id: 17,
    title: "Дача-ферма в Волосово",
    description: "Дом 100 кв.м + хозпостройки. Участок 25 соток. Скважина, септик. Можно держать животных. ИЖС.",
    area: 25,
    houseArea: 100,
    distance: 60,
    direction: "Киевское",
    year: 2003,
    material: "Газобетон",
    price: 3500000,
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=400&h=300&fit=crop"
  },
  {
    id: 18,
    title: "Таунхаус в Янино",
    description: "Секция таунхауса 95 кв.м с участком 3 сотки. Все городские коммуникации. 5 минут от метро. Охрана.",
    area: 3,
    houseArea: 95,
    distance: 5,
    direction: "Всеволожское",
    year: 2021,
    material: "Кирпич",
    price: 8900000,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=400&h=300&fit=crop"
  },
  {
    id: 19,
    title: "Рыбацкая дача на Вуоксе",
    description: "Бревенчатый дом 50 кв.м на первой линии реки Вуокса. Причал, лодка. Отличная рыбалка. Участок 6 соток.",
    area: 6,
    houseArea: 50,
    distance: 110,
    direction: "Приозерское",
    year: 2000,
    material: "Бревно",
    price: 3900000,
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=400&h=300&fit=crop"
  },
  {
    id: 20,
    title: "Эконом-дача в Рахье",
    description: "Садовый домик 35 кв.м из СИП-панелей. Участок 5 соток. Свет, летняя вода. Автобусная остановка рядом.",
    area: 5,
    houseArea: 35,
    distance: 50,
    direction: "Приозерское",
    year: 2016,
    material: "СИП-панели",
    price: 1100000,
    image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=400&h=300&fit=crop"
  },
  {
    id: 21,
    title: "Поместье в Пушкине",
    description: "Роскошный дом 250 кв.м с бассейном. Участок 30 соток, ландшафтный дизайн, беседка, барбекю. ИЖС.",
    area: 30,
    houseArea: 250,
    distance: 25,
    direction: "Московское",
    year: 2017,
    material: "Кирпич",
    price: 22000000,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop"
  },
  {
    id: 22,
    title: "Глиняный дом в Копорье",
    description: "Эко-дом из глины и соломы 48 кв.м. Участок 15 соток, пруд, лес. Автономное электричество (солнечные панели).",
    area: 15,
    houseArea: 48,
    distance: 85,
    direction: "Киевское",
    year: 2014,
    material: "Эко-дом",
    price: 2800000,
    image: "https://images.unsplash.com/photo-1597218868981-1b68e15c0bee?w=400&h=300&fit=crop"
  },
  {
    id: 23,
    title: "Дача с видом на Ладогу",
    description: "Дом 80 кв.м на возвышенности с видом на Ладожское озеро. Участок 10 соток. Баня, беседка, мангал.",
    area: 10,
    houseArea: 80,
    distance: 80,
    direction: "Новоладожское",
    year: 2007,
    material: "Брус",
    price: 4300000,
    image: "https://images.unsplash.com/photo-1505916349660-8d91a70d0a34?w=400&h=300&fit=crop"
  },
  {
    id: 24,
    title: "Мини-дача в Мистолово",
    description: "Компактный дом 28 кв.м на участке 3 сотки. Идеален для одного-двух человек. Свет, биотуалет. Автобус рядом.",
    area: 3,
    houseArea: 28,
    distance: 35,
    direction: "Всеволожское",
    year: 2012,
    material: "Каркас",
    price: 950000,
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=400&h=300&fit=crop"
  },
  {
    id: 25,
    title: "Дом-контейнер в Медуницах",
    description: "Модный дом из морских контейнеров 60 кв.м. Минималистичный дизайн. Участок 6 соток, лес рядом. Электричество.",
    area: 6,
    houseArea: 60,
    distance: 70,
    direction: "Выборгское",
    year: 2022,
    material: "Металлоконструкция",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=300&fit=crop"
  },
  {
    id: 26,
    title: "Старинная усадьба в Рождествено",
    description: "Исторический дом 140 кв.м (1910 год). Реставрирован. Участок 20 соток с вековыми деревьями. Памятник архитектуры.",
    area: 20,
    houseArea: 140,
    distance: 65,
    direction: "Гатчинское",
    year: 1910,
    material: "Кирпич",
    price: 6500000,
    image: "https://images.unsplash.com/photo-1571115177098-24ec427204e1?w=400&h=300&fit=crop"
  },
  {
    id: 27,
    title: "Дача у горнолыжного курорта",
    description: "Дом 70 кв.м рядом с подъёмниками Игора. Участок 7 соток. Баня, терраса. Зимой — лыжи, летом — лес.",
    area: 7,
    houseArea: 70,
    distance: 45,
    direction: "Приозерское",
    year: 2011,
    material: "Брус",
    price: 4700000,
    image: "https://images.unsplash.com/photo-1519975107666-b356a5c93b20?w=400&h=300&fit=crop"
  },
  {
    id: 28,
    title: "Карельский стиль в Тарасовке",
    description: "Дом в карельском стиле 95 кв.м из лафета. Камин, тёплые полы. Участок 12 соток, сосны. Охраняемый посёлок.",
    area: 12,
    houseArea: 95,
    distance: 50,
    direction: "Выборгское",
    year: 2016,
    material: "Лафет",
    price: 6800000,
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=300&fit=crop"
  },
  {
    id: 29,
    title: "Бюджетная дача в Кикенке",
    description: "Щитовой дом 38 кв.м, требует косметического ремонта. Участок 6 соток, урожайный. Свет, колонка. Тихо.",
    area: 6,
    houseArea: 38,
    distance: 40,
    direction: "Киевское",
    year: 1982,
    material: "Щитовой",
    price: 900000,
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=400&h=300&fit=crop"
  },
  {
    id: 30,
    title: "VIP-дача на Карельском перешейке",
    description: "Элитный коттедж 300 кв.м на первой линии озера. Пирс, спа-зона, гараж на 3 авто. Участок 40 соток.",
    area: 40,
    houseArea: 300,
    distance: 90,
    direction: "Приозерское",
    year: 2019,
    material: "Кирпич",
    price: 35000000,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
  }
];

// Функция для получения случайных N дач
export function getRandomDachas(count: number): Dacha[] {
  const shuffled = [...dachas].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Форматирование цены
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
}

// Подсчёт баллов за раунд (максимум 100)
export function calculateScore(userGuess: number, actualPrice: number): number {
  const diff = Math.abs(userGuess - actualPrice);
  const ratio = diff / actualPrice;
  
  if (ratio <= 0.05) return 100; // ±5% — идеально
  if (ratio <= 0.10) return 90;  // ±10%
  if (ratio <= 0.15) return 80;  // ±15%
  if (ratio <= 0.20) return 70;  // ±20%
  if (ratio <= 0.25) return 60;  // ±25%
  if (ratio <= 0.30) return 50;  // ±30%
  if (ratio <= 0.40) return 40;  // ±40%
  if (ratio <= 0.50) return 30;  // ±50%
  if (ratio <= 0.70) return 20;  // ±70%
  if (ratio <= 1.0) return 10;   // ±100%
  return 5;
}

// Определение результата по среднему баллу
export type ResultTier = 'generous' | 'experienced' | 'getoff';

export function getResultTier(avgScore: number): ResultTier {
  if (avgScore >= 70) return 'experienced';
  if (avgScore >= 40) return 'generous';
  return 'getoff';
}

export function getResultText(tier: ResultTier): { title: string; description: string; emoji: string } {
  switch (tier) {
    case 'experienced':
      return {
        title: 'Опытный огородник',
        description: 'Вы отлично разбираетесь в дачном рынке! Близки к реальным ценам.',
        emoji: '🌱'
      };
    case 'generous':
      return {
        title: 'Щедрый дачник',
        description: 'Вы переплачиваете за недвижимость! Но зато какой участок!',
        emoji: '💰'
      };
    case 'getoff':
      return {
        title: 'Уходи с моей дачи',
        description: 'Экономный инвестор — вы знаете цену каждой копейке!',
        emoji: '🏚️'
      };
  }
}
