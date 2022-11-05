import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
  const { username, avatar } = req.body;
  
  if (!username) {
    res.status(400).send("Preencha o campo Nome do usuário!");
    return;
  } else {
  } if (!avatar) {
    res.status(400).send("Insira o link do seu avatar!");
    return;
  }

  const isUser = users.find((user) => user.username === user);
  if (isUser) {
    res.send("Usuário já exite! Por favor, insira outro usuário!");
    return;
  }
  users.push({username, avatar});
  console.log(users)
  res.status(201).send("Cadastro realizado com sucesso!");
});



app.post('/tweets', (req, res) => {
  const { username, tweet } = req.body;
  const  {avatar} = users.find(user => user.username === username)

  if (!username) {
    res.status(400).send("O campo Nome do usuário deve estar preenchido!");
    return;
  } else {
  } if (!tweet) {
    res.status(400).send("Preencha o campo Tweet!");
    return;
  }

  tweets.push({ username, tweet, avatar });
  console.log(tweets);
  res.status(201).send("Tweet postado com sucesso!");
});

app.get('/tweets', (req, res) => {
  const lastTenTweets = tweets.slice(-10);
  res.send(lastTenTweets);
});

app.listen(5000)