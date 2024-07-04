let modo = prompt("Digite um modo: dark, red ou blue: ");

switch (modo) {
  case "dark": 
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    break;

  case "red":
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
    break;

  case "blue":
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
    break;

  default:
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}