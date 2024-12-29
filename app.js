let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', `escreva um número de 1 a ${numeroLimite}`);

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        if(tentativas == 1){
            exibirTextoNaTela('p', `Parabéns! Você acertou o número secreto você acertou com ${tentativas} tentativa!`);
        }else{
            if(tentativas == 0){
                exibirTextoNaTela('p', `Parabéns! Você acertou o número secreto você acertou de primeira!`);
            }else{
            exibirTextoNaTela('p', `Parabéns! Você acertou o número secreto você acertou com ${tentativas} tentativas!`);
        }

        }
        
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chute').setAttribute('disabled', 'disabled');
        
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Errou!');
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('h1', 'Errou!');
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas++
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }

   console.log(listaDeNumerosSorteados)

   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    console.log(numeroEscolhido);
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'escreva um número de 1 a 10');
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
    document.getElementById('chute').removeAttribute('disabled');
    limparCampo();
}