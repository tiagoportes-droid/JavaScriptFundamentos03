class Pessoa {
  apresentar() {
    console.log("Sou uma Pessoa");
  }
}

class Professor extends Pessoa {
  apresentar() {
    console.log("Sou um Professor");
  }
}

class Aluno extends Pessoa {
  apresentar() {
    console.log("Sou um Aluno");
  }
}

new Professor().apresentar();
new Aluno().apresentar();

/*
ele herda o metodo de dentro da classe mas com um valor diferente, sen chamdao de polimorfismo
*/
