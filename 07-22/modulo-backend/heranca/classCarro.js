class Carro {
  static acelerar() {
    console.log('O carro está acelerando.');
  }

  static frear() {
    console.log('O carro está freando.');
  }

  static ligarSeta(direcao) {
    console.log(`Ligando seta para ${direcao}.`);
  }
}

Carro.acelerar(); // O carro está acelerando.
Carro.frear(); // O carro está freando.
Carro.ligarSeta('esquerda'); // Ligando seta para esquerda.