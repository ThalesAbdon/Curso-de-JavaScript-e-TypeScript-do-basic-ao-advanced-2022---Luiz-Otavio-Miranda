const nome = "Thales";
// Escopo Léxico, a função conhece o local onde foi declarada, o que foi declarada e os vizinhos dela.
function falaNome() {
  const nome = "Agora vai sair isso";
  console.log(nome);
}

function usaFalaNome() {
  const nome = "isso nunca vai sair";
  falaNome();
}

usaFalaNome();
