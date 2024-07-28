class Pessoa {
  nome;
  cpf;
  data_nascimento;
  constructor(nome, cpf, data_nascimento) { 
    this.nome = nome;
    this.cpf = cpf;
    this.data_nascimento = data_nascimento;
  }

  autenticacao() {
    console.log(`${this.nome} - Autenticando`);
  }
}

class Gerente extends Pessoa {
  constructor(nome, cpf, data_nascimento) {
    super(nome, cpf, data_nascimento);
  }
}

const pessoa = new Pessoa('João', '123.456.789-00', '2000/01/01');
const gerente = new Gerente('José', '123.456.789-00', '2000/01/01');

// pessoa.autenticacao();
// gerente.autenticacao();

class Carro {
  constructor(modelo) {
    this.modelo = modelo;
  }

  static acelerar() {
    console.log('Acelerando.');
  }

  static frear() {
    console.log('Freando.');
  }

  static ligarSeta(direcao) {
    console.log("Ligando seta para " + direcao);
  }
}

Carro.acelerar();
Carro.frear();
Carro.ligarSeta('direita');
Carro.ligarSeta('esquerda');

// BANCO DE DADOS

// métodos
// CONSULTAR
// CRIAR
// ATUALIZAR
// DELETAR