import express from "express";

const app = express();

app.post('/sign-up', (req, res) => {
  res.send("Post sign-up funcionando...");
});

app.post('/tweets', (req, res) => {
  res.send("Post tweets funcionando...");
});

app.get('/tweets', (req, res) => {
  res.send("Get tweets funcionando...");
});

app.listen(5000)