function filterEvens(array){
  return array.filter(function(i){
    return i % 2 === 0 
  })
}

const myNum = [2, 5, 7, 13, 20, 33]

console.log(filterEvens(myNum))

// Correction 
function filtraPares(array) {
  return array.filter(callback);
}

function callback(item) {
  return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray))