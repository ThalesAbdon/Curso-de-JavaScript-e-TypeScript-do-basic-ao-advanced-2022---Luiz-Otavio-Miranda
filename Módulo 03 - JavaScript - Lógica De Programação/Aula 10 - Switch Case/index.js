const data = new Date();
let diaSemana = data.getDay();
let diaSemanaText;
switch (diaSemana){
    case 0:
        diaSemanaText = 'Domingo';
        break;
    case 1:
        diaSemanaText = 'Segunda';
        break;
    case 2:
        diaSemanaText = 'Terça';
        break;
    case 3:
        diaSemanaText = 'Quarta';
        break;
    case 4:
        diaSemanaText = 'Quinta';
        break;
    case 5:
        diaSemanaText = 'Sexta';
        break;
    case 6:
        diaSemanaText = 'Sabádo';
        break;
    default:
        diaSemanaText = '';
}

console.log(diaSemanaText)