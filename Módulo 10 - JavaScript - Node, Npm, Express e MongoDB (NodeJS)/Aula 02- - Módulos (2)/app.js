// Acessar pastas/arquivos para frente use apenas 1: .
// Acessar pastas/arquivos para trás use 2: ..
// const Cachorro = require("./B/C/D/mod2");

// const cachorrinho = new Cachorro("Dog");
// cachorrinho.latir();

const path = require("path");
console.log(path.resolve(__dirname, "..", "..", "arquivos", "imagens"));
