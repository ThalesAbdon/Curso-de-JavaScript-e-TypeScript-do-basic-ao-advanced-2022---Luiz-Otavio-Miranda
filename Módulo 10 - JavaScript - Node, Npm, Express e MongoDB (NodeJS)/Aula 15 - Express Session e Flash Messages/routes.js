const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/home.controller");
const contatoController = require("./src/controllers/contato.controller");
// function myMiddleware(req, res, next) {
//   req.session = { nome: "Thales", sobrenome: "Abdon" };
//   console.log();
//   console.log("Passe no middleware!");
//   console.log();
//   next();
// }

// route.get(
//   "/",
//   myMiddleware,
//   homeController.paginaInicial,
//   function (req, res, next) {
//     console.log();
//     console.log(`Olha o que tem na req.session.nome ${req.session.nome}`);
//   }
// );
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);
route.get("/contato", contatoController.paginaInicial);
module.exports = route;
