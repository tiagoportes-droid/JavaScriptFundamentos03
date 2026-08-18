function apresentar(nome) {
  console.log(`Olá, ${nome}`);
}

apresentar("Tiago");

function somar(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
}

somar(10, 20);

function apresentar(nome = "Visitante"){
    console.log(`Ola, ${nome}`);
}

apresentar();
apresentar("Tiago");