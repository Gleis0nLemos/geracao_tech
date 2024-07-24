const Pessoa = require('./classPessoa');

class Gerente extends Pessoa {
  constructor(nome, cpf, dataDeNascimento, departamento) {
    super(nome, cpf, dataDeNascimento);
    this.departamento = departamento;
  }

  autenticar() {
    super.autenticar();
    console.log(`Gerente do departamento ${this.departamento} autenticado.`);
  }
}

const gerente1 = new Gerente('José', '987.654.321-00', '02/02/1980', 'Vendas');

console.log(gerente1);
gerente1.autenticar();

const gerenteAuxiliar = gerente1;
gerenteAuxiliar.nome = 'Alice'; 
console.log(gerente1.nome); // Alice
console.log(gerenteAuxiliar.nome); // Alice