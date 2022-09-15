/**************************************************************************
 *  Objetivo:     Arquivo que contem todas as funcoes para calculos matematicos
 *  Autor:        Marcel
 *  Data Criacao: 01/08/2022
 *  Versao: 1.0
 *******************************************************************/

//Metodo tradicional de ser criar uma funcao
    //Formato menos utilizado no JS
/*    
function calcular (valor1, valor2, opcaoCalculo)
{
    //Criando variaveis locais para receber o conteudo dos argumentos
        //que foram encaminhados na function
    let numero1 = valor1;
    let numero2 = valor2;
    let operacao = opcaoCalculo.toUpperCase();
    let resultado;
    let erro = false;
    

    // isNaN() - funcao para validar se o conteudo de uma variavel eh numero ou nao
    if (isNaN(numero1) || isNaN(numero2))
    {
        console.log ('ERRO: Somente sera possivel calcular se forem digitados numeros');
        erro = true;
    }else
    {

        /*
        if(operacao == 'SOMAR' || operacao == '+')
            resultado = numero1 + numero2;
        else if (operacao == 'SUBTRAIR' || operacao == '-')
            resultado = numero1 - numero2;
        else if (operacao == 'MULTIPLICAR' || operacao == '*')
            resultado = numero1 * numero2;
        else if (operacao == 'DIVIDIR' || operacao == '/')
            resultado = numero1 / numero2;
        else
        {
            resultado = 'ERRO: Nao foi escolhida uma operacao valida';
            erro = true;
        }*/
        /*
        switch (operacao)
        {
            case 'SOMAR': case '+':
                resultado = numero1 + numero2;
                break;
            case 'SUBTRAIR': case '-':
                resultado = numero1 - numero2;
                break;
            case 'MULTIPLICAR': case '*':
                resultado = numero1 * numero2;
                break;
            case 'DIVIDIR': case '/':
                if (numero2 == 0)
                {
                    console.log('ERRO: Nao e possivel realizar a divisao por 0');
                    erro = true;
                }
                else 
                    resultado = numero1 / numero2;
                break;
            default:
                console.log('ERRO: Nao foi escolhida uma operacao valida');
                erro = true;
        }
    }

    if (erro)
        return false;
    else
        return resultado;

}
*/

//Metodo de criacao de funcao utilizando o padrao de Call Back
    // Formato bastante utilizado
const calcular = function(valor1, valor2, opcaoCalculo)
{
    //Criando variaveis locais para receber o conteudo dos argumentos
        //que foram encaminhados na function
        let numero1 = valor1;
        let numero2 = valor2;
        let operacao = opcaoCalculo.toUpperCase();
        let resultado;
        let erro = false;
            
        // isNaN() - funcao para validar se o conteudo de uma variavel eh numero ou nao
        if (isNaN(numero1) || isNaN(numero2))
        {
            console.log ('ERRO: Somente sera possivel calcular se forem digitados numeros');
            erro = true;
        }else
        {
    
            /*
            if(operacao == 'SOMAR' || operacao == '+')
                resultado = numero1 + numero2;
            else if (operacao == 'SUBTRAIR' || operacao == '-')
                resultado = numero1 - numero2;
            else if (operacao == 'MULTIPLICAR' || operacao == '*')
                resultado = numero1 * numero2;
            else if (operacao == 'DIVIDIR' || operacao == '/')
                resultado = numero1 / numero2;
            else
            {
                resultado = 'ERRO: Nao foi escolhida uma operacao valida';
                erro = true;
            }*/
    
            switch (operacao)
            {
                case 'SOMAR': case '+':
                    resultado = somar(numero1, numero2);
                    break;
                case 'SUBTRAIR': case '-':
                    resultado = subtrair(numero1, numero2);
                    break;
                case 'MULTIPLICAR': case '*':
                    resultado = multiplicar(numero1, numero2);;
                    break;
                case 'DIVIDIR': case '/':
                    if (numero2 == 0)
                    {
                        console.log('ERRO: Nao e possivel realizar a divisao por 0');
                        erro = true;
                    }
                    else 
                        resultado = dividir(numero1, numero2);;
                    break;
                default:
                    console.log('ERRO: Nao foi escolhida uma operacao valida');
                    erro = true;
            }
        }
    
        if (erro)
            return false;
        else
            return resultado.toFixed(2);
    
}

//Modelo de funcao Arrow Function
const somar = (valor1, valor2) => 
    parseFloat(valor1) + parseFloat(valor2);

    
const subtrair = (valor1, valor2) => parseFloat(valor1) - parseFloat(valor2);
const multiplicar = (valor1, valor2) => parseFloat(valor1) * parseFloat(valor2);
const dividir = (valor1, valor2) => parseFloat(valor1) / parseFloat(valor2);


//As funcoes que serao importadas em outros projetos, precisam obrigatoriamente
    //serem incluidas no module.exports.
    //As funcoes que nao forem incluidas no module.exports, ela ir[a funcionar 
        //apenas localmente neste arquivo
module.exports = {
    calcular
}

