var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

/* function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber
} */

// 1- Desafio: Implementar o addEventListener

// verbose
const subtrair = document.getElementById("subtrair");
subtrair.addEventListener('click', decrement)

function decrement() {
  document.getElementById('currentNumber').innerHTML = currentNumber --
}

// compact
const adiconar = document.getElementById("adiconar");
adicionar.addEventListener('click', function() {
  document.getElementById('currentNumber').innerHTML = currentNumber ++
})

// 2- Desafio: Desabilitar o botão de incrementar ou decrementar quando o Count chagar a um determinado número

// 3- Desafio: Mudar a cor do texto quando for negativo!
