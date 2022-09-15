//Comentario em linha

/*
    Comentario em bloco
    Comentario em bloco
    Comentario em bloco

*/

//Exibe uma mensagem no promt
console.log("Testando o NodeJS");

//import da biblioteca para interacao com o usuario
var readline = require('readline');

//intancia do objeto para entrada e saida de dados via prompt
var entradaDados = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
});

//Coloca uma mensagem no prompt para o usuario e o que for digitado
//[e enviado atraves de um funcao de call back
entradaDados.question("Digite seu nome: \n", function (nome) {

    console.log("Bem vindo, "+nome+".")

});

