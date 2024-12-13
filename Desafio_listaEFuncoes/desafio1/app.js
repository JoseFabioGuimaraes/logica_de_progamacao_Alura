let titulo =  document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function clickConsoleMensagem(){
    console.log("O botão foi clicado")
}

function clickAlertMensagem(){
    alert("Eu amo JS")
}

function clickPromptMensagem(){
    let cidade = prompt("Diga um nome de uma cidade");
    alert(`Estive em ${cidade} e lembrei de você`)
}

function clickSoma(){
    let valor1 = parseInt(prompt("Digite um número para a somar: "));
    let valor2 = parseInt(prompt("Digite um outro número para a somar: "));
    soma = valor1 + valor2;
    alert(`A soma entre ${valor1} e ${valor2} de ${soma}`)
}