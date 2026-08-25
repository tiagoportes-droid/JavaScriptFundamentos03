class JogadorRugby {
  constructor(nome, numero, posicao) {
    this.nome = nome;
    this.numero = numero;
    this.posicao = posicao;
  }

  correr(){
    console.log(`${this.nome} esta correndo com a bola`)
  }

  passarBola(){
    console.log(`${this.nome} passou a bola`)
  }

  mostraDados(){
    console.log(`Nome ${this.nome}`)
    console.log(`Número ${this.numero}`)
    console.log(`Posição ${this.posicao}`)
  }
}
