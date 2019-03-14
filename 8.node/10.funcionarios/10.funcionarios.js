const url  = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

//DESAFIO 1

const pegarChineses = (funcionario) => funcionario.pais == 'China'

const mulheres = (funcionario) => funcionario.genero == 'F'

const menorSalario = (acumulador, atual) => acumulador.salario < atual.salario ? acumulador : atual

const filtrarSalario = (funcionarios) => funcionarios.filter(mulheres).filter(pegarChineses).reduce(menorSalario)

let chinesMenorSalario = []

axios.get(url)
     .then((funcionarios) => {
        chinesMenorSalario = filtrarSalario(funcionarios.data)
        console.log(chinesMenorSalario)
     })
     .catch((e) => console.log(e))


     //Obter a mulher chinesa com o menor salario
     // filter -> map -> reduce