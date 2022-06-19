function replaceEvens(arrangement){
    if(!arrangement) return -1
    if(!arrangement.length) return -1

    for(let i = 0; i < arrangement.length; i++) {
        if (arrangement[i] % 2 == 0) {
            console.log(`Replacing ${arrangement[i]} to 0...`)
            arrangement[i] = 0
        } else if (arrangement[i] == 0) {
            console.log('This number is already zero!')
        }
    }
    return arrangement
}

let arrangement = [3, 4, 2, 7, 6, 9, 8, 0] 
console.log(replaceEvens(arrangement))
console.log(replaceEvens([]))
console.log(replaceEvens(null))
console.log(replaceEvens(false))
console.log(replaceEvens(undefined))

// Correction 

function substituiPares(array) {
    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Você já é zero")
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0
        }
    }
    return array;
}

let array = [3, 4, 2, 7, 6, 9, 8, 0]
console.log(substituiPares(array))
console.log(substituiPares([]))
console.log(substituiPares(null))
console.log(substituiPares(false))
console.log(substituiPares(undefined))