//EXERCÍCIO 2/A

function impSoma (num1, num2) {
    const soma = num1 + num2
    console.log(soma)
}

impSoma(3, 7)


//EXERCÍCIO 2/B
function impBool (num1, num2) {
    const soma1 = num1 >= num2
    console.log(soma1)
}

impBool(3, 7)

//EXERCÍCIO 2/C
/*
function impPar (num) {
    const ePar = num % 2 === 0
    const frase = `O número ${num} é par? ${ePar}`

    return frase
}

console.log(impPar(3))
*/
//--------------------------------------------------
//EXERCÍCIO 2/C
function imprimirPar (num) {
    const ePar = num % 2 === 0
    console.log(ePar)
}

imprimirPar(4)

//EXERCÍCIO 2/D
function salBruto (valor) {
    const inss = valor * 0.10
    const salLiquido = valor - inss
    console.log(`O sálario bruto com o desconto do INSS fica em: ${salLiquido}`)
}

salBruto(10000)