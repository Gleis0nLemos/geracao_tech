let mode = "dark";

switch (mode) {
  case "dark":
    document.querySelector("body").style.backgroundColor = "#222222";
  // break;

  case "red":
    document.querySelector("body").style.backgroundColor = "#ff0000";
  break;

  case "blue":
    document.querySelector("body").style.backgroundColor = "#0000ff";
  break;

  default:
    document.querySelector("body").style.backgroundColor = "gray";
}