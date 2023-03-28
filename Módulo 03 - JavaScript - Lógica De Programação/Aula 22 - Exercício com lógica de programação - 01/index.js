// função que retornar o maior valor entre 2 números ou avisa se eles são iguais!
function max(x, y) {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    return "são iguais";
  }
}

const max2 = (x, y) => {
  if (x === y) {
    return "são iguais";
  }
  return x > y ? x : y;
};

const maior = max(20, 20);
console.log(maior);

console.log(max2(30, 20));

// operador ternário
// const x = 10;
// const y = 20;
// console.log(x > y ? x : y);
