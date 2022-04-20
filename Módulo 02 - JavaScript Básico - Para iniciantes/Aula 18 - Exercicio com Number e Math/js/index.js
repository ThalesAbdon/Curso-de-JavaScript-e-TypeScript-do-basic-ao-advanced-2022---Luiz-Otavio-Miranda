const numero = Number(prompt('Digite um número: '));
const numberTitle = document.getElementById('number-title');
const textDiv = document.getElementById('text');

numberTitle.innerHTML = numero;
textDiv.innerHTML = `<p> Raiz quadrada: ${Math.sqrt(numero)}</p> 
                     <p> ${numero} é inteiro: ${Number.isInteger(numero)}</p> 
                     <p> ${numero} é NaN: ${Number.isNaN(numero)}</p> 
                     <p> ${numero} arredondado para baixo: ${Math.floor(numero)}</p> 
                     <p> ${numero} arredondado para cima: ${Math.ceil(numero)}</p> 
                     <p> ${numero} com duas casas decimais: ${numero.toFixed(2)}</p> `