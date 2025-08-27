// MÉTODOS DE MANIPULAÇÃO DE VETORES
let vetor = ['Laranja', 'Maça', 'Banana']
document.write(`<p>Nosso vetor é o : ${vetor}</p>`)

vetor[3] = 'Morango' //adicionando itens no vetor (o indice ainda não existe)
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`)

// PUSH -> Insere um novo elemento no FINAL do vetor:
vetor.push('Abacaxi')
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`)

vetor[0] = 'Pera' //se eu colocar uma atribuição em um indice que já existe, eu substituo o anterior
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`)

// UNSHIFT - Insere um novo elemento no INÍCIO do vetor
vetor.unshift('Laranja')
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`)

// LENGTH - Retorna o número de elementos no vetor
let numbers = [6, 8, 2, 9, 3, 800, 200]
document.write(`<p>Nosso vetor agora é o: ${numbers}</p>`)
document.write(`<p>O número de elementos desse vetor é ${numbers.length}</p>`) //variavel.método

// SORT - Ordena o vetor (funciona corretamente em strings)
document.write(`<p>O primeiro elemento do vetor é: ${numbers[0]}</p>`)

let numbersOrdenado = numbers.sort() //vai guardar o vetor ordenado 
document.write(`<p>O vetor ordenado é: ${numbersOrdenado}</p>`)

document.write(`<p>A lista de frutas ordenada é: ${vetor.sort()}</p>`)

//Ordenando um vetor NUMÉRICO em ordem crescente:
document.write(`<p>numbers.sort((a, b) => a - b)</p>`) //está verificando se o primeiro valor é menor que o segundo

//Ordenando um valor níúmerico em ordem decrescente:
document.write(`<p> ${numbers.sort((a, b) => b - a)}</p>`)

