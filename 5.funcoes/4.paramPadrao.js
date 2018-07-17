//estrategia 1 ára gerar valor padrao
//usando o or

function soma1(a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma(0, 0, 0)) //problema com 0, pois é passado como falso

// estrategia 2, 3, 4 para gerar valor padrao

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a + b + c

}
