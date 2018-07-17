// Tradução Hoisting: Issar, jogar pra cima

//O codigo nao necessariamente é lido de cima pra baixo
//Existe o hoisting que variaveis que nao existem por exemplo serem jogadas
//pra cima

console.log('a = ', a)

var a = 2

console.log ('a = ', a)