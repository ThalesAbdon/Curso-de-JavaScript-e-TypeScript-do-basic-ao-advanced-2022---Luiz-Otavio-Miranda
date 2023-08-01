function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject(false);
      return;
    }
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

const promises = [
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 2", 600),
  esperaAi("Promise 3", 1000),
];

Promise.race(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (err) {
    console.log(err);
  });
