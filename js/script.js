//Carne - 400 gramas por pessoa + de 6 horas - 650 gramas
//Cerveja - 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa + 6 horas 1500 ml

//crianças valem por meia pessoa

// adultos criancas duracao resultado

let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas); 

    resultado.innerHTML = `<p>Total de carne: ${qtdTotalCarne / 1000} Kg <p>`;
    resultado.innerHTML += `<p>Total de latas de cerveja: ${Math.ceil(qtdTotalCerveja / 355)} latas<p>`
    resultado.innerHTML += `<p> Total de refrigerantes: ${Math.ceil(qtdTotalBebidas / 2000)} Garrafas`

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
       return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}