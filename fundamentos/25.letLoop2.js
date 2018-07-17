

const funcs = []

for (let i = 0; i < 10 ; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

// uma  closure 'sabe' o escopo em que foi definida
funcs[2]()
funcs[8]()