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
        //const response = await openai.createCompletion()


        return res.status(200).json({
            message: "Working",
        });
    } catch (error) {}
});


const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));