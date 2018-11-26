const li = document.getElementsByTagName("li")

console.log("Número de elementos em li: " + li.length)

console.log("pegando um elemento de li por vez");

console.log(li[0].innerText)
console.log(li[1].innerText)
console.log(li[2].innerText)

console.log("Faz uma varredura pelo i pegando o li");

for (var i = 0; i < li.length; i++){
	console.log(li[i].innerText)
}