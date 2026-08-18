function somarTradicional(a, b){
    return a + b;
}

const somarAnonimo = function (a,b) {
    return a + b;
}

console.log(somarTradicional(10, 5));
console.log(somarAnonimo(10, 5));

const somarArrowFunction = (a, b) =>{
    return a + b;
}

const arrowFunction1line = (a, b) => a + b;

console.log(somarTradicional(10, 5));
console.log(somarArrowFunction(10, 5));
console.log(somarAnonimo(10, 5));
console.log(arrowFunction1line(10, 5));