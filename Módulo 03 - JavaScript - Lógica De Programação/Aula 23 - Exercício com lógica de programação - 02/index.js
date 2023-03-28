//Escrevar uma função que recebe altura e largura de uma imagem e indica se ela está no modo paisagem.

function ePaisagem(largura, altura) {
  return largura > altura
    ? "está no modo paisagem"
    : "NÃO está no modo paisagem";
}
//Arrow Function

const ePaisagemArrow = (largura, altura) => largura > altura;

console.log(ePaisagem(1000, 1500));
console.log(ePaisagem(1920, 1080));
