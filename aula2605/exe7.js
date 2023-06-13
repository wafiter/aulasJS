const io = require("../io")

/*Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, 
calcular e escrever o valor correspondente em graus
 Celsius (baseado na fórmula abaixo): 
    
    F = (c × 9/5) + 32 
    c = (f - 32)/ 1.8
    


 */
let temperaturaF
let temperaturaC
let resposta



io.write('-------------------------')
io.write('conversor de temperatura')
io.write('-------------------------')
io.write(' ')

io.write('Escolha a converção que deseja fazer')
io.write(' ')
io.write('Celsius para Fahrenheit, Digite = 1' )
io.write(' ')
io.write('Fahrenheit para Celsius, Digite = 2')
io.write(' ')
resposta = io.readInt()

if(resposta == 1){
    io.write('Qual a temperatura em Celsius?')
    temperaturaC = io.readFloat()
    temperaturaF = (temperaturaC * (9/5)) + 32
    io.write('A temperatura em Fahrenheit é '+ temperaturaF.toFixed(2)) 
}else if (resposta == 2) {
    io.write('Qual a temperatura em Fahrenheit?')
    temperaturaF = io.readFloat()
    temperaturaC = (temperaturaF - 32)/1.8
    io.write('A temperatura em celsius é ' + temperaturaC.toFixed(2))
        
} else {
    io.write('"Opção invalida"')
}
