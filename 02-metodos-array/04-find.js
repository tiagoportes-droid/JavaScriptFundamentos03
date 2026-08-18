const alunos = ["Giovanni", "Gustavo", "Ingrid", "Isabela"];

const aluno = alunos.find((nome) => nome === "Ingrid");

console.log(aluno);

const aluno1 = alunos.find((nome) => nome === "Felipe");

if(aluno1 === undefined){
    console.log("Não encontrado")
}
else{
    console.log(aluno1)
}

