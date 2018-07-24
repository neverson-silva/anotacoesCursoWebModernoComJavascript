//Reduce vai acumulando de chamado em chamado
//Passando para proxima interação

//O método reduce() utiliza uma função sobre um acumulador 
//(seria quase um sinônimo para array com elementos numéricos)
// e cada elemento do array (da esquerda para direita), 
//reduzindo-a a um único valor. 
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

const resultado = alunos.map(a => a.nota)
                        .reduce(function(acumulador, atual) {
                            console.log(acumulador, atual)
                            return acumulador + atual
                        })