// FUNÇÃO ANÔNIMA (sem nome)
//preciso guardar a função dentro de uma variável
// function (n1, n2) {
//  return n1 + n2
// }
const soma = function (n1, n2) {
  return n1 + n2; //recebe dois números como parâmetros e soma eles
};
document.write(`<p>O resultado da soma é ${soma(8, 7)}.</p>`); //chama a variavel (no caso, soma)
//typeof -> função nativa(mostra o tipo da variável)
const tipo = typeof soma;
document.write(`${tipo}`); //o tipo dessa variável é 'function', é uma função

//ARROW FUNCTION (função anônima melhorada)
const dobro = (x) => {
  //para transformar em uma arrow function, eu omito a palavra 'function' e adiciono uma flecha na frente do parâmetro
  //posso substituir const dobro = (x) => POR const dobro = x => ()
  return x * 2;
};
document.write(`<p>O dobro do número é ${dobro(900)}.</p>`);

//ARROW FUNCTION COM MAIS DE UM PARÂMETRO
const calc = (num1, operador, num2) => {
  //quando uma arrow function tem mais de um parâmetro, eu não posso ocultar os parenteses, mas se eu tenho um parâmetro só, eu posso ocultar
  return eval(`${num1} ${operador} ${num2}`);
};
//eval no Javascript é uma função nativa que realiza cálculos a partir de dois números e um operador.
document.write(`<p>O resultado da operação é ${calc(1100, "-", 1)}.</p>`); //o operador é nomeio, segue exatamente como foi construído na função

//SIMPLIFICANDO ARROW FUNCTION COM UM ÚNICO RETORNO
const calculadora = (num1, operador, num2) =>
  eval(`${num1} ${operador} ${num2}`);
document.write(
  `<p>O resultado da operação é ${calculadora(1100, "+", 1)}.</p>`
); //quando tem um único retorno, eu posso ocultar o return e as chaves

//IIFE - Função Imediata (Immediately Invoked Function Expression) -> ela é invocada imediatamente (é anônima)
const iife = (function () {
  document.write("<p>Estou sendo executada imediatamente!</p>");
})(); //a função precisa estar entre parenteses e ter parenteses no final

//IIFE COM PARÂMETRO
const loadUser = (function (user) {
  document.write(
    `<p>Carregando as informações do usuário: <strong>${user}</strong>...</p>`
  );
})("Heloísa");
