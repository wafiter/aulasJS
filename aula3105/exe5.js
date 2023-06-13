const io = require("../io")

/*Uma loja utiliza o código V para transação à vista e P para transação a prazo. 
Faça um programa que receba código e valor de 15 transações usando laços de repetição. 
Calcule e mostre:  

O valor total das compras à vista
O valor total das compras à prazo   
O valor total das compras efetuadas*/
let valor
let valorp = 0
let valorv = 0
let codigo


for(let i = 0; codigo != 'Encerrar'; i++){

    io.write('--------------------------------')
    io.write('Digite o codigo da transação: ')
    io.write('--------------------------------')
    codigo = io.read()
    
    io.write('--------------------------------')
    io.write('digite o valor da transação: ')
    io.write('--------------------------------')
    
    valor = io.readFloat()

    if(codigo === 'p'){
        valorp = valorp + valor


    }else if(codigo === 'v'){
        valorv = valorv + valor
    }else{
        io.write('codigo invalido')
    }

    }

    io.write('O valor total das compras a vista é = ' + valorv)
    io.write('O valor total da compras a prazo é = ' + valorp)
    io.write('O valor total das compras é = ' + (valorp + valorv))



