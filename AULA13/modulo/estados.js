/* *********************************************************************
* Objetivo: Obter uma lista de estados
* Data: 29/08/2022  
* Autor: Marcel
* **********************************************************************/

//Simulando o resultado de uma API 
var estados = [
    {
        sigla : 'SP',
        nome  : 'Sao Paulo'
    },
    {
        sigla : 'AC',
        nome  : 'Acre'
    },
    {
        sigla : 'RJ',
        nome  : 'Rio de Janeiro'
    },
    {
        sigla : 'BA',
        nome  : 'Bahia'
    },
    {
        sigla : 'CE',
        nome  : 'Ceará'
    },
    {
        sigla : 'MG',
        nome  : 'Minas Gerais'
    },
    {
        sigla : 'GO',
        nome  : 'Goias'
    },
    {
        sigla : 'SC',
        nome  : 'Santa Catarina'
    }
];

//Retorna todos os estados pela sigla
const getListEstados = function(){
    let listaEstados = [];
    erro = true;

    estados.forEach(item => {
        listaEstados.push(item.sigla);
        erro = false;
    });

    if (erro)
        return false;
    else
        //JSON.stringify - converte um array[] para JSON {}
        return listaEstados;
};

//Retorna os dados de um estado tendo como base a sigla
const getEstado = function(siglaEstado){
    //Converte a chegada da string em amiusculo para realizar a busca
    let sigla = siglaEstado;
    //Cria um objeto do tipo JSON
    let estado = {};
    let erro = true;

    //if(sigla != undefined)
    if(typeof(sigla) != 'undefined')
    {
        //Tratamento para validacao de sigla vazia e com diferenca de caracteres
        if (sigla != ''  && sigla.length == 2 )
        {
            estados.forEach (item => {
                //Localiza um item no array (indexOf())
                if(item.sigla.indexOf(sigla.toUpperCase()) == 0)
                {
                    //Criamos as chaves uf e descricao para enviar pelo JSON
                    estado.uf = item.sigla,
                    estado.descricao = item.nome
                    erro = false;
                }
            });
        }
    }

    if(erro)
        return false;
    else    
        return estado;

};

module.exports = {
    getListEstados,
    getEstado

};

