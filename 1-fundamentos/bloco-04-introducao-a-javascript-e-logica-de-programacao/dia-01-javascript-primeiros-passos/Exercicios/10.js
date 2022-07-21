const custoProduto = 50
const valorVenda= 100
let valorLucro
let custoProdutoImposto
if (custoProduto > 0 && valorVenda > 0){
    valorLucro = (valorVenda - (custoProduto + (custoProduto * 20/100))) * 1000
    custoProdutoImposto = custoProduto + (custoProduto * 20/100)
    console.log ('Lucro dos produtos:',valorLucro)
    console.log ('Custo do produto com imposto:',custoProdutoImposto)
}else{
    console.log('Erro')
}
