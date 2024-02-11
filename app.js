const express = require("express");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(express.json());

//const configuration = new Configuration({
//    apiKey: process.env.OPEN_AI_KEY,
//});

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));