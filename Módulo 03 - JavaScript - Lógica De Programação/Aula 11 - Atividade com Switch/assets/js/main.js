// const h1 = document.querySelector('.container h1');
// const date = new Date();

// function getdiaEmText (diaSemana){
// let diaSemanaText

// switch (diaSemana) {
//     case 0:
//         diaSemanaText ='Domingo';
//         return diaSemanaText
//     case 1:
//         diaSemanaText ='Segunda-feira';
//         return diaSemanaText
//     case 2:
//         diaSemanaText ='Terça-feira';
//         return diaSemanaText
//     case 3:
//         diaSemanaText ='Quarta-feira';
//         return diaSemanaText
//     case 4:
//         diaSemanaText ='Quinta-feira';
//         return diaSemanaText
//     case 5:
//         diaSemanaText ='Sexta-feira';
//         return diaSemanaText
//     case 6:
//         diaSemanaText ='Sabádo';
//         return diaSemanaText
//     default:
//         break;
//  }
// }

// function getdiaDoMesEmText (diaDoMes){
//     let diaDoMesText
    
//     switch (diaDoMes) {
//         case 0:
//             diaDoMesText ='Janeiro';
//             return diaDoMesText
//         case 1:
//             diaDoMesText ='fevereiro';
//             return diaDoMesText
//         case 2:
//             diaDoMesText ='Março';
//             return diaDoMesText
//         case 3:
//             diaDoMesText ='Abril';
//             return diaDoMesText
//         case 4:
//             diaDoMesText ='Maio';
//             return diaDoMesText
//         case 5:
//             diaDoMesText ='Junho';
//             return diaDoMesText
//         case 6:
//             diaDoMesText='Julho';
//             return diaDoMesText
//         case 7:
//             diaDoMesText='Agosto';
//             return diaDoMesText
//         case 8:
//             diaDoMesText='Setembro';
//             return diaDoMesText
//         case 9:
//             diaDoMesText='Outubro';
//             return diaDoMesText
//         case 10:
//             diaDoMesText='Novembro';
//             return diaDoMesText
//         case 11:
//             diaDoMesText='Dezembro';
//             return diaDoMesText
//         default:
//             break;
//      }
//     }

// h1.innerHTML = `${getdiaEmText(date.getDay())}, ${date.getDate()} de ${getdiaDoMesEmText(date.getMonth())} de ${date.getFullYear()} </br>
//                 ${date.getHours()}:${date.getMinutes()}`;

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR' , {dateStyle: 'full' ,timeStyle:'short'});
