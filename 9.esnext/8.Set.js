const times = new Set()

times.add('Vasco').add('São Paulo').add('Palmeiras')
.add('Flamengo').add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.delete('Flamengo'))
