//EXERCICIO 3/A
/*
function oper1 (valor1, valor2){
    const soma = valor1 + valor2
    console.log(`O resultado da soma entres os dois valores será ${soma}`)
}

oper1(12, 6)

function oper2 (valor1, valor2){
    const subtrair = valor1 - valor2
    console.log(`O resultado da subtração entres os dois valores será ${subtrair}`)
}

oper2(12, 6)

function oper3 (valor1, valor2){
    const multiplicar = valor1 * valor2
    console.log(`O resultado da multiplicação entres os dois valores será ${multiplicar}`)
}

oper3(12, 6)

function oper4 (valor1, valor2){
    const divisao = valor1 / valor2
    console.log(`O resultado da divisão entres os dois valores será ${divisao}`)
}

oper4(12, 6)
*/
//EXERCICIO 3/B
const num1 = Number(prompt(`Digite o primeiro numero`))
const num2 = Number(prompt(`Digite o segundo numero`))

console.log(num1, num2)

//EXERCICIO 3/C-D
function oper1 (num1, num2) {
    const soma = num1 + num2
    console.log(`O resultado da soma entres os dois valores será ${soma}`)
}

oper1(num1, num2)

function oper2 (num1, num2){
    const subtrair = num1 - num2
    console.log(`O resultado da subtração entres os dois valores será ${subtrair}`)
}

oper2(num1, num2)

function oper3 (num1, num2){
    const multiplicar = num1 * num2
    console.log(`O resultado da multiplicação entres os dois valores será ${multiplicar}`)
}

oper3(num1, num2)

function oper4 (num1, num2){
    const divisao = num1 / num2
    console.log(`O resultado da divisão entres os dois valores será ${divisao}`)
}

oper4(num1, num2)

/*a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.
*/
