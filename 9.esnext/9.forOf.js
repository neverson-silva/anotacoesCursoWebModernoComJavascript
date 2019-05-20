for(let letra of "Cod3r") {
    console.log(letra)
}

const assuntosecma = ['Map', 'Set', 'Promisse']

for(let assunto of assuntosecma) {
    console.log(assunto)
}

for(let i in assuntosecma) {
    console.log(i)
}

const assountosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: true}]
])

for(let assunto of assountosMap) {
    console.log(assunto)
}

for(let assunto of assountosMap.keys()) {
    console.log(assunto)
}

for(let assunto of assountosMap.values()) {
    console.log(assunto)
}

for(let [ch, val] of assountosMap.entries()) {
    console.log(ch, val)
}

