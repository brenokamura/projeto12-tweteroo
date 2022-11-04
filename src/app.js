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
    res.send("Preencha o campo Nome do usuário!");
    return;
  }else{
  }if (!avatar) {
    res.send("Insira o link do seu avatar!");
    return;
  }

  users.push(req.body);
  res.send("Cadastro realizado com sucesso!");
});



app.post('/tweets', (req, res) => {
  res.send("Post tweets funcionando...");
});

app.get('/tweets', (req, res) => {
  res.send("Get tweets funcionando...");
});

app.listen(5000)