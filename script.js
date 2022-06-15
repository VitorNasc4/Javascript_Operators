// Instruções
alert(`
Nesse desafio você vai digitar 2 números e o programa irá:
- Calcular a soma entre eles
- Calcular a subtração entre eles
- Calcular a multiplicação entre eles
- Calcular a divisão entre eles
- Calcular o resto da divisão entre eles
- Verificar se a soma entre eles é par ou ímpar
- Verificar se os números são iguais ou diferentes
`)

// Coletando dados
let numberOne = Number(prompt("Digite o primeiro número:"))
let numberTwo = Number(prompt("Digite o segundo número:"))

// Manipulando os dados
let sum = (x,y) => {
    let result = x + y        //só existe result dentro dessa função, então posso repetir o nome
    return result
}

let sub = (x,y) => {
    let result = x - y        
    return result
}

let multi = (x,y) => {
    let result = x * y        
    return result
}

let div = (x,y) => {
    let result = x / y        
    return result.toFixed(2)
}

let restDiv = (x,y) => {
    let result = x % y        
    return result
}

let evenOrOdd = (x,y) => {
    let result
    if (sum(x, y) % 2 == 0) {
        result = "par"
    } else {
        result = "ímpar"
    }
    return result
}

function sameNumber(x,y) {
    let result
    if (x == y) {
        result = "iguais"
    } else {
        result = "diferentes"
    }
    return result
}

// Imprimindo os dados
alert(`A soma dos números é ${sum(numberOne, numberTwo)}`)

alert(`A subtração dos números é ${sub(numberOne, numberTwo)}`)

alert(`A multiplicação dos números é ${multi(numberOne, numberTwo)}`)

alert(`A divisão dos números é ${div(numberOne, numberTwo)}`)

alert(`O resto da divisão dos números é ${restDiv(numberOne, numberTwo)}`)

alert(`A soma dos dois números resulta um número ${evenOrOdd(numberOne, numberTwo)}`)

alert(`Os números digitados são ${sameNumber(numberOne, numberTwo)}`)