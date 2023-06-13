const io = require("../io")


/*Faça um algoritmo que leia a idade de uma pessoa expressa em anos,
 meses e dias e escreva a idade dessa pessoa expressa apenas em dias.
 Considerar ano com 365 dias e mês com 30 dias.*/ 

io.write('----------------------------------------') 
io.write('converta sua idade em dias')
io.write('----------------------------------------')

let anosDeIdade 
let mesesDeIdade
let diasDeIdade


io.write('Qual sua idade completa... anos, meses e dias sucessivamente')

anosDeIdade = io.readInt()

mesesDeIdade = io.readInt()

while (mesesDeIdade > 12){
    io.write('Esse valor de meses é invalido tente novamente')
    mesesDeIdade = io.readInt()


}
diasDeIdade = io.readInt()

while (diasDeIdade > 30 ){
    io.write('Esse valor para os dias é invalido')
    diasDeIdade = io.readInt ()
   
}



idadeEmDias = (anosDeIdade *365) + ( mesesDeIdade*30) + diasDeIdade

io.write('---------------------------------')
io.write('A idade em dias é ' + idadeEmDias)
io.write('---------------------------------')

