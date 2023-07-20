//Super Class
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function () {
  console.log(
    `Agência: ${this.agencia}/${this.conta} | ` +
      `Saldo: R$${this.saldo.toFixed(2)}`
  );
};

const conta1 = new Conta(11, 22, 10);
conta1.depositar(11);
conta1.sacar(22);

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

const contaCorrente = new ContaCorrente(10, 10, 0, 400);
contaCorrente.depositar(20);
contaCorrente.sacar(420);
contaCorrente.sacar(1);

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.constructor = ContaPoupanca;

const contaPoupanca = new ContaPoupanca(12, 33, 0);
contaPoupanca.depositar(20);
contaPoupanca.sacar(420);
contaPoupanca.sacar(1);
