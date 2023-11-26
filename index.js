const {
  sendRequest,
  writeResponseLocally,
} = require("./utils/google-foundation-models");

const city = `Ouro Preto-MG`;
const duration = `3`;

const promptModel = () => {
  return `Sou um viajante sem experiência e preciso gerenciar roteiros de viagens contendo os principais pontos de interesse culturais e gastronômicos. Para isto preciso de um roteiro detalhado contendo hotéis, pousadas, museus e restaurantes. Sou amante da natureza, por isso é preciso incluir parques naturais, cachoeiras e mirantes. Meu destino é ${city} e gostaria de um roteiro de ${duration} dias.`;
};

const params = {
  apiEndpoint: "us-central1-aiplatform.googleapis.com",
  projectId: "ai-2023-405518",
  modelId: "text-bison@001",
  instances: [{ content: promptModel() }],
  parameters: { temperature: 0.2, maxOutputTokens: 256, topP: 0.8, topK: 40 },
};
sendRequest(params)
  .then((response) => {
    console.log("Follow your route: \n", response.predictions[0].content);
    writeResponseLocally(params, response.predictions[0]);
  })
  .catch((error) => {
    console.error(error);
  });
