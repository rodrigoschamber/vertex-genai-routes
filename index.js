import express from "express";
import { sendRequest, writeResponseLocally } from "./foundation/google-foundation-models.js";
import { promptModelBasic } from "./prompts/promp-models.js";

const app = express();

app.get("/tour/:lang/:city/:duration", async (req, res) => {
  const { lang, city, duration } = req.params;
  const params = {
    apiEndpoint: "us-central1-aiplatform.googleapis.com",
    projectId: "ai-2023-405518",
    modelId: "text-bison@001",
    instances: [{ content: promptModelBasic(lang, city, duration) }],
    parameters: {
      temperature: 0.2,
      maxOutputTokens: 1024,
      topP: 0.8,
      topK: 40,
    },
  };
  sendRequest(params)
    .then((response) => {
      writeResponseLocally(params, response);
      res.send(`
        <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>AI HACKATON 2023</title>
              <style>
                body {
                  background-image: url('https://i.ibb.co/FgK3qmy/background.jpg');
                  background-size: cover;
                  background-position: center;
                  background-attachment: fixed;
                  margin: 0;
                  padding: 0;
                  height: 100vh;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  font-weigth: 700;
                  color: #393646;
                }
                h1 {
                  background-color: #3498db;
                  color: #ffffff;
                }
                h2 {
                  background-color: #3498db;
                  color: #ffffff;
                }
                pre {
                  background-color: #3498db;
                  color: #ffffff;
                }
              </style>
            </head>
            <body>
              <h1>AI HACKATON 2023</h1>
              <h2> Here is your ${duration}-day tour to ${city.replace("+", " ").toUpperCase(0)}.</h2>
              <pre>${response.predictions[0].content}</pre>
            </body>
          </html>
      `);
    })
    .catch((error) => {
      console.error(error);
    });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
