function palindromo (string1){
    let reverse = string1.split('').reverse().join('')
    if (reverse === string1){
        return true
    }else{
        return false;
    }
}
console.log(palindromo('arara'))
console.log(palindromo('desenvolvimento'))