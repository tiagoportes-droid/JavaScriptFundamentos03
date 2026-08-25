class JogadorRugby {
  constructor(nome, numero, posicao) {
    this.nome = nome;
    this.numero = numero;
    this.posicao = posicao;
  }

  correr() {
    console.log(`${this.nome} esta correndo com a bola`);
  }

  passarBolaPara(outroJogador) {
    console.log(`${this.nome} passou a bola e ${outroJogador.nome} recebeu a bola do ${this.nome}`);
  }

  receberBola() {
    console.log(`${this.nome} recebeu a bola`);
  }

  chutarBola() {
    console.log(`${this.nome} chutou a bola`);
  }

  mostraDados() {
    console.log(`Nome: ${this.nome} | Número: ${this.numero} | Posição: ${this.posicao}`);
  }
}

const jogador1 = new JogadorRugby("Pablo", 10, "Abertura");
const jogador2 = new JogadorRugby("Tardin", 11, "Hulker");

jogador1.correr();
jogador1.passarBolaPara(jogador2);
jogador2.chutarBola();
