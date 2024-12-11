alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute ;
let count = 0;

//se o chute for igual ao número secreto

while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10')
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
if(count > 1){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}; Você descobriu com ${count} tentativas`);

} else{
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}; Você descobriu com ${count} tentativa`);
}