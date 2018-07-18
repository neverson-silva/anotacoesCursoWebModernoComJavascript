const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //inseri um valor no inicio do array
console.log(pilotos)

//adicionar
pilotos.splice(2, 0, 'Botta', 'Massa')
console.log(pilotos)

pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // retorna um novo array a partir do indice informado
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
