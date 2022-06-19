function isPalindrome(word){
    return word == word.split("").reverse().join("")
}

console.log(isPalindrome("radar"))
console.log(isPalindrome("teste"))
console.log(isPalindrome("arara"))
isPalindrome('arara')

// Correction 1

function verificaPalindromo(string) {
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") == string;
}

console.log(verificaPalindromo("ama"))

// Correction 2

function verificaPalindromo2(string) {
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo2("ama"))
console.log(verificaPalindromo2("radar"))
console.log(verificaPalindromo2("zotatoz"))