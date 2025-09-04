class Heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }
  correr() {
    return "TUM! TUM! TUM! O Herói está correndo!";
  }
  andar() {
    return "TAP... TAP... TAP... O Herói está andando!";
  }
  atacar() {
    return "KRAK! O Herói está atacando!";
  }
  defender() {
    return "KRANG! O Herói está defendendo!";
  }
}

const homemAranha = new Heroi();
homemAranha.nome = "Homem-Aranha";
homemAranha.vida = 80;
homemAranha.velocidade = 70;
homemAranha.forca = 60;
homemAranha.teia = 1;
homemAranha.sentidoAranha = () => {
  return "O Homem-Aranha detectou perigo!";
};

const superMan = new Heroi();
superMan.nome = "Super-Homem";
superMan.vida = 100;
superMan.velocidade = 80;
superMan.forca = 100;
superMan.podeVoar = 1;
superMan.visaoCalor = () => {
  return "O Super-Homem está usando sua visão de calor!";
};

const batman = new Heroi();
batman.nome = "Batman";
batman.vida = 80;
batman.velocidade = 70;
batman.forca = 80;
batman.esconder = 0;
batman.investigar = () => {
  return "O batman está investigando um crime!";
};

document.write(`
    <p>${homemAranha.sentidoAranha()}</p>
    `);

document.write(`
     <p>O ${batman.nome} tem velocidade nível ${
  batman.velocidade
}! ${batman.correr()}</p>   
    `);

document.write(`
            <p>${superMan.visaoCalor()} Ele tem força nível ${
  superMan.forca
}!</p>
    `);
