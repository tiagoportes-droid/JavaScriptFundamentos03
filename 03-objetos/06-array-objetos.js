const alunos = [
    {nome: "Ingrid", nota: 0}, 
    {nome: "Ana", nota: 6},
    {nome: "Mathes", nota: 8},
]

alunos.forEach(
    (aluno) => {
        console.log(`O aluno(a) ${aluno.nome} tirou a nota ${aluno.nota}`);
    }
)
