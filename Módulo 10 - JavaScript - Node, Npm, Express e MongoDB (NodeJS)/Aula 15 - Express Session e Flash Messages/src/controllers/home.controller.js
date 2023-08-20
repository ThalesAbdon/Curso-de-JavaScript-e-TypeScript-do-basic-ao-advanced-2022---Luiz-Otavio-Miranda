const HomeModel = require("../models/HomeModel");

HomeModel.create({
  title: "A DANI JOGA DE FIDDLE E TEEMO",
  description: "É ISSO MESMO! A BETINA E´FOFA E GORDINHA BB",
})
  .then((dados) => console.log(dados))
  .catch((e) => console.log(e));

exports.paginaInicial = (req, res) => {
  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
