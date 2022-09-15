console.log('EXERCICIO PARA CALCULAR A MEDIA');

//Import da biblioteca readline (permite interagir 
//    com o usuario)
var readline = require('readline');

//Instancia o objeto para criar a interacao com o usuario
var entradaDados = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
});


/********
 *  Variaveis
 *      var - permite criar uma variavel de escopo global no projeto
 *          A variavel criada com var, tera existencia em todas as
 *          partes do projeto, ou seja, todas as funcoes terao
 *          acesso a esta variavel    
 *      
 *      let - permite criar uma variavel de escopo local
 *          A variavel criada com let, tera existencia somente
 *          na funcao que esta sendo utilizada
 * 
 *********/

//Entrada do nome do aluno
entradaDados.question('Digite o nome do aluno: \n', function (nome){
    //Declaracao de variavel local (let) e atribuindo um valor
    let nomeAluno = nome;
    //console.log('Nome do aluno: '+nomeAluno);

    //Entrada da Nota 1
    entradaDados.question('Entrar com valor da nota 1:\n', function(valor1){
        let nota1 = valor1;

        //Entrada da Nota 2
        entradaDados.question('Entrar com valor da nota 2:\n', function(valor2){
            let nota2 = valor2;

            //Entrada da Nota 3
            entradaDados.question('Entrar com valor da nota 3:\n', function(valor3){
                let nota3 = valor3;
                
                //Entrada da Nota 4
                entradaDados.question('Entrar com valor da nota 4:\n', function(valor4){
                    let nota4 = valor4;
                    let media;
                    let statusAluno;

                    /**
                     *  OPERADORES DE COMPARACAO
                     *      == (comparacao de teste logico)
                     *      != (diferenca de teste logico)
                     *      <  (menor)
                     *      >  (maior)
                     *      <= (menor ou igual) 
                     *      >= (maior ou igual)
                     * 
                     *  OPERADORES LOGICO
                     *      E           &&      AND
                     *      OU          ||      OR
                     *      NEGACAO     !       NOT
                     **/
                    
                    //Validacao para o nome do aluno
                    if(nomeAluno == ''){
                        console.log('Nome do aluno deve ser informado.');
                        entradaDados.close();
                    //Validacao para as notas    
                    }else if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log('E necessario informar todas as notas para o calculo.')
                        entradaDados.close();
                    }else{
                        //Para converter uma string e valor, podemos utilizar o parseInt ou parseFloat
                        //parseInt   - converte para inteiro
                        //parseFloat - converte para real
                        media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4))/4;

                        if (media >= 7.0){
                            statusAluno = 'APROVADO';    
                        }else if (media >= 4.0 && media <= 6.9){
                            statusAluno = 'EXAME';
                        }else{
                            statusAluno = 'REPROVADO';
                        }
                        
                        //toFixed() - permite limitar a qtde de casas decimais

                        console.log('O aluno ['+ nomeAluno +'], teve media '+ media.toFixed(1) + 
                        '\n Voce esta: '+statusAluno);

                        //Fecha o objeto entradaDados
                        entradaDados.close();
                    }
                });
            })
        });
    });
});