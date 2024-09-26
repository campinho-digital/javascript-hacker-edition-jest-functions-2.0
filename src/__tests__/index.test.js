const {
    loja,
    criarProduto,
    venderDia,
    diasAteEstoqueZerado,
    adicionarProdutoNaLoja,
    produtoMaisProximoDeEsgotar,
    sugerirReabastecimento,
    simularVendasPor30Dias,
    simularVendasNaLoja,
  } = require("../src/index");




  // teste da função criarProduto com os valores nome, estoque e venda por dia

  test("Criar um objeto chamado produto", () => {
    expect(criarProduto('bicicleta', 100, 5)).toEqual({
      nome:'bicicleta',
      estoque: 100,
      vendasPorDia: 5
    });
  });


  // teste da função venderDia
  // informa a venda por dia e atualiza o estoque

  test("Informar a venda por dia do produto e atualizar o estoque", () => {
    const produto1 = {
      nome: 'bicicleta',
      estoque: 100,
      vendasPorDia: 5
    };
    const produto2 = {
      nome: 'skate',
      estoque: 80,
      vendasPorDia: 3
    }

    // chamando a função para aplicar a subtração da venda por dia no estoque
    venderDia(produto1);
    venderDia(produto2);
    expect((produto1.estoque)).toBe(95);
    expect(produto2.estoque).toBe(77)
})

//teste da função diasAteEstoqueZerado

test("Saber quantos dias faltam pro estoque zerar", () => {
    const produto3 = {
      nome: 'patins',
      estoque: 100,
      vendasPorDia: 5
    };

    const produto4 = {
      nome: 'carrinho',
      estoque: 500,
      vendasPorDia: 15
    };

    expect(diasAteEstoqueZerado(produto3)).toBe(20);
    expect(diasAteEstoqueZerado(produto4)).toBe(34)

})


// teste da função adicionar produto
 test("Adicionando produtos a loja", () => {
    
  // criando o produto
   const produto5 = {
    nome: "brinquedo",
    estoque: 30,
    vendasPorDia: 2
   };
   // adicionando o produto
   adicionarProdutoNaLoja(produto5);

   // testando a adição do produto a loja
   expect(loja).toContain(produto5)

 })

 // teste da função produtoMaisProximoDeEsgotar

 test("Testando qual produto esta mais proximo de esgotar", () => {

  const produto6 ={nome:"boneca",estoque:100, vendasPorDia:10 };
  const produto7 = {nome:"radio", estoque:30, vendasPorDia:10};
  const produto8 = {nome:"toalha", estoque:50, vendasPorDia:10}

  adicionarProdutoNaLoja(produto6)
  adicionarProdutoNaLoja(produto7)
  adicionarProdutoNaLoja(produto8)
  //criando uma variavel para receber a função que vai fazer o calculo entre estoque / vendas por dia
  const produtoEstogar = produtoMaisProximoDeEsgotar()

  expect(produtoEstogar).toBe(produto7)

 })


 // testando a simulação de estoque 

 test("Simulando o calculo de quantos produtos o estoque precisa com base no estoque atual e as vendas por dia", () =>{

    const produto10 = {nome:"mesa", vendasPorDia:10}
    const quantidadeSugerida = sugerirReabastecimento(produto10)
    expect(quantidadeSugerida).toBe(300)
 })


 // teste para simular vendas por 30 dias, zerando o estoque e não zerando o estoque

 test("Simulando a venda por 30 dias", () => {


    // simulando estoque zerar
    const produto11 = {nome:"jogos", estoque:100, vendasPorDia:10}

    simularVendasPor30Dias(produto11)
    expect(produto11.estoque).toBe(0)

    //simulando com estoque ainda

    const produto12 = {nome:"tesoura", estoque:400, vendasPorDia:10}

    simularVendasPor30Dias(produto12)
    expect(produto12.estoque).toBe(100)



 })
