export class Empresa {
  public readonly nomeDaEmpresa: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

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

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.1111.111/000111');
  }
  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Thales', 'Abdon');
const colaborador2 = new Colaborador('Bruno', 'Sana');
const colaborador3 = new Colaborador('Vitor', 'Braz');
empresa1.adicionarColaboradorNaEmpresa(colaborador1);
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1);
