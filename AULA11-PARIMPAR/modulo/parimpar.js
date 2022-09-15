/***************************************************************************
 * Objetivo: Modulo para separar uma sequencia de numeros pares e impares
 * Data: 29/08/2022
 * Autor: Marcel
 * 
 ***************************************************************************/

//Retorna uma sequencia de numeros Pares
const getPares = function(numero1, numero2){
    let numeroInicial = parseInt(numero1);
    let numeroFinal = parseInt(numero2);
    let pares = [];
    let erro = true;
    
    while (numeroInicial <= numeroFinal)
    {
        if(numeroInicial % 2 == 0)
        {
            pares.push(numeroInicial);
            erro = false;
        }    
        numeroInicial +=1;
    }
    if (erro)
        return false;
    else
        return pares;
}


//Retorna uma sequencia de numeros Impares
const getImpares = function(numero1, numero2){
    let numeroInicial = parseInt(numero1);
    let numeroFinal = parseInt(numero2);
    let impares = [];
    let erro = true;
    
    while (numeroInicial <= numeroFinal)
    {
        if(numeroInicial % 2 != 0)
        {
            impares.push(numeroInicial);
            erro = false;
        }    
        numeroInicial +=1;
    }
    if (erro)
        return false;
    else
        return impares;
}


//Retorna uma sequencia de numeros Impares
const getParesImpares = function(numero1, numero2){
    let numeroInicial = parseInt(numero1);
    let numeroFinal = parseInt(numero2);
    let pares = [];
    let impares = [];
    let paresImpares = [];


    //Chama as funcoes que separam os pares e impares
    pares = getPares(numeroInicial, numeroFinal);
    impares = getImpares(numeroInicial, numeroFinal);

    paresImpares = [pares, impares];
    
    return paresImpares;
}


//console.log(getPares(1,10));

//console.log(getImpares(1,10));

console.log(getParesImpares(1,10));