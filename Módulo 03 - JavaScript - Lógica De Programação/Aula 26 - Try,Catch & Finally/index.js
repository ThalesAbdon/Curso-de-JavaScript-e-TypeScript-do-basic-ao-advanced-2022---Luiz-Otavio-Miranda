function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}
try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornaHora(data);
  console.log(hora);
} catch (error) {
  console.log("Por favor, coloque uma data correta...");
} finally {
  console.log("Tenha um bom dia!");
}
