// src/data/onThisDay.ts
export interface OnThisDayEvent {
  day: number;
  month: number; // 0–11 (Jan=0, Dec=11)
  year?: number; // optional
  fact: string;
}

export const onThisDayEvents: OnThisDayEvent[] = [
  // === January ===
  { day: 1, month: 0, fact: "🎉 New Year's Day celebrated worldwide." },
  { day: 1, month: 0, year: 2002, fact: "The Euro became the official currency in 12 EU countries." },
  { day: 20, month: 0, year: 2009, fact: "🇺🇸 Barack Obama was inaugurated as the 44th President of the U.S." },
  { day: 26, month: 0, fact: "🇮🇳 Republic Day: India adopted its constitution." },

  // === February ===
  { day: 1, month: 1, year: 2021, fact: "🇦🇪 Dubai hosted Expo 2020, showcasing innovation and culture." },
  { day: 8, month: 1, fact: "📚 International Literacy Day is observed worldwide." }, // example filler, keep consistent
  { day: 12, month: 1, year: 1965, fact: "First Palio Festival in Siena, Italy." },
  { day: 14, month: 1, fact: "🌞 Makar Sankranti / Pongal is celebrated in India." },
  { day: 14, month: 1, year: 1876, fact: "Alexander Graham Bell applied for the telephone patent." },
  { day: 14, month: 1, fact: "💖 Valentine's Day celebrated worldwide as a day of love and friendship." },

  // === March ===
  { day: 7, month: 2, fact: "🏥 World Health Day is observed globally, led by the WHO." },
  { day: 8, month: 2, fact: "♀️ International Women’s Day is celebrated worldwide." },
  { day: 20, month: 2, fact: "🕌 Start of Ramadan (date varies, based on lunar calendar)." },
  { day: 21, month: 2, fact: "🌸 Nowruz (Persian New Year) is celebrated across the Middle East and Central Asia." },
  { day: 21, month: 2, fact: "International Day for the Elimination of Racial Discrimination observed." },
  { day: 22, month: 2, fact: "💧 World Water Day raises awareness on freshwater resources." },

  // === April ===
  { day: 1, month: 3, fact: "🌍 Easter Sunday (date varies, spring celebration in Christianity)." },

  // === May ===
  { day: 1, month: 4, fact: "💼 International Workers' Day (Labour Day) celebrated worldwide." },
  { day: 8, month: 4, year: 1945, fact: "🇬🇧 Victory in Europe Day (VE Day) marked the end of WWII in Europe." },
  { day: 9, month: 4, fact: "🇷🇺 Victory Day is celebrated in Russia and Eastern Europe (WWII 1945)." },
  { day: 22, month: 4, fact: "🌱 Earth Day is celebrated globally to support environmental protection." },

  // === June ===
  { day: 4, month: 5, year: 1989, fact: "Pro-democracy protests in Tiananmen Square ended in Beijing." },
  { day: 6, month: 5, year: 1953, fact: "🇬🇧 Queen Elizabeth II was crowned in Westminster Abbey." },
  { day: 20, month: 5, year: 1969, fact: "Neil Armstrong and Buzz Aldrin walked on the Moon." },
  { day: 21, month: 5, fact: "🧘 International Yoga Day is celebrated worldwide." },

  // === July ===
  { day: 4, month: 6, year: 1776, fact: "🇺🇸 The United States Declaration of Independence was adopted." },
  { day: 16, month: 6, year: 1969, fact: "🚀 Apollo 11 launched from Kennedy Space Center, carrying astronauts to the Moon." },

  // === August ===
  { day: 6, month: 7, year: 1945, fact: "☢️ An atomic bomb was dropped on Hiroshima, Japan." },
  { day: 9, month: 7, year: 2011, fact: "South Sudan declared independence, becoming the newest country in the world." },
  { day: 15, month: 7, year: 1947, fact: "🇮🇳 India gained independence from British rule." },

  // === September ===
  { day: 2, month: 8, fact: "🇮🇳 Gandhi Jayanti celebrates Mahatma Gandhi’s birthday." },
  { day: 23, month: 8, year: 1889, fact: "🎮 Nintendo was founded in Kyoto, Japan." },
  { day: 27, month: 8, fact: "🌍 World Tourism Day is celebrated globally by the UN." },
  { day: 29, month: 8, fact: "☕ International Coffee Day is celebrated worldwide." },
  { day: 30, month: 8, fact: "📖 International Translation Day honors translators worldwide." },

 // === October ===
{ day: 1, month: 9, year: 1949, fact: "🇨🇳 The People’s Republic of China was founded." },
{ day: 2, month: 9, year: 1869, fact: "🇮🇳 Mahatma Gandhi was born in India." },
{ day: 3, month: 9, year: 1990, fact: "🇩🇪 Germany was officially reunified." },
{ day: 4, month: 9, year: 1957, fact: "🚀 Sputnik 1, the first artificial satellite, was launched by the USSR." },
{ day: 5, month: 9, fact: "🍎 World Teachers’ Day is celebrated today!" },
{ day: 6, month: 9, year: 1927, fact: "🎬 The first “talkie” film *The Jazz Singer* premiered in New York." },
{ day: 7, month: 9, year: 1959, fact: "🌑 Luna 3, a Soviet spacecraft, took the first photos of the far side of the Moon." },
{ day: 8, month: 9, year: 1871, fact: "🔥 The Great Chicago Fire started." },
{ day: 9, month: 9, year: 1876, fact: "📞 Alexander Graham Bell made the first two-way long-distance telephone call." },
{ day: 10, month: 9, year: 1964, fact: "🏅 Tokyo hosted the first Olympic Games held in Asia." },
{ day: 11, month: 9, year: 1968, fact: "🚀 NASA launched Apollo 7, the first crewed Apollo mission." },
{ day: 12, month: 9, year: 1492, fact: "⛵ Christopher Columbus reached the Americas." },
{ day: 13, month: 9, year: 2010, fact: "⛏️ 33 Chilean miners were rescued after being trapped underground for 69 days." },
{ day: 14, month: 9, year: 1947, fact: "✈️ Chuck Yeager became the first person to break the sound barrier." },
{ day: 15, month: 9, year: 1990, fact: "🏅 Mikhail Gorbachev was awarded the Nobel Peace Prize." },
{ day: 16, month: 9, year: 1846, fact: "💉 The first successful public demonstration of anesthesia took place." },
{ day: 17, month: 9, year: 1931, fact: "🔫 Al Capone was convicted of tax evasion." },
{ day: 18, month: 9, year: 1922, fact: "📻 The British Broadcasting Company (BBC) was founded." },
{ day: 19, month: 9, year: 1987, fact: "📉 Stock markets around the world crashed on “Black Monday.”" },
{ day: 20, month: 9, year: 1973, fact: "🎭 Sydney Opera House was officially opened." },
{ day: 21, month: 9, year: 1879, fact: "💡 Thomas Edison invented a workable electric light bulb." },
{ day: 22, month: 9, year: 1797, fact: "🪂 The first recorded parachute jump was made by André-Jacques Garnerin in Paris." },
{ day: 23, month: 9, year: 2001, fact: "🎧 Apple released the first iPod." },
{ day: 24, month: 9, year: 1945, fact: "🌍 The United Nations officially came into existence." },
{ day: 25, month: 9, year: 1881, fact: "🎨 Pablo Picasso, the Spanish painter, was born." },
{ day: 26, month: 9, year: 1955, fact: "⚽ The first European Cup (now UEFA Champions League) match was played." },
{ day: 27, month: 9, year: 1904, fact: "🚇 The first subway line opened in New York City." },
{ day: 28, month: 9, year: 1886, fact: "🗽 The Statue of Liberty was dedicated in New York Harbor." },
{ day: 29, month: 9, year: 1929, fact: "📉 The Wall Street Crash marked the beginning of the Great Depression." },
{ day: 30, month: 9, year: 1938, fact: "📻 Orson Welles’ radio broadcast of *War of the Worlds* caused panic in the US." },
{ day: 31, month: 9, fact: "🎃 Halloween is celebrated today!" },


  // === November ===
  { day: 9, month: 10, year: 1989, fact: "The Berlin Wall fell, marking the end of the Cold War era." },
  { day: 24, month: 10, year: 1945, fact: "🌍 The United Nations officially came into existence." },

  // === December ===
  { day: 2, month: 11, fact: "🇦🇪 UAE National Day celebrates the union of the Emirates in 1971." },
  { day: 10, month: 11, year: 1948, fact: "🌍 The Universal Declaration of Human Rights was adopted by the UN." },
  { day: 25, month: 11, fact: "🎄 Christmas is celebrated worldwide." },
  { day: 31, month: 11, fact: "🎆 New Year's Eve celebrated worldwide with fireworks." }
];
export function getTodayEvents(): OnThisDayEvent[] {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  return onThisDayEvents.filter(e => e.day === day && e.month === month);
}