function* geradora1() {
  yield "valor 1";
  yield "valor 2";
  yield "valor 3";
}

function* geradora2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}
function* geradora4() {
  yield* geradora3();
  yield 4;
  yield 5;
}

function* geradora5() {
  yield function () {
    console.log("Vim do yield1 da função geradora 5");
  };
  yield function () {
    console.log("Vim do yield2 da função geradora 5");
  };
}

console.log("GERADORA 1");
const g1 = geradora1();
for (let valor of g1) {
  console.log(valor);
}

console.log("GERADORA 4");
const g4 = geradora4();
for (let valor4 of g4) {
  console.log(valor4);
}

console.log("GERADORA 5");
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();

console.log("GERADORA 2");
let limitG2 = 0;
const g2 = geradora2();
for (let valor2 of g2) {
  if (limitG2 > 6) {
    return;
  }
  limitG2++;
  console.log(valor2);
}
