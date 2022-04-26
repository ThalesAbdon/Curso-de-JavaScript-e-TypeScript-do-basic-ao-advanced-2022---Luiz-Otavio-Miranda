/*
&& -> false && true -> false
|| -> true || false -> true

FALSY
*false
0
'' "" ``
null/undefined
NaN
*/
console.log('Lucas' && true && 'Joana');
console.log('Lucas' && true && "" && 'Joana');

function falaOi(){
    return 'Oi';
}

let vaiExecutar = false;
console.log(vaiExecutar && falaOi());
vaiExecutar = 'Felipe'
console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'Vai aparecer isso!' || true);
const corUser = null;
const corPadrao = corUser || 'red';
console.log(corPadrao)

const a = 0;
const b = null;
const c = 'false';//isso é verdadeiro pois isso é um valor (String)
const d = false;
const e = NaN;
console.log(a || b || c || d || e);
