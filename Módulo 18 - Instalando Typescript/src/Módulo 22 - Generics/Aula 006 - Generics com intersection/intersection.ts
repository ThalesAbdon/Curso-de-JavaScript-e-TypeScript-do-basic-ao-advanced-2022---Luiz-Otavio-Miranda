export function unirObjetos<O1, O2>(objeto1: O1, objeto2: O2): O1 & O2 {
  return { ...objeto1, ...objeto2 };
}

const objeto1 = { chave1: 'valor1' };
const objeto2 = { chave2: 'valor2' };
const uniao = unirObjetos(objeto1, objeto2);
console.log(uniao);
