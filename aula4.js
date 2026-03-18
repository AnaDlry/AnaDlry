//declaração da função
function imprimeTexto(texto) {
    console.log(texto);
}
//executa a função (1 ou + vezes)
imprimeTexto('oi');
//imprimeTexto('outro texto');
//imprimeTexto(soma()); //função com parâmetro

//função sem parâmetro
function soma() {
    return 2 + 2;
}
//console.log (soma());

//função com mais de um parâmetro
function soma (numero1,  numero2) {
    return numero1 + numero2;
}
//console.log (soma(2, 2));

//duas funções diferentes mesmo nome do parâmetro
function multiplica(numero1, numero2) {
    return numero1 * numero2;
}
console.log(multiplica(soma(4, 5), soma(3, 3)));