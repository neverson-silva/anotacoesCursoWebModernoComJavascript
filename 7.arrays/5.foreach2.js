const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// meu forEach
// aprovados.forEach2 = function(callable) {
//     for (aprov in aprovados) {
//         callable(aprovados)
//     }
// }
//ForEach implementado  
Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i  < this.length; i++) {
        callback(this[i], i, this)
    }
}

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
})