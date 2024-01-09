const menorValor = 1
const maiorValor = 100
const nummeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoMenorValor = document.getElementById('menorValor')
elementoMenorValor.innerHTML = menorValor

console.log(nummeroSecreto)

const elementoMaiorValor = document.getElementById('maiorValor')
elementoMaiorValor.innerHTML = maiorValor