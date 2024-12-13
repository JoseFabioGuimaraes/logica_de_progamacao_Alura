let numeroSecreto = gerarNumeroAleatorio();
function exibirTextoNatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirTextoNatela('h1','Jogo do número secreto')
exibirTextoNatela('p', 'Escolha um número de 1 a 10')

function verificarChute(){
    console.log(numeroSecreto)
};

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10+1);
}