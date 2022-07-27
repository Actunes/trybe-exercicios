function somatorio(numero){
    let total = 0
    for (let index = 1; index <= numero ; index+=1){
        total = total + index
    }return total
}console.log(somatorio(5))