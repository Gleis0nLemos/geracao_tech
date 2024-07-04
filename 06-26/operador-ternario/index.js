// let modo = "dark"; // Usando operador ternário para verificar se a variável está definida

// let mensagem = modo ? "Está definida": "Não está definida";

// console.log(mensagem); // Está definida

// if (modo) {
//   mensagem = "Está definida";
// } else {
//   mensagem = "Não está definida";
// }

// console.log(mensagem); // Está definida

// Com o exemplo de operador ternário acima vemos como ele simplifica o código



// Valores falsos e verdadeiros
console.log(Boolean(0));// false
console.log(Boolean(""));// false
console.log(Boolean("texto"));// true
console.log(Boolean(123));// true
console.log(Boolean([]));// true
console.log(Boolean({}));// true

// Mais exemplos
let modo ="dark";
let mensagem = (modo === "dark") ? "Modo escuro ativado": "Modo claro ativado";

console.log(mensagem); // Modo escuro ativado

// Outro exemplo
let numero = -5; 
let tipoNumero = (numero > 0) ? "Positivo" : (numero < 0) ? "Negativo" : "Zero"; 

console.log(tipoNumero); // Positivo

