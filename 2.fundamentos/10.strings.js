//strings

// aspas duplas
// aspas simples
// versao 2015 ou superior crases

const escola = 'Cod3r'


console.log(escola.charAt(4))
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3))
// funcoes

//String.charAt(position) // retorna o caractere na posição solicitada
.charCodeAt() //retorna o codigo unicode do caractere pa position
.indexOf('3') // retorna a position do valor informado
.substring(0,3) // retorna uma parte da string
.concat() //concatena strings
.replace(posicao, valor) // substitui um caractere, pode informar no primeiro parametro a posição 
                        //do caractere ou um regex, na segunda o valor desejado
.split(',') // gera um array a partir de uma string -- similar explode php