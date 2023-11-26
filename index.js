import express from "express";
import { sendRequest } from "./foundation/google-foundation-models.js";
import { promptModelBasic } from "./prompts/promp-models.js";

const app = express();

app.get("/tour/:lang/:city/:duration", async (req, res) => {
  const { lang, city, duration } = req.params;
  const params = {
    apiEndpoint: "us-central1-aiplatform.googleapis.com",
    projectId: "ai-2023-405518",
    modelId: "text-bison@001",
    instances: [{ content: promptModelBasic(lang, city, duration) }],
    parameters: { temperature: 0.2, maxOutputTokens: 256, topP: 0.8, topK: 40 },
  };
  sendRequest(params)
    .then((response) => {
      res.json(response.predictions[0].content);
    })
    .catch((error) => {
      console.error(error);
    });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
