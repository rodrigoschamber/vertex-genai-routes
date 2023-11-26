# AI HACKATON 2023

This tool was develop to be able to manage and generate detailed travel routes and its interest points. This solution is based on NodeJS server to make requests to Google Vertex AI API. It was selected the paLM 2 for Text as generative AI language model. The text-bison@001 model was chosen to generate the results because it is the most costly-effective solution. Prompting engineering techniques were also used to improve the responses.

## VERTEX-GENAI-ROUTES - How to install the environment:

### STEP 1: Google Cloud Config

#### 1 - Open the [Google Cloud Console](https://console.cloud.google.com) and create an account if you don't have one.
#### 2 - Select an existing project or create a new one.
#### 3 - Be sure you have a configured payment method enabled. It is a best practice to define a budget.
#### 4 - Enable the Vertex AI API.

### STEP 2: Install the gcloud CLI

#### 1 - Access https://cloud.google.com/sdk/docs/install and follow the instructions according to you operational system.

### Step 3: Google Cloud Login

#### 1 - Login using the terminal:

Run the command and authenticate using you google account:

#### `gcloud auth application-default login`

### STEP 4: Download and install the vertex-genai-routes repository

#### 1 - This project was developed usign node v20.10.0. Be sure you have installed the correct version or a compatible one instead.

#### 2- Execute the following commands:

#### `git clone https://github.com/rodrigoschamber/vertex-genai-routes.git`

#### `cd vertex-genai-routes`

#### `npm install`

#### `node index.js`

### STEP 5: Generate your routes:

To generate a route you need to navigate to the server route passing some parameters according to the example below:

#### `http://localhost:{port}/tour/{lang}/{city}/{duration}`

The parameter {port} is set up in the .env file and the default is 5000. To change tp another one, create a .env file as shown in the .env.example file and fill it in with your choice. There are available only two languages: "pt-br" and "eng": Portuguese (BR) and English. If you try to define another language the algorithm will select the "eng" as default.

Follow some URL examples:

Three-days route at Ouro Preto - MG Brazil with results in portuguese (br):

#### `http://localhost:5001/tour/pt-br/ouro+preto-MG/3`


Five-days route at Fortaleza - CE Brazil with results in english (en):

#### `http://localhost:5001/tour/en/fortaleza-Brazil/5`

Have fun!