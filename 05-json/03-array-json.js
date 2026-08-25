const alunos = [
  { nome: "Ana", nota: 9 },
  { nome: "Alice", nota: 7 },
];

alunos.forEach((a) => {
  console.log(`O aluno(a) ${a.nome} a nota: ${a.nota}`);
});

const json = JSON.stringify(alunos);
console.log(json);
