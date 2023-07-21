const pessoas = [
  { id: 3, nome: "Thales" },
  { id: 2, nome: "Luiza" },
  { id: 1, nome: "Dani" },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);
console.log(novasPessoas.get(1));
