let nome = "Fábio"
let numero = 4;
let valor1 = 9;
let valor2 = 8;
let valor3 = 7;

function olaMundo(){
    console.log("Olá mundo")
}

olaMundo();

function OlaNome(nome) {
    console.log(`Olá ${nome}`)
}
OlaNome(nome);

function dobroNumero(numero){
    let dobro = numero * 2;
    console.log(`O dobro de ${numero} é ${dobro}`);
}
dobroNumero(numero);


function media(valor1,valor2,valor3){
    let media = parseInt((valor1 + valor2 + valor3)/3);
    return  console.log("A média é: " + media); 
}
media(valor1,valor2,valor3)

//console.log(`A media é: ${media(valor1,valor2,valor3)}`)

function maior(valor1, valor2){
    let maior;
    if(valor1 > valor2){
        maior = valor1;
    }else{
        maior = valor2;
    }
    return console.log(`O maior é ${maior}`);
}

maior(valor1, valor2);

function raizQuadrada(valor1){
    let raizQuadrada =parseInt(valor1 * valor1);
    return console.log('A raiz quadrada é: ' + raizQuadrada);
}

raizQuadrada(valor3)

