// load modules
const express = require("express");
require("dotenv").config();
const OpenAI = require("openai");

// express framework setup
const app = express();
app.use(express.json());

// openai key setup
const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
});

// listen for post request at /testAPI, run function
app.post("/testAPI", async (req, res) => {
    try {
        // creating a completion 
        const response = await openai.completions.create({
            model: "gpt-3.5-turbo-instruct",    // Open AI model
            prompt: `What steps are in the harmonic minor scale?`,
            max_tokens: 64,
            //temperature: 0,
            //top_p: 1.0,
            //frequency_penaty: 0.0,
            //presence_penalty: 0.0,
            //stop: ["\n"],
        });

        return res.status(200).json({
            success: true,
            data: response.choices[0].text
        });
    } catch (error) {
        if (error instanceof OpenAI.APIError) {
            console.error(error.status);  // e.g. 401
            console.error(error.message); // e.g. The authentication token you passed was invalid...
            console.error(error.code);  // e.g. 'invalid_api_key'
            console.error(error.type);  // e.g. 'invalid_request_error'
          } else {
            // Non-API error
            console.log(error);
          }
    }
});


const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));