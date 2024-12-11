console.log("Olá, seja bem vindo");

let nome = "Fábio"
console.log(nome)

alert(`Olá ${nome}`);

let linguagem = prompt("Qual a linguagem que você mais gosta?");
console.log(`A linguagem que ${nome} mais gosta é ${linguagem}`);
//5
let valor01 = 9;
let valor02 = 8;

let resultado1 = valor01 + valor02;

console.log(`A diferença entre ${valor01} e ${valor02} é igual a ${resultado1}`);
//6
let valor1 = 9;
let valor2 = 8;

let resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

//7 
let idade = prompt("Insira sua idade por favor: ");
if(idade < 18 ){
    console.log("User menor de idade");
} else{
    console.log("User maior de idade");
}

//8

let numero = prompt('Digite um valor')

if(numero<0){
    console.log("O número é negativo")
}else if(numero>0){
    console.log("O número é positivo")
} else{
    console.log("O número é neutro")
}

//9 
let inicial = 0
while(inicial < 10){
    inicial++;
    console.log(inicial)
}

//10 
let nota = 7.5;
let resultadoNota = nota > 7 ? "Aprovado" : "Reprovado";
console.log(resultadoNota)

//11
console.log(Math.random())

//12
console.log(parseInt(Math.random() * 10 + 1))

//13
console.log(parseInt(Math.random() * 1000 + 1))
