//ativ. 1
function saudacaoPersonalizada(nome) {
  document.write(`<h3>Olá, ${nome}! Bem-vindo à Calculadora Universal!</h3>`);
}
saudacaoPersonalizada("Heloísa");

//ativ. 2
function operacaoMatematica(num1, operador, num2) {
  result = eval(`${num1} ${operador} ${num2}`);
  document.write(
    `<p>O resultado de ${num1} ${operador} ${num2} é igual a ${result}</p>`
  );
}
operacaoMatematica(5, "*", 9);
