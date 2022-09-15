/*******************************************************************
 *  Objetivo: Criacao de funcoes para calcular uma tabuada
 *  Data: 04/08/2022
 *  Autor: Marcel
 *  Versao: 1.0
 * *******************************************************************/




const calcularTabuada = function (numero1)
{
    let tabuada = numero1;
    let resultado;
    let cont = 0;
    
    /* While */
        console.log ('\n ********** Testando o While \n');
        while (cont <= 10)
        {
            resultado = tabuada * cont;
            console.log (tabuada + ' x ' + cont + ' = ' + resultado);
            //cont = cont + 1; 
            cont +=1;
            //cont ++;
        }


    /* FOR */
        console.log ('\n ********** Testando o FOR \n');
        for (cont = 0; cont <=10; cont++ )
        {
            resultado = tabuada * cont;
            console.log (tabuada + ' x ' + cont + ' = ' + resultado);
        }
}

module.exports = {
    calcularTabuada
}