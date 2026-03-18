// função sem retorno e sem parâmetro
function  cumprimentar() {
    console.log('Oi gente!');
}
cumprimentar();
//função sem retorno em com parâmetro
function cumprimentaPessoa(pessoa){
    console.log(`Oi ${pessoa}!`)
}
cumprimentaPessoa('Naju')

//função com retorno e sem parâmetro
function apresentar(){
    return 'Oi gente!'
}
function apresentarPessoa(nomePessoa){
    console.log(`${apresentar()} Meu nome é ${nomePessoa}`);
}
apresentarPessoa('Naju')

//função com retorno com mais de um parâmetro
function operacaoMatematica(numero1, numero2, numero3){
    return numero1 + numero2 + numero3
}
console.log(operacaoMatematica(15, 30, 45))


//expressão de função
const soma = function(num1, num2){
    return num1 + num2
}
console.log(soma(1,1))

//arrow function
const apresentaArrow = nome => `Meu nome é ${nome}`;
console.log(apresentaArrow('Ana'))