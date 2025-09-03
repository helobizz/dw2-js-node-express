// MANIPULAÇÃO DE DATAS

document.write("<h3>Manipulando datas:</h3>");
// Criar uma instância da classe Date() do Javascript

const dataAtual = new Date();
document.write(dataAtual); //consigo pegar somente o dia, o mês, os segundos etc.

//Pegando o dia atual:
const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia: ${dia}</p>`);
// Pegando o mês atual:
const mes = dataAtual.getMonth() + 1; //começa a contar do mês 0, então tem que adicionar 1
document.write(`<p>Estamos no mês: ${mes}</p>`);
// Pegando o ano atual:
const ano = dataAtual.getFullYear();
document.write(`<p>Estamos no ano: ${ano}</p>`);
// Pegando o dia da semana:
const diaSemana = dataAtual.getDay() + 1; //também começa do 0
document.write(`<p>Dia da semana: ${diaSemana}</p>`);

//Adicionando Dias, Meses e Anos à data atual
// Adicionando 4 anos ao ano atual:
dataAtual.setFullYear(dataAtual.getFullYear() + 4); //a partir do ano atual + 4
document.write(`<p>Daqui a 4 anos será: ${dataAtual.getFullYear()}</p>`);
//adicionando meses
dataAtual.setMonth(dataAtual.getMonth() + 3);
//adicionando dias
dataAtual.setDate(dataAtual.getDate() + 10);



//FORMATAÇÃO DE MOEDAS
//REAL
document.write("<h3>Formatação de moedas:</h3>");

const salario = 1512;
const salarioReal = salario.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});
document.write(`<p>O valor do salário mínimo atual é ${salarioReal}.</p>`);

//DÓLAR
const salarioDolar = salario.toLocaleString("pt-br", {
  style: "currency",
  currency: "USD",
});
document.write(`<p>Salario em dolar: ${salarioDolar}.</p>`);

const salarioConvertido = salario * 0.176;
document.write(`<p>
  Salário em valor de dólar: ${salarioConvertido.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })}
</p>`);

// EURO -> currency: EUR



//FORMATAÇÃO DE STRING (textos)
document.write("<h3>Formatação de Strings:</h3>");
const nome = "Heloísa Vale";

//ALTERANDO PARA LETRAS MAIÚSCULAS - toUpperCase():
document.write(`<p>Nome em maiúsculas: ${nome.toUpperCase()}</p>`);
// ALTERANDO PARA LETRAS MINÚSCULAS - toLowerCAse():
document.write(`<p>Nome em minúsculas: ${nome.toLowerCase()}</p>`);
// REMOVENDO ESPAÇOS DA STRING
const novoNome = nome.replace(/\s/g, ""); //pede para remover os espaços (faz uma "troca")
// CONTANDO CARACTERES DE UMA STRING - .length
document.write(`<p>Esse nome tem: ${novoNome.length} letras.</p>`);
