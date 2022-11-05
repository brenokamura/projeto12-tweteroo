import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
  const { username, avatar } = req.body;
  const userAlreadyExists = users.find((user) => user.username === user);

  if (!username) {
    res.send("Preencha o campo Nome do usuário!");
    return;
  } else {
  } if (!avatar) {
    res.send("Insira o link do seu avatar!");
    return;
  }else{ 
  }if (userAlreadyExists) {
    res.send("Usuário já exite! Por favor, insira outro usuário!");
    return;
  }
  users.push(req.body);
  console.log(users)
  res.send("Cadastro realizado com sucesso!");
});



app.post('/tweets', (req, res) => {
  const { username, tweet } = req.body;
  const  {avatar} = users.find(user => user.username === username)

  if (!username) {
    res.send("O campo Nome do usuário deve estar preenchido!");
    return;
  } else {
  } if (!tweet) {
    res.send("Preencha o campo Tweet!");
    return;
  }

  tweets.push({ username, tweet, avatar });
  console.log(tweets);
  res.send("Tweet postado com sucesso!");
});

app.get('/tweets', (req, res) => {
  const lastTenTweets = tweets.slice(-10);
  res.send(lastTenTweets);
});

app.listen(5000)