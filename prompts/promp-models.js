export const promptModelBasic = (lang, city, duration) => {
  if (lang === "pt-br") {
    return `Sou um viajante sem experiência e preciso gerenciar roteiros de viagens contendo os principais pontos de interesse culturais e gastronômicos. Para isto preciso de um roteiro detalhado contendo hotéis, pousadas, museus e restaurantes. Sou amante da natureza, por isso é preciso incluir parques naturais, cachoeiras e mirantes. Meu destino é ${city} e gostaria de um roteiro de ${duration} dias.`;
  } else {
    return `I am an inexperienced traveler and need to manage travel itineraries containing the main cultural and gastronomic points of interest. For this I need a detailed itinerary containing hotels, inns, museums and restaurants. I'm a nature lover, so it's necessary to include natural parks, waterfalls and viewpoints. My destination is ${city} and I would like an itinerary of ${duration} days.`;
  }
};
