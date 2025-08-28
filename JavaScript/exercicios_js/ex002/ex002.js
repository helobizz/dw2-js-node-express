const listaClientes = [
  {
    nome: "Heloísa",
    endereco: "Sete Barras",
    cpf: 12345678900,
  },
  {
    nome: "Maria",
    endereco: "Registro",
    cpf: 98765432100,
  },
  {
    nome: "João",
    endereco: "Iguape",
    cpf: 300400500,
  },
];

listaClientes.forEach((cliente) => {
  document.write(`
        Nome: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
        `);
});

listaClientes.push(
  {
    nome: "Diego Max",
    endereco: "Registro",
    cpf: 90080070055,
  });

document.write(`<h3>Esta é a lista atualizada com um novo cliente no final: </h3>`)

listaClientes.forEach((cliente) => {
    document.write(`
        Nome: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
        `)
})