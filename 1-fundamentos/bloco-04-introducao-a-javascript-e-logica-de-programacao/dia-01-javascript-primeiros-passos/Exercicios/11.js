let salarioBruto = 2000
let aliquota = null
let ir
let inss

if (salarioBruto <= 1556.94){
    inss = salarioBruto * 0.08
}else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    inss = salarioBruto * 0.09
}else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    inss = salarioBruto * 0.11
}else{
    inss = 570.88
}

let salario = salarioBruto - inss

if (salario <= 1903.98) {
    ir = 0;
  } else if (salario <= 2826.65) {
    ir = (salario * 0.075) - 142.80;
  } else if (salario <= 3751.05) {
    ir = (salario * 0.15) - 354.80;
  } else if (salario <= 4664.68) {
    ir = (salario * 0.225) - 636.13;
  } else {
    ir = (salario * 0.275) - 869.36;
  };

console.log(salario-ir)