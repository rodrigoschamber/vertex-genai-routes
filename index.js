const {
  sendRequest,
  writeResponseLocally,
} = require("./utils/google-foundation-models");

const promptModel = () => {
  return `Sou um viajante sem experiência e preciso gerenciar roteiros de viagens contendo os principais pontos de interesse culturais e gastronômicos. Para isto preciso de um roteiro detalhado contendo hotéis, pousadas, museus e restaurantes. Sou amante da natureza, por isso é preciso incluir parques naturais, cachoeiras e mirantes. Meu destino é Ouro Preto - MG`;
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
    console.log(response);
    writeResponseLocally(params, response);
  })
  .catch((error) => {
    console.error(error);
  });
