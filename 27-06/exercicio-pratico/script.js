document.addEventListener('DOMContentLoaded', () => {
  // Cria um select com os dias
  let diaSelect = document.getElementById('dia');

  for (let dia = 1; dia <= 31; dia++) {
    let option = document.createElement('option');
    option.value = dia;
    option.innerText = dia;
    diaSelect.appendChild(option);
  }

  // Cria um select com os meses
  let mesSelect = document.getElementById('mes');

  let meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  for (let i = 0; i < meses.length; i++) {
    let option = document.createElement('option');
    option.value = i + 1; // Os meses começam em 1
    option.textContent = meses[i];
    mesSelect.appendChild(option);
  }

  // Cria um select com os anos
  let anoSelect = document.getElementById('ano');
  let anoAtual = new Date().getFullYear();

  for (let ano = anoAtual; ano >= anoAtual - 50; ano--) {
    let option = document.createElement('option');
    option.value = ano;
    option.textContent = ano;
    anoSelect.appendChild(option);
  }
});