window.onload = function(){
	var selecionando = document.querySelector("#pais")

	selecionando.onchange = function(){
		console.log(selecionando.value)
	}
}