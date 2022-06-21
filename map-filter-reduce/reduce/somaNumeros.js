function numSum(array){
  return array.reduce(function (prev, current){
    return prev + current
  })
}

const numbers = [2,3,4,5,6,7,8]

console.log(numSum(numbers))

// Correction 
function somaNumeros(arr){
  return arr.reduce(function(prev, current){
    return prev + current;
  }, 0);
}

const arr = [1, 2];

console.log(somaNumeros(arr))