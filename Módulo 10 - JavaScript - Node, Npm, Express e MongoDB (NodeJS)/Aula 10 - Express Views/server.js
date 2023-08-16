const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");
app.use(routes);

app.listen(3007, () => {
  console.log("Acessar http://localhost:3007");
  console.log("SERVIDOR EXECUTANDO NA PORTA 3007");
});
