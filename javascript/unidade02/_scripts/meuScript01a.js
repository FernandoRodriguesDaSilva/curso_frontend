const elemento = document.getElementById("opcoesPizza")
// selecionando o ul pelo id=opcoesPizza
const meuElemento = document.querySelector("#opcoesPizza")
// selecionando a tag li
const novaPizza = document.createElement("li")
//Adicionar novo item list
meuElemento.appendChild(document.createElement("li")).innerHTML = "Americana"
meuElemento.appendChild(document.createElement("li")).innerHTML = "Nordestina"
meuElemento.appendChild(document.createElement("li")).innerHTML = "Paulista"








const tamanho = elemento.childElementCount

//console.log(elemento.children);

/*console.log(elemento.children[0].innerHTML)
console.log(elemento.children[1].innerHTML)
console.log(elemento.children[3].innerHTML)

console.log(elemento.childElementCount) */


console.log(tamanho)
for(var i=0; i<tamanho; i++){
	console.log(elemento.children[i].innerHTML)
}


