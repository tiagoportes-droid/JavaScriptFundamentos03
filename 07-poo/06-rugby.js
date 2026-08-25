class JogadorRugby {
  constructor(nome, numero, posicao) {
    this.nome = nome;
    this.numero = numero;
    this.posicao = posicao;
  }

  correr() {
    console.log(`${this.nome} esta correndo com a bola`);
  }

  passarBola() {
    console.log(`${this.nome} passou a bola`);
  }

  mostraDados() {
    console.log(`Nome ${this.nome}`);
    console.log(`Número ${this.numero}`);
    console.log(`Posição ${this.posicao}`);
  }
}

const jogador1 = new JogadorRugby("Pablo", 10, "Abertura");

jogador1.mostraDados();
jogador1.correr();
jogador1.passarBola();

const jogador2 = new JogadorRugby("Tardin", 11, "Hulker");

jogador2.mostraDados();
jogador2.correr();
jogador2.passarBola();
