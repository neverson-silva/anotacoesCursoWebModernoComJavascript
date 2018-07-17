//funcão autoinvocada
//ajuda a fugir do escopo global do navegador
//é uma função anonima
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()