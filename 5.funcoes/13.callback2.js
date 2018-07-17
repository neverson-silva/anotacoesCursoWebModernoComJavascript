const notas = [6.6, 7.6, 7.7, 8.7, 9.0, 3.3, 5.4]

//Sem uso de callback

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
//Com callback

let notasBaixas2 = notas.filter(function(nota) {
     return nota < 7
})

let notasBaixas3 = notas.filter((nota) => nota < 7) 

console.log(notasBaixas, notasBaixas3)