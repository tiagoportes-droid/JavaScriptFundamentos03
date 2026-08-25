const alunos = [
  { nome: "Ana", nota: 9 },
  { nome: "Alice", nota: 7 },
];

alunos.forEach((a) => {
  console.log(`O aluno(a) ${a.nome} a nota: ${a.nota}`);
});

// for (let i = 0; i < alunos.length; i++) {
//   console.log(`O aluno(a) ${alunos[i].nome} a nota: ${alunos[i].nota}`);
// }

const json = JSON.stringify(alunos);
console.log(json);
