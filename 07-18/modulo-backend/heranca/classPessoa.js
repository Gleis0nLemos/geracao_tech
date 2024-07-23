class Pessoa {
  constructor(nome, cpf, dataDeNascimento) {
    this.nome = nome;
    this.cpf = cpf;
    this.dataDeNascimento = dataDeNascimento;
  }

  autenticar() {
    console.log(`${this.nome} está autenticado.`);
  }
}

module.exports = Pessoa;

// const pessoa1 = new Pessoa('José', '123.456.789-00', '01/01/1990');

// console.log(pessoa1);
// pessoa1.autenticar();
