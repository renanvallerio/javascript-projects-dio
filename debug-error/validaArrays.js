function arrayValidation(thing, number){
  try {
    if (!thing && !number) throw new ReferenceError("Send the parameters!");
    
    if (typeof thing !== 'object') throw new TypeError(`Type ${typeof thing} not allowed!`);
    
    if (typeof number !== 'number') throw new TypeError(`Type ${typeof thing} not allowed!`);
    
    if (thing.length !== number) throw new RangeError("Invalid Length!");

    console.log(`The ${typeof thing} is: ${thing} and the number is: ${number}`)
    return thing;
  }
  catch(error){
    if (error instanceof ReferenceError){
      console.log("This is a ReferenceError!")
      console.log(error.message)
    } else if (error instanceof TypeError){
      console.log("This is a TypeError!")
      console.log(error.message)
    } else if (error instanceof RangeError){
      console.log("This is a RangeError!")
      console.log(error.message)
    } else {
      console.log("Type of error unexpected!", error)
    }
  }
}

console.log(arrayValidation());
console.log(arrayValidation(4, 4));
console.log(arrayValidation([], 'b'));
console.log(arrayValidation([], 4));
console.log(arrayValidation([9,8,6,5,4], 5));

// Correction

function validaArray(arr, num){
  try {
    if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

    if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
    
    if(typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number");
  
    if(arr.length !== num) throw new RangeError("Tamanho inválido!");

    return arr;
  }
  catch(e){
    if(e instanceof ReferenceError){
      console.log("Este erro é um ReferenceError!")
      console.log(e.message)
    } else if(e instanceof TypeError){
      console.log("Este erro é um TypeError!")
      console.log(e.message)
    }  else if(e instanceof RangeError){
      console.log("Este erro é um RangeError!")
      console.log(e.message)
    } else {
      console.log("Tipo de erro não esperado: ", e);
    }   
  }
}
console.log("")
console.log("-------------------------------------------------------")
console.log("")
console.log(validaArray());
console.log(validaArray(5, 5));
console.log(validaArray([], 'a'));
console.log(validaArray([], 5));
console.log(validaArray([1,2,3,4,5], 5));