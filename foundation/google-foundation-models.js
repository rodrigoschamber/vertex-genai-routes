import { GoogleAuth } from "google-auth-library";
import fs from "fs";
import path from "path";
import { URL } from "url";

export async function sendRequest(options) {
  const auth = new GoogleAuth({
    scopes: "https://www.googleapis.com/auth/cloud-platform",
  });
  const client = await auth.getClient();
  const accessToken = (await client.getAccessToken()).token;
  const data = { instances: options.instances, parameters: options.parameters };

  const response = await fetch(
    `https://${options.apiEndpoint}/v1/projects/${options.projectId}/locations/us-central1/publishers/google/models/${options.modelId}:predict`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

export async function writeResponseLocally(params, response) {
  const dirname = new URL(".", import.meta.url).pathname;
  const outputDir = path.join(dirname, "../output_files");

  fs.writeFile(
    path.join(outputDir, `file${Date.now()}.json`),
    JSON.stringify(response),
    function (err) {
      if (err) return console.log(err);
      console.log(`Writing to file${Date.now()}.json`);
    }
  );
}
