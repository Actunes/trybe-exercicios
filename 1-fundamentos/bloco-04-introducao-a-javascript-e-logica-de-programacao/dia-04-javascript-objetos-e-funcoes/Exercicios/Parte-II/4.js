function nomes(array){
    let maior = array[0];
    for (let index in array) {
      if (maior.length < array[index].length) {
        maior = array[index];
      }
    }
    return maior;
}
console.log(nomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
