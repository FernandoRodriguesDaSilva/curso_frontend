

var minhafoto, albumFoto, indice, intervalo

function mudarFoto(){
	minhafoto.setAttribute("src", albumFoto[indice])
	indice ++
	// encerra o o intervalo de foto
	if(indice >= albumFoto.length){
		//clearInterval(intervalo)
		indice = 0
	}
}

function iniciar(){
	minhafoto = document.querySelector("#espaco_foto")
	albumFoto = ["_img/arco.jpg","_img/basilica.jpg","_img/coliseu.jpg","_img/eifel.jpg"]
	indice = 0
	intervalo = setInterval(mudarFoto,2000)
}


window.onload = iniciar