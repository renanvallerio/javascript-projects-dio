function balance(array, available) {
  return array.reduce(function(prev, current){
    return prev - current;
  }, available)
}

const list = [2034, 843, 519, 1036, 792, 345]

console.log(balance(list, 7000))

// Correction

const lista = [
  {
    name: 'sabao em po',
    preco: 30,
  },
  {
    name: 'cereal',
    preco: 12,
  },
  {
    name: 'toalha',
    preco: 30,
  },
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
  return lista.reduce(function(prev, current) {
    return prev - current.preco
  }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista))