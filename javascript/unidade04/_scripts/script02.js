function atribuirTexto(nome1) {
    nome.value = nome1   
}
// Utilizando parametro
function iniciar() {
    botao.addEventListener("click",function(){
    	atribuirTexto("Fernando")
    })
}

window.onload = iniciar