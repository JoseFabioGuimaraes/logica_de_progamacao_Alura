function exibirTextoNatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirTextoNatela('h1','Jogo do número secreto')
exibirTextoNatela('p', 'Escolha um número de 1 a 100')

function verificarChute(){
    
};