window.addEventListener("scroll", function (){
	posicaoY.innerHTML = window.scrollY
	if(window.scrollY >= 200) {
		conteudo.style.display = "block"
	}
})