function imc(altura,peso){
    return peso/(altura*altura);
}

let peso = 70;
let altura = 1.75;

console.log('O imc é igual a: ' + imc(altura, peso))


function fatorial(num){
    let resultado = 1
    while(num > 0 ){
        resultado *= num;
        num--;
    }
    return resultado;
}

console.log(fatorial(5));

function converterDolarParaReal(valor){
    let cotacao = 4.80;
    let ValorEmReal = valor * cotacao;
    return ValorEmReal;
}

console.log(converterDolarParaReal(100));

function calculaAreaEPerimetroQuadrado(comprimento, altura){
    let area = comprimento * altura ;
    let perimetro = 2*(comprimento + altura);
    return {area, perimetro};
}

console.log(`O tamanho da area é ${calculaAreaEPerimetroQuadrado(5,3).area}`);
console.log(`O tamanho do perimetro é ${calculaAreaEPerimetroQuadrado(5,3).perimetro}`)


function calculaAreaEPerimetroCirculo(raio){
    let pi = 3.14;
    let area = pi * (raio*raio);
    let perimetro = 2*pi*raio;
    return {area, perimetro};
}

console.log(calculaAreaEPerimetroCirculo(5));

function tabuada(numeroTabuada){
   let multiplicador = 0;
   while (multiplicador < 11){
    produto = numeroTabuada * multiplicador
    console.log(produto)
    multiplicador++
   }

}
tabuada(5);