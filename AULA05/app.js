/*******************************************************************
 *  Objetivo: Aplicar estruturas de repeticao (While e FOR)
 *  Data: 04/08/2022
 *  Autor: Marcel
 *  Versao: 1.0
 * *******************************************************************/

console.log("##### Calcular uma tabuada simples ####")

const { calcularTabuada } = require('./modulos/tabuada.js');

//import da biblioteca de entrada de dados 
var readline = require('readline');

//Intancia do objeto entradaDados
var entradaDados = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
});

entradaDados.question('Digite a tabuada a ser calculada: \n', function(numero){
    let tabuada = numero;
    calcularTabuada(tabuada);
});