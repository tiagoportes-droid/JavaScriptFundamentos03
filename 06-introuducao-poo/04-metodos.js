class Aluno {
  constructor(nome, idade, serie) {
    this.nome = nome;
    this.idade = idade;
    this.serie = serie;
  }

  apresentar() {
    console.log(`${this.nome} - idade: ${this.idade} - Turma: ${this.serie}`);
  }
}

const aluno = new Aluno("João", 17, "DS1B");
aluno.apresentar();

const aluno1 = new Aluno("Renan", 28, "DS1A");
aluno1.apresentar();
