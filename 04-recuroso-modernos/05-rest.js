function somar(...numero) {
  return numero.reduce((total, numero) => total + numero, 0);
}

console.log(somar(10, 20, 30, 40, 50, 60));

//criar uma array com a quantidade que eu definir para poder somar com o reduce infinitamente

//sistema de mercado
