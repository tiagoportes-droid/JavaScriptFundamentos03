class Pessoa {
    #nome;
    
    constructor(nome){
        this.#nome = nome
    }

    get nome(){
        return this.#nome
    }

    set nome(valor){
        if(valor.length >=2) this.#nome = valor
    }
}

const pessoa = new Pessoa("Tiago");
console.log(pessoa.nome)
pessoa.nome = "Vitoria";
console.log(pessoa.nome)