const io = require("../io")

//Ângulo = | (11 * M - 60 * H) / 2 |

io.write('---------------------------------------------')
io.write('calcular o angulo dos ponteiros do relogio')
io.write('---------------------------------------------')
 
let H
let M
let angulo

io.write('Digite que horas são ? ')
H = io.readFloat()
io.write('Quantos minutos?')
M = io.readFloat()

angulo =  (11 * M - 60 * H) / 2 



if(angulo < 0) {
    
    io.write('o angulo formado é ' + (angulo * -1)  )
    
}else{
    io.write('o angulo formado é ' + angulo)
}