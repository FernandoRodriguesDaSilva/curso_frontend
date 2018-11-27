function iniciar(){
	// esconder tag cidade 
	document.querySelector("#cidade").style.display = "none"
	// mostrar tag elmento
	escolhercidade.onclick = function(){
		if  (escolhercidade.checked){
			cidade.style.display = "block";
		} else {
			cidade.style.display = "none"
		}
	}
}

window.onload = iniciar;