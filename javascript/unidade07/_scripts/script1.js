function controleFormulario(e) {
    e.preventDefault();
    
    var caixa_nome = nome.value;
    var caixa_email = email.value;
    var caixa_telefone = telefone.value;

    if ( caixa_nome == "" || caixa_email == "" || caixa_telefone == "" ) {
        mensagem.innerHTML = "Por favor, preencha todos os campos.";   
    } else {
    	mensagem2.innerHTML = "Inscrição feita com sucesso";
    }
}

function limparCaixa() {
    mensagem.innerHTML = "";   
}

function iniciar() {
    formViagem.onsubmit = controleFormulario;
    nome.onfocus = limparCaixa;
}

window.onload = iniciar;