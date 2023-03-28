function sum(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new ReferenceError("x e y precisam ser números!");
  }
  return x + y;
}
try {
  console.log(sum(1, 2));
  console.log(sum("2", 3));
} catch (error) {
  console.log(
    "Vish... acho que deu algo errado... tente novamente colocando 2 números!"
  );
}
