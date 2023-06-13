const io = require('../io')

// Faça um programa de computador para calcular o volume de uma esfera. Ele deverá conter uma uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3.Pi.R3). Considere o valor de Pi = 3.14

function calculaVolumeEsfera(raio){
    const result = 4/3 * 3.14 * raio ** 3
    io.write(result)
}

calculaVolumeEsfera(10)

calculaVolumeEsfera(33)

calculaVolumeEsfera(1764)