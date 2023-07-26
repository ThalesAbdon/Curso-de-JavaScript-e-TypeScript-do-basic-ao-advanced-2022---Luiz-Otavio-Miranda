class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 5;
  }
  aumentarVolume() {
    this.volume += 2;
  }
  dimiuirVolume() {
    this.volume -= 2;
  }
  static trocaPilha() {
    console.log("Ok, vou trocar!!!");
  }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha();
console.log(controle1);
