function preencherSelect(tag, limite) {
	for (let i =1; i < limite; i++) {   
		tag.innerHTML += `<option>${i}</option>`;
	} 
}

let dia = document.getElementById('dia');
let mes = document.getElementById('mes');

preencherSelect(dia,32);// Preenche o select de dias (1 a 31)
preencherSelect(mes,13);// Preenche o select de meses (1 a 12)

