let dobro = function (a) {
    return 2 * a
}

//FUNÇÕES ARROW SEMPRE SÃO ANONIMAS
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // RETORNO IMPLICITO

console.log(dobro(Math.PI))

let ola = function () {
    return 'Ola'
}

//let ola = () => 'Ola' // parametro vazio
//let ola = _ => 'Ola' um unico parametro

