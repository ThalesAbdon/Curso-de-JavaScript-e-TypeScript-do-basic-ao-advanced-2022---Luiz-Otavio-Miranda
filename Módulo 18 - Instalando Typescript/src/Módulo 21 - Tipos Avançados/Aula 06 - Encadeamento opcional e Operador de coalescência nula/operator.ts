type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O Texto',
  //data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'Não existe data');
