function verificarNota(media){
    // if(media >= 7){
    //     return "Aprovado";
    // }
    // else{
    //     return "Reprovado";
    // }

    return media >= 7 ? "Aprovado" : "Reprovado"  // if de uma linha: se media >= 7 ?(valores) "Aprovado" : "Reprovado"
}

console.log(verificarNota(8));