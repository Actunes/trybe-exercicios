let pecaXadrez = 'PEAO'.toLowerCase()

switch (pecaXadrez){
    case 'rei':
        console.log('Horizontal, vertical e diagonal, somente uma casa de cada vez.')
        break
    case 'rainha':
        console.log('Ao longo da horizontal, vertical e diagonais, mas não pode pular outras peças.')
        break
    case 'bispo':
        console.log('Ao longo da diagonal, não pode pular outras peças.')
        break
    case 'cavalo':
        console.log('Em formato de "L", pode pular as outras peças.')
        break
    case 'torre':
        console.log('Ao longo da vertical ou horizontal, não pode pular outras peças.')
        break
    case 'peao':
        console.log('Apenas uma casa para frente e captura outras peças na diagonal, cada peão pode avançar duas casas no seu primeiro movimento')
        break
    default:
        console.log('Peça invalida')
}