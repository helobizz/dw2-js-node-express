// Classes são uma forma de criar objetos e organizar o código/atributos de forma mais clara e reutilizável
//funcionam como >modelos< para criar multíplos objetos com as mesmas propriedades e métodos (diz quais atributos o objeto vai ter, e vai instaciando(atributos que derivam da classe/objeto primário - são reutilizáveis, objetos que irão derivar dessa classse))
//quando eu uso o "new" automaticamente ele herda os atributos (instanciar)

//CLASSES NO JAVASCRIPT

//Criando uma classe
//o nome de Classes devem começar com a primeira letar maiúscula
class Carro {
  //PAra criar os ATRIBUTOS da Classe deve-se utilizar o método "constructor"
  constructor(marca, modelo, ano) {
    //todo carro meu terá esses atributos
    //this representa a instância (objeto)
    //O valor que for enviado a class será atribuído a instância
    // ATRIBUTOS
    this.marca = marca; //o this diz que essa marca será alterada com o valor que eu atribuir aqui, ele representa o objeto (o modelo do objeto vai ser o modelo que eu enviar para a classe)
    this.modelo = modelo;
    this.ano = ano;
  }
  // MÉTODOS -> ações que determinada classe faz
  buzinar() {
    return "Beep! Beep!";
  }
}

// Criando INSTÂNCIAS (objetos) derivadas da Classe carro
//Objeto - carro popular
const carroPopular = new Carro("Fiat", "Uno", 2012); //instância nas propriedades

document.write(`
  <p>O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano de ${
  carroPopular.ano
}. Quando buzina faz ${carroPopular.buzinar()}</p>
  `);

//Objeto - carro esportivo
const carroEsportivo = new Carro(); //instância já atribuindo valores
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = 2024;

document.write(`
  <p>O carro ${carroEsportivo.marca} modelo ${
  carroEsportivo.modelo
} é do ano de ${
  carroEsportivo.ano
}. Quando buzina faz ${carroEsportivo.buzinar()}</p>
  `);

//adicionando um novo atributo
carroEsportivo.corNeon = "Azul";

//Adicionando um novo método
carroEsportivo.turbo = () => {
  return "Vrummmmm! O carro acelera muito!!!";
};

document.write(`<p>O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} também possui neon na cor ${carroEsportivo.corNeon}. E quando usa turbo ${carroEsportivo.turbo()}</p>`)