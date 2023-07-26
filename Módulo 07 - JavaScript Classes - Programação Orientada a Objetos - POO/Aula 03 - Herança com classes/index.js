class DispostivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + "já está ligado!!");
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (this.ligado) {
      console.log(this.nome + "já está desligado!!");
      return;
    }
    this.ligado = false;
  }
}

class Smartphone extends DispostivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispostivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temwifi = temWifi;
  }

  ligar() {
    console.log("você alterou o metódo ligar");
  }

  falaOi() {
    console.log("Oi");
  }
}

const s1 = new Smartphone("Samsung", "Vermelho", "Galaxy S10");
s1.ligar();
s1.ligar();
console.log(s1);

const t1 = new Tablet("iPad", true);
console.log(t1.ligado);
t1.falaOi();
