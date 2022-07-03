function compareNumbers(number1, number2) {
    if (number1 == number2) {
        if (number1 + number2 > 10 && number1 + number2 > 20){
            console.log(`Os números ${number1} e ${number2} são iguais. Sua soma é ${number1 + number2}, que é maior que 10 e maior que 20.`)
        } else if (number1 + number2 < 10 && number1 + number2 < 20){
            console.log(`Os números ${number1} e ${number2} são iguais. Sua soma é ${number1 + number2}, que é menor que 10 e menor que 20.`)
        } else if (number1 + number2 > 10 && number1 + number2 < 20){
            console.log(`Os números ${number1} e ${number2} são iguais. Sua soma é ${number1 + number2}, que é maior que 10 e menor que 20.`)
        } else if (number1 + number2 < 10 && number1 + number2 > 20){
            console.log(`Os números ${number1} e ${number2} são iguais. Sua soma é ${number1 + number2}, que é menor que 10 e maior que 20.`)
        }
    } else {
        if (number1 + number2 > 10 && number1 + number2 > 20){
            console.log(`Os números ${number1} e ${number2} não são iguais. Sua soma é ${number1 + number2}, que é maior que 10 e maior que 20.`)
        } else if (number1 + number2 < 10 && number1 + number2 < 20){
            console.log(`Os números ${number1} e ${number2} não são iguais. Sua soma é ${number1 + number2}, que é menor que 10 e menor que 20.`)
        } else if (number1 + number2 > 10 && number1 + number2 < 20){
            console.log(`Os números ${number1} e ${number2} não são iguais. Sua soma é ${number1 + number2}, que é maior que 10 e menor que 20.`)
        } else if (number1 + number2 < 10 && number1 + number2 > 20){
            console.log(`Os números ${number1} e ${number2} não são iguais. Sua soma é ${number1 + number2}, que é menor que 10 e maior que 20.`)
        }
    }
}

compareNumbers(28, 28)

// Correction

function comparaNumeros(num1, num2) {
    if (!num1 || !num2) return "Defina 2 números!"

    const primeiraFrase = criaPrimeiraFrase(num1, num2)
    const segundaFrase = criaSegundaFrase(num1, num2)

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2){
    let saoIguais = '';
    if(num1 !== num2) {
        saoIguais = 'não'

    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais`    
};

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor'
    let resultado20 = 'menor'
    
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = 'maior'
    }


    if(compara20) {
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(2, 4))
console.log(comparaNumeros())
let contador = 0
console.log(contador++)

function validaNumero(num){

    if (!num) return "Envie um número válido!";

  

    return num;

}


console.log(validaNumero());
