console.log(this === global)

console.log(this === module)

console.log(this === module.exports)

console.log(this === exports)

// this dentro de uma função aponta
// para o objeto { global }
function logThis() {
    console.log('Dentro de uma funcao....')
    console.log(this === exports)
    console.log(this === global)
}

logThis()