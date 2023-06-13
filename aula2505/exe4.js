const io = require("../io")

/*Faça um programa de computador para calcular as raízes de uma equação do segundo-grau 
na forma ax^2 + bx + c = 0 sendo o valores de a, b e c fornecidos pelo usuário. Caso a 
equação não tenha raízes, o usuário deverá ser informado desse fato.*/

let a
let b
let c

io.write('----------------------------------------------------------')
io.write('Progama para calcular raiz de uma equação de segundo grau')
io.write('----------------------------------------------------------')

io.write('Informe valor de A')
a = io.readFloat()
io.write('Informe o valor de B')
b = io.readFloat()
io.write('Informe o valor de C')
c = io.readFloat()

let delta = b**2 - 4*a*c

io.write('o delta è ' + delta )

if(delta < 0 ){
    io.write('O delta é negativo a função não possui raizes reais')

}else{
   
    let raiz1 = (-b + delta**(1/2))/2*a
    let raiz2 = (-b - delta**(1/2))/2*a
    io.write('As raizes da equação são '+ raiz1 + " e " + raiz2)
}

