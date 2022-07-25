let array = ['java', 'javascript', 'python', 'html', 'css'];
let stringMaior = ''
let stringMenor = ''
for(let index = 0; index < array.length; index += 1 ){
    if (array[index].length > stringMaior.length){
    stringMaior = array[index]
    }
}
for(let index = 0; index < array.length; index += 1 ){
    if (array[index].length < stringMaior.length){
    stringMenor = array[index]
    }
}

console.log(stringMaior)
console.log(stringMenor)