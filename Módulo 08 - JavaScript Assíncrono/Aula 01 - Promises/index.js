function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitASecond(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("BAD VALUE");
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

waitASecond("Conexão com o Banco de Dados", aleatorio(1, 8))
  .then((resposta) => {
    console.log(resposta);
    return waitASecond("Buscando algum id", aleatorio(1, 5));
  })
  .then((resposta) => {
    console.log(resposta);
    return waitASecond(21313, aleatorio(1, 2));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Exibindo os dados na tela");
  })
  .catch((e) => {
    console.log("Error:", e);
  });
