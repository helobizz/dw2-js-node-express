const dataAtual = new Date();
document.write(dataAtual);

const compraInternacional = 500.75;
const valorDolar = compraInternacional.toLocaleString("en", {
  style: "currency",
  currency: "USD",
});
document.write(`<p>O valor da compra em dólares é igual a: ${valorDolar}</p>`);

const valorConvertido = compraInternacional * 5.42;
document.write(`<p>
    Valor em reais: ${valorConvertido.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}
</p>`);

const data = new Date()
data.setDate(data.getDate() + 12) //setDate(data.getDate() + 12) -> spma 12 dias
document.write(`A encomenda chegará em: ${data.toLocaleDateString("pt-br")}`) 
//.toLocaleDateString("pt-br") -> formata no padrão DD/MM/AAAA