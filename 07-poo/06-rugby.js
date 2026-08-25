class JogadorRugby {
  constructor(nome, numero, posicao, nota1, nota2) {
    this.nome = nome;
    this.numero = numero;
    this.posicao = posicao;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }

  correr() {
    console.log(`${this.nome} esta correndo com a bola`);
  }

  passarBolaPara(outroJogador) {
    console.log(
      `${this.nome} passou a bola e ${outroJogador.nome} recebeu a bola do ${this.nome}`,
    );
  }

  passarBola() {
    console.log(`${this.nome} passou a bola`);
  }

  receberBola() {
    console.log(`${this.nome} recebeu a bola`);
  }

  chutarBola() {
    console.log(`${this.nome} chutou a bola`);
  }

  mostraDados() {
    console.log(`Nome ${this.nome}`);
    console.log(`Número ${this.numero}`);
    console.log(`Posição ${this.posicao}`);
  }
  calcularMedia() {
    return (this.nota1 + this.nota2) / 2;
  }

  veriicarSituacao() {
    return this.calcularMedia() >= 7 ? "Aprovado" : "Reprovado";
  }

  exibirDados() {
    console.log(`${this.nome} | Média: ${this.calcularMedia() | this.veriicarSituacao()}
        `);
  }
}

const jogador1 = new JogadorRugby("Pablo", 10, "Abertura", 8, 8);

jogador1.mostraDados();
jogador1.correr();
jogador1.passarBola();
jogador1.chutarBola();
jogador1.receberBola();
jogador1.exibirDados();

const jogador2 = new JogadorRugby("Tardin", 11, "Hulker");

jogador2.mostraDados();
jogador2.correr();
jogador2.passarBola();
jogador2.chutarBola();
jogador2.passarBolaPara(jogador1)
