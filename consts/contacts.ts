export interface ScheduleRow {
  days: string;
  time: string;
}

export interface ContactRestaurant {
  id: string;
  name: string;
  city: string;
  address: string;
  note?: string;
  schedule: ScheduleRow[];
  phone: string;
  phoneHref: string;
  telegram: string;
  mapSrc: string;
}

// Порядок и данные сверены 1:1 с продом meat-coin.vercel.app/contacts:
// Steak & Terrace (Москва) идёт первым и раскрыт по умолчанию.
export const CONTACT_RESTAURANTS: ContactRestaurant[] = [
  {
    id: "steak-terrace",
    name: "Steak & Terrace",
    city: "Москва",
    address: "Смоленская площадь • 5",
    note: "Бесплатный крытый паркинг для гостей",
    schedule: [{ days: "Ежедневно", time: "12:00–00:00" }],
    phone: "+7 (499) 116-60-93",
    phoneHref: "tel:84991166093",
    telegram: "https://t.me/Meat_coin_bot",
    mapSrc:
      "https://yandex.ru/map-widget/v1/?um=constructor%3A8fa274675addcb7c5913109f940af88d15084baefad65478edc23090113f6f82&source=constructor",
  },
  {
    id: "country-club",
    name: "Country Club",
    city: "Комарово",
    address: "Ленинградская область • пос. Комарово • Приморское шоссе • 466",
    schedule: [
      { days: "ПН–ЧТ", time: "12:00–23:00" },
      { days: "ПТ", time: "12:00–01:00" },
      { days: "СБ–ВС", time: "11:00–01:00" },
    ],
    phone: "+7 (812) 240-66-66",
    phoneHref: "tel:88122406666",
    telegram: "https://t.me/Meat_coin_bot",
    mapSrc:
      "https://yandex.ru/map-widget/v1/?um=constructor%3Ae6ea5694b4a72a3a6ae86566661606e092d9645a8e9e5d9d68ec41cc4d4f7baf&source=constructor",
  },
  {
    id: "butcher-grill",
    name: "Butcher&Grill",
    city: "Санкт-Петербург",
    address: "ул. Рубинштейна • 4",
    schedule: [{ days: "Ежедневно", time: "12:00–00:00" }],
    phone: "+7 (812) 210 90 98",
    phoneHref: "tel:88122109098",
    telegram: "https://t.me/Meat_coin_bot",
    mapSrc:
      "https://yandex.ru/map-widget/v1/?um=constructor%3Ac8b46d347eec8cfb176c2c54e53bc8873db449d1f71a3a283cf40d17b197b4f6&source=constructor",
  },
];
