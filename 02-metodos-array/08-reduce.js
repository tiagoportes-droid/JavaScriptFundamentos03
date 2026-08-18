const valores = [10, 20, 30, 40, 50];

const total = valores.reduce (
    (acumulador, valor) => acumulador + valor, 0
)



console.log(total);

//acumulador é a soma dos valores no array como de exemplo:
// 0 + 10 = 10: acumulador = 20
// 10 + 20 = 30: acumulador = 30
// 30 + 30 = 60: acumulador = 60
// 60 + 40 = 100: acumulador = 100
// 100 + 50 = 150: acumulador = 150


//reduce acumula os valores em um resultado
