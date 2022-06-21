const bmw = {
  amount: 3
}

const lambo = {
  amount: 2
}

function mapWithThis(array, thisArg) {
  return array.map(function (carro) {
    return carro * this.amount;
  }, thisArg);
}

const price = [340, 560]

console.log('This => BMW', mapWithThis(price, bmw))
console.log('This => Lambo', mapWithThis(price, lambo))

// Correction
const maca = {
  value: 2,
}

const laranja = {
  value: 3,
} 

function mapComThis(arr, thisArg) {
  return arr.map(function (item){
    return item * this.value;
  }, thisArg);
}

const nums = [1, 2];

console.log('this -> maçã',mapComThis(nums, maca))
console.log('this -> laranja',mapComThis(nums, laranja))