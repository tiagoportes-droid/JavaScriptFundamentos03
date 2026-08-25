const aluno = `{ "nome": "Thiago", "nota": "8" }`;

const json = JSON.parse(aluno); //converte para string

console.log(json);
console.log(json.nome);
