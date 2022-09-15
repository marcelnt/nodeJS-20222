console.log('Calculadora Simples');

//import do arquivo de funcao para realizar calculos
const { calcular } = require('./modulos/calculadora.js');

//import da biblioteca de entrada de dados 
var readline = require('readline');

//Intancia do objeto entradaDados
var entradaDados = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
});

//Entrada de do valor1
entradaDados.question('Digite o numero1: \n', function (valor1){
    //Declarando a variavel e convertendo o valor digitado pelo usuario em float
    let numero1 = parseFloat(valor1);

    //typeof() - verifica qual o tipo de dados de uma variavel ou um objeto
    //console.log(typeof(numero1))

    entradaDados.question('Digite o numero2: \n', function (valor2){
        let numero2 = parseFloat(valor2);

        entradaDados.question('Escolha a operacao a ser calculada: somar[+], subtrair[-], multiplicar[*], dividir[/]: \n', function(opcao){
            //Declarando a varaivel que vai receber o tipo de operacao matematica
                // e convertendo o texto digitado em MAIUSCULO
                // toUpperCase() - converte em MAIUSCULO
                // toLowerCase() - converte em minusculo

            let operacao = opcao.toUpperCase();
            let resultado;
            
            
            //Chama a funcao que realizara os calculos matematicos
            if (resultado = calcular(numero1, numero2, operacao))
                console.log('O resultado e:' + resultado);
        });
    });

});

