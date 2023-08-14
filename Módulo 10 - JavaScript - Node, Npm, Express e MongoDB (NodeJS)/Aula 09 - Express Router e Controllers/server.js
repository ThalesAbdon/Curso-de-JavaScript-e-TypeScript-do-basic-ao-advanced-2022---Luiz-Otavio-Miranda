const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3007, () => {
  console.log("Acessar http://localhost:3007");
  console.log("SERVIDOR EXECUTANDO NA PORTA 3007");
});
