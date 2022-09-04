export class Empresa {
  public readonly nomeDaEmpresa: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nomeDaEmpresa: string, cnpj: string) {
    this.nomeDaEmpresa = nomeDaEmpresa;
    this.cnpj = cnpj;
  }

  adicionarColaboradorNaEmpresa(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  listarColaboradoresDaEmpresa(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.231.1212/31');
const colaborador1 = new Colaborador('Thales', 'Abdon');
const colaborador2 = new Colaborador('Bruno', 'Sana');
const colaborador3 = new Colaborador('Vitor', 'Braz');
console.log(empresa1);
empresa1.adicionarColaboradorNaEmpresa(colaborador1);
empresa1.listarColaboradoresDaEmpresa();
