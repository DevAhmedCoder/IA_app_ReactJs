const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require("openai");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const openai = new OpenAI({
  apiKey: process.env.CHATBOT_KEY,
});
app.post("/chat", async (req, res) => {
  const { prompt } = req.body;
  console.log({ prompt });

  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: prompt,
    max_tokens: 2048,
  });
  console.log({ response: res });

  res.send(completion.choices[0].text);
});

const port = 5554;
app.listen(port, (error) => {
  error
    ? console.log(`Server listening on port ${port}`, error)
    : console.log(`http://localhost:${port}`);
});
