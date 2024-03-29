//Funções de callback
//São funções que são executadas quando uma ação é finalizada.
function rand(min = 1000, max = 5000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function () {
    console.log("função f1 executada com sucesso");
    if (callback) {
      callback();
    }
  }, rand());
}
function f2(callback) {
  setTimeout(function () {
    console.log("função f2 executada com sucesso");
    if (callback) {
      callback();
    }
  }, rand());
}
function f3(callback) {
  setTimeout(function () {
    console.log("função f3 executada com sucesso");
    if (callback) {
      callback();
    }
  }, rand());
}

//callback hell
// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log("Olá Mundo");
//     });
//   });
// });

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log("Olá Mundo");
}
