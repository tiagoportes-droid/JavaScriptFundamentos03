const alunos = [
    {nome: "Miguel", nota: 8},
    {nome: "Ana", nota: 3},
    {nome: "José", nota: 7}
]

const aprovados = alunos.filter(
    (aluno) => aluno.nota >= 7
)

console.log(aprovados)