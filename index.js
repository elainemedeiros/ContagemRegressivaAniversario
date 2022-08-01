const segundos = 1000
const minutos = segundos * 60
const horas = minutos * 60
const dias = horas * 24

const niverDaniel = new Date('2022-09-05 06:00:00')

function diffNiverDaniel () {
    const diaHoje = new Date().getTime()
    return niverDaniel.getTime() - diaHoje
}

function setContagemRegressiva (element, value) {
    document.querySelector(`.${element}`).innerHTML = value
}

function zeroEsquerda (numero) {
    return String(numero).padStart(2, '0')
}

function diffDias (diff) {
    return Math.floor(diff / dias)
}

function diffHoras (diff) {
    const round = Math.floor(diff % dias / horas)
    return zeroEsquerda(round)
}

function diffMinutos (diff) {
    const round =  Math.floor(diff % horas / minutos)
    return zeroEsquerda(round)
}

function diffSegundos (diff) {
    const round =  Math.floor(diff % minutos / segundos)
    return zeroEsquerda(round)
}

function contagemRegressiva () {
    const diff = diffNiverDaniel()

    setContagemRegressiva('dias', diffDias(diff))
    setContagemRegressiva('horas', diffHoras(diff))
    setContagemRegressiva('minutos', diffMinutos(diff))
    setContagemRegressiva('segundos', diffSegundos(diff))
}

window.load = setInterval(contagemRegressiva, 1000)