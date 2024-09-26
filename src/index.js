// cria uma lista vazia para armazenar os produtos
let loja = [];

// Função para criar um produto
    // o return é usado para que possamos utilizar a variavel produto em outras partes do código
function criarProduto(nome, estoque, vendasPorDia) {
    let produto = {
      nome:nome,
      estoque:estoque,
      vendasPorDia:vendasPorDia
    };
    return produto;
}

// Função para vender produtos por um dia e atualizar o estoque
    // vai atualizar o estoque subtraindo pela quantidade de vendas por dia
function venderDia(produto) {
  produto.estoque -= produto.vendasPorDia;
  console.log(`Vendidos ${produto.vendasPorDia} unidades de ${produto.nome}. Estoque atual: ${produto.estoque}`)
}

    // utiliza o método Math.ceil para arrendondar para cima a divisão caso necessario
    //divide o estoque pela quantidade de vendas por dia o que resulta na quantidade de dias que faltan pro
    //estoque acabar
function diasAteEstoqueZerado(produto) {
  return Math.ceil(produto.estoque / produto.vendasPorDia);
}


// Função para adicionar um produto à loja
      // usa o método push para adicionar produtos a loja
function adicionarProdutoNaLoja(produto) {
  loja.push(produto);
  console.log(`${produto.nome} foi adicionado à loja.`)
}

// Função para verificar qual produto está mais próximo de esgotar o estoque
    // foi criado a variável produtoEsgotar que armazena a lista de produtos
    // a lista esta zerada para poder assumir que o primeiro produto esta proximo de esgotar 
    //usando o forEach para percorrer essa lista e comparar qual item esta mais proximo de acabar de acordo com o if
        // explicando o if: se o produto atual analisado diasAteEstoqueZerado(produto) 
        // for menor que diasAteEstoqueZerado(produtoEsgotar)
        // será armazenado esse produtoe em produtoEsgotar

function produtoMaisProximoDeEsgotar() {
    let produtoEsgotar = loja[0];
    loja.forEach(produto => {
      if (diasAteEstoqueZerado(produto) < diasAteEstoqueZerado(produtoEsgotar)){
        produtoEsgotar = produto;
      }
    });
    console.log(`${produtoEsgotar.nome} está mais próximo de esgotar o estoque`)
    return produtoEsgotar;
}

// Função para sugerir uma quantidade de reabastecimento com base no histórico de vendas
    //é criada uma variável que vai armazenar quantos produtos vende por dia * 30 (para um estoque mensal)
    //ex: se é vendido por dia 5 produtos, vai ser multiplicado esse valor por 30 = 150
function sugerirReabastecimento(produto) {
    let quantidadeSugerida = produto.vendasPorDia * 30;
    console.log(`Sugerido reabastecer ${quantidadeSugerida} unidadesde ${produto.nome}`)
    return quantidadeSugerida
}

// Função para simular vendas por 30 dias
function simularVendasPor30Dias(produto) {
  // para cada dia(i), onde o dia(i) é menor que 30, somar mais um dia (i ++)
  for (let i = 0; i <30; i++){
    venderDia(produto); //simula a venda do produto por dia // cada vez que rodar essa função vai ser subtraido do estoque
    // o quantindade vendida
    if(produto.estoque <= 0){
      console.log(`Estoque de ${produto.nome} esgotado do dia ${i + 1}.`);
      break; //se o estoque acabou, interrompe
    }

  }

}

// Função para simular as vendas para todos os produtos da loja
    // simulando a venda de todos os produtos por 30 dias, produto por produto com o forEach e retornando a mensagem
    // com o nome do produto
function simularVendasNaLoja() {
  loja.forEach(produto => {
    console.log(`Simulando vendas para ${produto.nome}:`);
    simularVendasPor30Dias(produto);
  });

}

module.exports = {
  loja,
  criarProduto,
  venderDia,
  diasAteEstoqueZerado,
  adicionarProdutoNaLoja,
  produtoMaisProximoDeEsgotar,
  sugerirReabastecimento,
  simularVendasPor30Dias,
  simularVendasNaLoja,
};


