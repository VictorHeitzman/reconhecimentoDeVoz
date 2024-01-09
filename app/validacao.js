function chuteValido(chute){
    const numero = +chute

    if (chuteInvalido(numero)){
        elementoChute.innerHTML = '<div>Valor inválido!</div>'
        return
    }

    if (numeroMaioOuMenor(numero)){
        elementoChute.innerHTML +=`<div>Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === nummeroSecreto){
        console.log(nummeroSecreto)
        document.body.innerHTML = `<h2>Você acertou!</h2>
        <h3>O número secreto era ${nummeroSecreto}</h3>
        
        <button id="jogarNovamente">Jogar Novamente</button>`


    }else if(numero > nummeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i> </div>`
    }else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i> </div>`
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaioOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogarNovamente'){
        window.location.reload()
    }
})