let pessoa = {
  nome: "Gleison",
  idade: 23,
  genero: "Masculino",
  habilidades : [
    "PHP", 
    "Laravel", 
    "SQL"
  ],
  andar: () => {
    console.log("andei")
  },
  rosto: {
    olhos: "castanhos",
    temCabelo: true,
  }
}

// exemplo de funcao anonima, o nome da function é a variavel q a atribui
let subtrair = function() {
  console.log("Subtraiu")
}

// exemplo de arrow function, funciona da mesma forma de uma função anônima, porém, mais reduzida
let multiplicar = (a, b) => {return a * b}