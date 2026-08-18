const a = [1, 2, 3];
const b = [4, 5, 6];

const numeros = [...a, ...b];

console.log(numeros);

// espalha o codigo e deixa 2 arrays dentro de 1 so ao inves deixar aparecendo 2 em 1
// [1,2,3,4,5,6] - errado
// [[1,2,3],[4,5,6]] - certo