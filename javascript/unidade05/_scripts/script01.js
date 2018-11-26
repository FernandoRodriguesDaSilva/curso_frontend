
function mudarCor(cores){
	janela.style.backgroundColor = cores
}

function iniciar(){
	botao1.addEventListener("click", function (){
		mudarCor("orange")
	})

	botao2.addEventListener("click", function (){
		mudarCor("red")
	})

	botao3.addEventListener("click", function (){
		mudarCor("blue")
	})
}

window.onload = iniciar