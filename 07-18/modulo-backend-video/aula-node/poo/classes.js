// CLASSES

class Pessoa {
  // ATRIBUTOS
  nome = '';
  idade = '';
  cpf = '';

  // CONSTRUTOR
  constructor(nome, cpf, idade) {
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
  }

  // EVENTOS - MÉTODOS DE CLASSES
  correr() {
    console.log(`O ${this.nome} está correndo.`)
  }

  dormir() {
    console.log('Dormindo.')
  }
}

const pessoaClasse1 = new Pessoa('José', '123.456.789-00', 30);
const pessoaClasse2 = new Pessoa('Maria', '987.654.321-00', 25);

pessoaClasse1.nome = 'João';
// pessoaClasse1 = x0191231231;
const pessoaAux = pessoaClasse1;
// pessoaAux = x0191231231;
pessoaAux.nome = 'Alice';