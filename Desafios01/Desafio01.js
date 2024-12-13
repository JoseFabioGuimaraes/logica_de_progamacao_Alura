alert('Bem vindo ao nosso site');

let idade = 25;
let nome = 'lua';
let numeroDeVendas = 50;
let saldoDusponivel = 1000;


alert('Error!!! Digite todos os campos!!')

let mensagemError = 'Erro! Preencha todos os campos!';

alert(mensagemError);

nome = prompt('Digite o seu nome');
idade = prompt('Digite a sua idade');

if(idade >= 18){
    alert('Pode tirar a habilitação');
}