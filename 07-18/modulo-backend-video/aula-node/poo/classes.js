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
const pessoaClasse3 = new Pessoa('João', '456.123.789-00', 28);

console.log(pessoaClasse1);
console.log(pessoaClasse2);
console.log(pessoaClasse3);

pessoaClasse1.correr();
pessoaClasse2.correr();
pessoaClasse3.correr();

pessoaClasse1.nome = 'Jonas';