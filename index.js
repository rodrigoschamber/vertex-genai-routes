const {
  sendRequest,
  writeResponseLocally,
} = require("./utils/google-foundation-models");
const params = {
  apiEndpoint: "us-central1-aiplatform.googleapis.com",
  projectId: "ai-2023-405518",
  modelId: "text-bison",
  instances: [
    { content: "crie um roteiro turistico de tres dias para ouro preto mg" },
  ],
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
