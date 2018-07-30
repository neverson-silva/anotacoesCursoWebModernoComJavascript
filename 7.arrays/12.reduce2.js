const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

const bolsista = aluno => aluno.bolsista

//Desafio 1: Todos os alunos são bolsitas ?

//Todos os alunos são bolsistas
const todos = (resultado, bolsista) => resultado && bolsista
const todosBolsistas = alunos.map(aluno => aluno.bolsista).reduce(todos)

//Desafio 2: Algum aluno é bolsista

//Alguns alunos são bolsistas
const alguns = (resultado, bolsista) => resultado || bolsista
const algunsBolsistas = alunos.map(aluno => aluno.bolsista).reduce(alguns)

console.log(todosBolsistas, algunsBolsistas)