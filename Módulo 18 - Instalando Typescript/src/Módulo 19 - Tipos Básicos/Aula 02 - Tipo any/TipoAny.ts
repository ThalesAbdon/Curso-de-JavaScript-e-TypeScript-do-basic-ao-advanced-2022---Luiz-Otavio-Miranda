// UTILIZAR any apenas em último caso!!!!
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('OLÁ'));
console.log(showMessage(1));
