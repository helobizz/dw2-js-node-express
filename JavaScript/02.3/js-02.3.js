//OBJETOS LITERAIS - usado p agrupar valores que possuem propriedades e funções(ações que ele executa),
//possuem atributos e métodos
// sintaxe igualao da array mas troca a [] por {}
/**
 * let carro = {
 *     modelo: 'gol',
 *     cor: 'vermelho',
 *     acelerar(){
 *          console.Log('Acelerando..')
 *      },
 *     frear(){
 *          console.Log('Freando..')
 *      },
 *   }
 *
 * chaves = modelo e cor
 * valores = gol, vermelho
 * chave + valor = atributos
 * funções = métodos
 *
 * quero mostrar modelo do objeto - console.Log(carro.modelo) (vai exibir gol)
 * quero mostrar uma função do objeto - carro.acelerar()
 */

//para percorrer uma array de objetos:
//productList.fortach
//ARRAY DE OBJETOS - Lista de objetos que possuem propriedades e funções
//FOREACH - para percorrer o array de objetos

//Objetos literais possuem atributos e métodos

//objeto literal não deriva de classes

const pessoa = {}; //{} => objeto (como declara)
document.write(typeof pessoa);

const carro = {
  modelo: "gol",
  cor: "vermelho",
  acelerar() {
    return "Acelerando...";
  },
  frear() {
    return "Freando...";
  },
};

//Exibindo as propriedades do objeto
document.write(`<p>O modelo do carro é ${carro.modelo}</p>`);
document.write(`<p>A cor do carro é ${carro.cor}</p>`);
document.write(`<p>${carro.acelerar()}</p>`);
document.write(`<p>${carro.frear()}</p>`);

const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com bom desempenho.",
};

document.write(
  `<p>O ${produto.nome} da marca ${produto.marca} custa apenas R$${produto.preco}! ${produto.descricao}</p>`
);
//usado para acessar

//ARRAY DE OBJETOS (lista de produtos)
const listaProduto = [
  //junta um ARRAY e um OBJETO
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho.",
  },
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidade e processamento.",
  },
  {
    nome: "Celular",
    marca: "Apple",
    preco: 6000,
    descricao: "Ultra resistente.",
  },
];

// Exibindo o Array de objetos com o ForEach
listaProduto.forEach((produto) => {
  //dou um nome que intere sobre algo individual da lista
  document.write(`
        Produto: ${produto.nome}<br>
        Marca: ${produto.marca}<br>
        Preço: ${produto.preco}<br>
        Descrição: ${produto.descricao}<br><br>
        `);
});
