//ARRAYS: Servem para armazenar uma lista, ou seja, diferentes elementos em uma única variável.
//cada elemento da array precisa estar entre aspas
const products = ["Computador", "Notebook", "Celular", "Tablet"];
document.write(`<p>${products}</p>`);
document.write(typeof products);
document.write("<p>Exibindo um elemento do array através do índice:</p>");
document.write(`<p>${products[3]}</p>`);

document.write("<p>Exibindo um array através do forEach:</p>");
//preciso criar uma função anônima com parÂmetro ou uma arrow function dentro
products.forEach((produto) => {
  document.write(`<p>${produto}</p>`);
});

document.write("<p>Mostrando os índices e valores com forEach:</p>");
products.forEach((produto, i) => {
  document.writeln(`<p>${i + 1} - ${produto}</p>`);
});
