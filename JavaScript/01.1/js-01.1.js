//VARIÁVEIS PODEM SER DECLARADAS DE TRÊS FORMAS:
//VAR, LET e CONST
//VAR: no geral, evite o seu uso, pode não ser muito seguro(ele não impede que uma nova variável seja declarada com o mesmo nome)
/*ex:
var nome = "diego" 
var nome = "pedro"
a primeira variárel deixa de existir*/
//LET: utilize quando for necessário reatribuir valor a variável (posso mudar) (DECLARAÇÃO) -> Não necessariamente preciso atribuir valor quando declaro
//CONST: constante (não posso reatribuir valor) -> utilize quando NÃO precisar reatribuir valor a variável. (ATRIBUIÇÃO) -> preciso atribuir valor quando estou declarando

//TIPOS DE FUNÇÕES
//FUNÇÃO SIMPLES:
const message = "<h2>Olá! Bem-vindo! Essa é a sua primeira função!</h2>";
function showMessage() {
  document.write(message);
}
//invocando a função:
showMessage();

//FUNÇÃO COM PARÂMETROS
const user = "Heloísa";

function userMessage(user) {
  //Essa funçaõ agora recebe um paramêtro (o parâmetro é inserido dentro dos parênteses)
  //não obrigatóriamente o nome do parâmetro precisa ser o mesmo da variável(eu tenho que 
  // usar o mesmo quando eu chamo a função), mas é uma boa prática(dentro da função eu teria que usar o mesmo do parÂmetro)
  document.write(`<h3> O que deseja fazer hoje, ${user}?</h3>`);
  //${} -> template string/literal strings
  //é usado para inserir variáveis dentro de STRINGS(CRASE)
}
userMessage(user); //ARGUMENTO -> É O QUE EU ESTOU ENVIANDO PARA A FUNÇÃO(PRECISA SER IGUAL)

//FUNÇÃO COM MAIS DE UM PARÂMETRO
const n1 = 10;
const n2 = 12;

function mult(n1, n2) {
  //quando eu declaro os parametros aqui, a função puxa daqui os valores, não das variaveis de cima
  //ESSA FUNÇÃO RECEBE DOIS PARÂMETROS
  let result = n1 * n2;
  document.write(`a multiplicação de ${n1} e ${n2} é igual a ${result}`);
}
mult(n1, n2);

// FUNÇÃO COM RETORNO (limito a responsabilidade da função)
const num1 = 1000;
const num2 = 5;

function div(num1, num2) {
  return num1 / num2;
}
document.write(
  `<p>A divisão de ${num1} por ${num2} é igual a ${div(num1, num2)}.</p>`
);

//FUNÇÃO COM DIFERENTES RETORNOS (USA ESTRUTURA CONDICIONAL)
const number = 5;
function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "ímpar";
  }
}
document.write(`O número ${number} é <strong>${parImpar(number)}</strong>.`);
