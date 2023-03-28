// Escreva uma função que receba um número e retorne:
// Fizz = divisivel por 3
// Buzz = divisível por 5
// FizzBuzz = divisível por 3 e por 5
// O próprio número se NÃO for divisível por 3 ou/e 5
// Checa se o número é realmente um número, caso não seja retorna NaN
// números de 0 a 100.

function FizzBuzz(numero) {
  if (typeof numero !== "number") return NaN;
  if ((numero % 3 === 0) & (numero % 5 === 0)) {
    return "FizzBuzz";
  } else if (numero % 3 === 0) {
    return "Fizz";
  } else if (numero % 5 === 0) {
    return "Buzz";
  }

  return numero;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, FizzBuzz(i));
}
