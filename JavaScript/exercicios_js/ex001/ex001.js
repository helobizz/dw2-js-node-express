//ativ. 1
function saudacaoPersonalizada(nome) {
  document.write(`<h2>Olá, ${nome}! Bem-vindo à Calculadora Universal!</h2>`);
}
saudacaoPersonalizada("Heloísa");

//ativ. 2
function operacaoMatematica(num1, operador, num2) {
  result = eval(`${num1} ${operador} ${num2}`);
  document.write(`<p>O resultado de ${num1} ${operador} ${num2} é igual a <b>${result}</b></p>`)}
operacaoMatematica(5, "*", 9);

//ativ. 3
const calcularDobro = function (n) {
  return n * 2;
};
document.write(`<p>O dobro é igual a: <b>${calcularDobro(50)}</b></p>`);

//ativ. 4
const calcularMetade = (x) => {
  return x / 2;
};
document.write(`<p>A metade do valor é igual a: <b>${calcularMetade(500)}</b></p>`);

//ativ. 5
const iife = (function () {
  document.write(`<h4>Calcuradora Universal pronta para uso!</h4>`);
})();
