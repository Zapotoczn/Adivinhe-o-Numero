function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if(numeroForInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor invalido</div>'
        return
    }

    if(numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>valor invalido: fale um numero entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `<h2>Voce acertou!</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>`
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML +=
        `
        <div> O numero secreto e menor <i class="fa-regular fa-arrow-down-from-line"></i></div>
        `
    } else {
        elementoChute.innerHTML +=
        `
        <div>O numero secreto e maior</div>
        `
    }
}

function numeroForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

