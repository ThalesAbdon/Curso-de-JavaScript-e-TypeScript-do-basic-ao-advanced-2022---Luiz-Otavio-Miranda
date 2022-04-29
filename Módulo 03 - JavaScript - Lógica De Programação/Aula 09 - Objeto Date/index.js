//                     ano/mês/dia/hora/minuto/segundo/milisegundos
const data = new Date(2019,3,20,15,12,23,999);
console.log(data.toString());

const dataUsandoDateString = new Date('2021-02-11 16:40:02' )
console.log(dataUsandoDateString.toString());

console.log('Dia', dataUsandoDateString.getDate());
console.log('Mês', dataUsandoDateString.getMonth());
console.log('Ano', dataUsandoDateString.getFullYear());
console.log('Hora', dataUsandoDateString.getHours());
console.log('Minutos', dataUsandoDateString.getMinutes());
console.log('Segundos', dataUsandoDateString.getSeconds());
console.log('Milisegundos', dataUsandoDateString.getMilliseconds());
console.log('Dia da semana', dataUsandoDateString.getDay());
console.log('Dia', dataUsandoDateString.toString());

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
const dia = zeroAEsquerda(data.getDate());
const mes = zeroAEsquerda(data.getMonth() + 1);
const ano = zeroAEsquerda(data.getFullYear());
const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const segundos = zeroAEsquerda(data.getSeconds());
return `${dia}/${mes}/${ano} ${hora}:${min}:${segundos}`
}
const dataBrasil = formataData(dataUsandoDateString)
console.log(dataBrasil)