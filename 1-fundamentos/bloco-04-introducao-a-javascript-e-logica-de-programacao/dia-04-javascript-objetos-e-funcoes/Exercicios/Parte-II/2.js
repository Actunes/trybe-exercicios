let maior = 0
function indiceMaiorValor(array){
    for (let index in array){
        if (array[maior] < array[index]){
            maior = index
        }
    }return maior
}console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]))