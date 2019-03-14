//tagged template - processa o template dentro de ums função

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra estring'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`);