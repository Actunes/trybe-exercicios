const nota = 50
let conceito
if (nota >= 90){
    conceito = 'A'
}else if (nota >= 80 && nota < 90){
    conceito = 'B'
}else if (nota >= 70 && nota < 80){
    conceito = 'C'
}else if (nota >= 60 && nota < 70){
    conceito = 'D'
}else if (nota >= 50 && nota < 60){
    conceito = 'E'
}else if (nota < 50){
    conceito = 'E'
}
console.log(conceito)