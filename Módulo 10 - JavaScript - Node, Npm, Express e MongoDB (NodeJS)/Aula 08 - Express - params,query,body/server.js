const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>;
  </form>`);
});

app.get("/testes/:idUsers?", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.query);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body.nome);
});

app.listen(3007, () => {
  console.log("Acessar http://localhost:3007");
  console.log("SERVIDOR EXECUTANDO NA PORTA 3007");
});
