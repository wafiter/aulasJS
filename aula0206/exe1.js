const io = require('../io')

/*Faça uma função que recebe a idade de uma pessoa em anos, 
meses e dias e retorna essa idade expressa em dias.*/ 
let a
let m
let d
function idade (a,m,d){
    let dias = a*365 + m*30 + d
    return dias

}

io.write('Digite a sua idade em Anos, Meses e Dias')
io.write('Digite os anos')
a = io.readInt()
io.write('digite os meses')
m = io.readInt()
io.write('digite os dias')
d = io.readInt()

io.write(idade(a,m,d))
