alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //
let chute ;
let count = 0;

//se o chute for igual ao número secreto

while (chute != numeroSecreto){
    chute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMaximo}` ))
    count++;
    if (chute == numeroSecreto) {
        break;
        } else {
        if(numeroSecreto > chute ){
            alert(`O número secreto é maior que  ${chute}`);
        } else {
            alert(`O número secreto é menor que  ${chute}`);
        }
    }
}

let palavraCount = count > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}; Você descobriu com ${count} ${palavraCount}`);
