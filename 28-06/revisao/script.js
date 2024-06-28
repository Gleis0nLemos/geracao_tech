// const number = 10
// const text = "hello world!"
// const trueOrFalse = true

// let semValorDefinido = null

// alert(semValorDefinido)

// const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arrayDeTextos = ["hello", "world", "!"]

// const arrayDeObjetos = [
//   {
//     id: 1,
//     title: "Tarefa",
//     description: "Descrição da tarefa"
//   },
// ]

// console.log(arrayDeNumeros)

// function nomeDaFuncao(nome, sobrenome) {
//   const nomeCompleto = `Meu nome completo e ${nome} ${sobrenome}`
//   console.log(nomeCompleto)
// }

// nomeDaFuncao("João", "Silva" )

// let soma;

// function somaNumeros(num1, num2) {
//   soma = num1 + num2
//   console.log(soma)
// }

// somaNumeros(10, 20)

// const condicao1 = true
// const condicao2 = false
// const condicao3 = ""

// console.log(!!condicao3);

// if (condicao1 || condicao2) {
//   console.log("verdadeiro")
// } else {
//   console.log("false")
// }

// const num1 = "10"
// const num2 = 10

// if (num1 == num2) {
//   console.log("verdadeiro")
// } else {
//   console.log("false")
// }

// const contagem = 5

// for (let i = 0; i < contagem; i++) {
//   console.log(i)
// }

// while (i <= contagem) {
//   console.log(contagem)
//   i++
// }

// const oUsuarioEstaLogado = true

// const contagem = 30
// let i = contagem

// while (oUsuarioEstaLogado) {
//   console.log("O usuario será deslogado em ", i)

//   for (i = contagem; i >= 0; i--) {
//     console.log(i)
//     if (i === 0) {
//       oUsuarioEstaLogado = false
//     }
//   }
// }

// console.log("O usuario não está mais logado")


// let oUsuarioEstaLogado = true;
// const contagem = 30;

// for (let i = contagem; i >= 0; i--) {
//   if (i > 0) {
//     console.log("O usuário será deslogado em", i, "segundos");
//   } else {
//     console.log("O usuário será deslogado agora");
//     oUsuarioEstaLogado = false;
//   }
// }

// if (!oUsuarioEstaLogado) {
//   console.log("O usuário não está mais logado");
// }

let oUsuarioEstaLogado = true;
const contagem = 30;
let i = contagem;

while (oUsuarioEstaLogado) {
  if (i > 0) {
    console.log("O usuário será deslogado em", i);
    i--;
  } else {
    console.log("O usuário será deslogado agora");
    oUsuarioEstaLogado = false;
  }
}

console.log("O usuário não está mais logado");

// Estrutura do while
/* 
do {
  
} while () {

};
*/

const numero = prompt("Digite sua nota: ");

const verficarNota = numero < 7 ? console.log("Reprovado") : console.log("Aprovado");

// switch (numero) {
//   case "10":
//     console.log("Aprovado");
//     break;
//   case "9":
//     console.log("Aprovado");
//     break;
//   case "8":
//     console.log("Aprovado");
//     break;
//   case "7":
//     console.log("Reprovado");
//     break;
//   case "6":
//     console.log("Reprovado");
//     break;
//   default:
//     console.log("Nota inválida");
// }
