let nome = "João";

let lista = [1, 2, 3];

lista.map(item => item +2)

let impares = lista.filter(item => item % 2 != 0)

let pessoas = [
  {
    nome: "João",
    idade: 40
  },
  {
    nome: "Maria",
    idade: 25
  }
]

pessoas.reduce((a, i) => a + i.idade, 0)
pessoas.find(pessoa => pessoa.idade > 30)
pessoas.includes("João")
pessoas.filter(pessoa => pessoa.nome == "João")