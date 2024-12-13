let diaSemana = prompt("Digite o dia da semana: ");

if(diaSemana == "sabado" || diaSemana == "domingo"){
    alert("Bom fim de semana")

} else {
    alert("Boa semana")
}

let points = 100;

if(points <100){
    alert("Tente novamente")
} else{
    alert("Parabens você ganhou")
}

let saldo = 100;
let nome = prompt("Digite seu nome");

alert(`Olá ${nome}, bem vindo! Você tem um total de R$ ${saldo}`)