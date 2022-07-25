let objeto = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals:{
        golden: 2,
        silver: 3
    }
}
objeto.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

console.log('A jogadora ' + objeto.name + ' ' + objeto.lastName + ' ' + 'foi eleita a melhor do mundo por ' + objeto.bestInTheWorld.length + ' vezes.');