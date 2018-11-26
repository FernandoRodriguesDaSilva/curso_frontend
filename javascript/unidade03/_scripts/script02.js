 window.onload =  function(){
 	var caixa = document.querySelector("input#nome")
 	var box = document.querySelector("input#email")

 	caixa.onfocus = function(){
 		console.log("on focus na caixa de texto")
 	}

 	box.onfocus = function (){
 		console.log("on blur na caixa de texto email")
 	}

 }