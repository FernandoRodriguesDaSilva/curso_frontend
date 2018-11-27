var minhaFoto

function mudarFoto(){
	minhaFoto.setAttribute("src","_img/eifel.jpg");
}
function mudarFoto2(){
	minhaFoto.setAttribute("src","_img/basilica.jpg");
}
function mudarFoto4(){
	minhaFoto.setAttribute("src","_img/arco.jpg");
}



function iniciar(){
	minhaFoto = document.querySelector("#espacofoto")

	setTimeout(mudarFoto,3000)
	setTimeout(mudarFoto2,4000)
	setTimeout(mudarFoto4,3000)

}

window.onload = iniciar;