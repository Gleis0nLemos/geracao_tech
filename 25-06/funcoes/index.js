// function boasVindas(nome) {
//   document.write(`<h1>Olá ${nome}</h1>`)
// }

// boasVindas("Gleison");
// boasVindas("João");
// boasVindas("Maria");

// function somar(num1, num2) {
//   document.write(`<h1>A soma é: ${num1 + num2}</h1>`);
//   return num1 + num2;
// }

// somar(10, 5)
// somar(5, 10)

// document.write(`<h1>A divisão é: ${somar(10, 50)}</h1>`)

function datas(tag, limite) {
  for(let i = 1; i < limite; i++) {
    tag.innerHTML += `<option>${i}</option>`
  }
}

datas(dia, 32)
datas(mes, 13)