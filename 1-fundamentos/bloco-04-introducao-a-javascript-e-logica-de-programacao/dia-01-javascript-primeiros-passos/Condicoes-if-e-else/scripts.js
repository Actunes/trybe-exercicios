const notaCandidata = 80
if (notaCandidata >= 80){
    console.log('Parabéns, você foi aprovado(o)!')
}else if (notaCandidata < 80 && notaCandidata >= 60){
    console.log('Você está na nossa lista de espera.')
}else if (notaCandidata < 60){
    console.log('Você foi reprovado(a)')
}