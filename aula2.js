//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area);
//var area;

let forma = 'retângulo';
let altura = 5;
let comprimento = 7;
let area;
if (forma === 'retângulo') {
    area = altura * comprimento;
 } else {
    area = (altura * comprimento) / 2;
 }
console.log(area);
console.log(0 == false);
console.log('' == false);

const numero = 456;
//const numerostring = '456';
//console.log(numero === numerostring); //false
//console.log(numero == numerostring); //true
//console.log(numero + numerostring); //conversão implicita
const numeroString = Number("456"); // conversão explícita
console.log (numero + numeroString);

let telefone = 12341234;
console.log('O telefone é '+ telefone.toString())