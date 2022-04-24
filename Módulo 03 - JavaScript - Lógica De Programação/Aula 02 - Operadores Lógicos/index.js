/*
Operadores Lógicos:
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

console.log(true && true); //retorna verdadeiro
console.log(true || false);//retorna true

const usuario = 'Giovana'
const senha  = '123456'

const Login = usuario === 'Giovana' && senha === '123456';
console.log(Login)
console.log(!!!false)