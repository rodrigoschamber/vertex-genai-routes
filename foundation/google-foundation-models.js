import { GoogleAuth } from "google-auth-library";
import fs from "fs";
import path from "path";

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
