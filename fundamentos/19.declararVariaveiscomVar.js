{
    {
        {
            {
                var sera = 'Sera???'
                //console.log(sera)
            }
        }
    }
}

//console.log(sera)



//todas as variáveis fazem parte do escopo global
// todas as variáveis estão dentro do objeto window
// a exceção são variaveis de função que possuem escopo local

var numero  = 1
{
    var numero  = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

