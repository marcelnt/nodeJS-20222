/*
    Bibliotecas necessarias para criar uma API
        É uma biblioteca para criar aplicacoes em node no formato
        de API
            express - npm install express --save
        
        É uma biblioteca para manipular as permissoes do 
        protocolo http
            cors - npm install cors --save

        É uma biblioteca que permite manipular o corpo do 
        protocolo http
            body-parser - npm install body-parser --save
*/

//Import da biblioteca do express para criar a API
const express = require('express');

//Import da biblioteca do cors para manipular as permissoes do protocolo http
const cors = require('cors');

//Import da biblioteca do body-parser que irá manipular o corpo das requisicoes
    //do protocolo http
const bodyParser = require('body-parser');

//Import do arquivos de estados e cidades
const { getListEstados, getEstado } = require('./modulo/estados.js');
const {getCidades} = require ('./modulo/cidades.js');

//Cria um objeto chamado app que será especialista nas funcoes do express
const app = express();

// request  - receber dados
// response - devolve dados
app.use((request, response, next) => {
    //Permite especificar quem serao os IPs que podem acessar a API (* - significa todos)
    response.header('Access-Control-Allow-Origin', '*');

    //Permite especificar quais serao os verbos (metodos) que a API irá reconhecder
    response.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');

    //Estabelece que as permissoes acima serao representadas pelo cors
    app.use(cors());

    next();

});

//const jsonParser = bodyParser.json();

//EndPoint: Listagem de Estados
app.get('/estados', cors(), async function(request, response, next){
    
    //Recebe o array de estados
    let estados = getListEstados();

    //Cria uma variavel do tipo JSON
    let estadosJSON = {};

    if (estados){
        //Criamos uma chave chamada uf, para receber o array de estados
        estadosJSON.uf = estados;

        response.status(200);
        response.json(estadosJSON);
    }else{
        response.status(404);
        response.json('{message : "Nenhum item encontrado"}');
    }

});

//EndPoint: Busca informacoes de um estado pela sigla
app.get('/estado/:sigla', cors(), async function(request, response, next){
    //Recebe a sigla enviada por parametro no endpoint
    let sigla = request.params.sigla;
    //request.query.filtro
    //Chama a funcao que vai localizar o estado solicitado
    let estado = getEstado(sigla);

    if(estado)
    {
        response.status(200);
        response.json(estado);
    }else
        response.status(404);


});

//EndPoint: Listagem de Cidades
app.get('/cidades/:sigla', cors(), async function(request, response, next){
    //Recebe a sigla do estado encaminhado no endpoint
    let sigla = request.params.sigla;

    //Chama a funcao de cidades para buscar as cidades pelo estado
    let cidades = getCidades(sigla);

    let cidadesJSON = {};

    if(cidades)
    {
        cidadesJSON.city = cidades;
        response.status(200);
        response.json(cidadesJSON);
    }else
        response.status(404);

});

//Para que os endpoints possam estar funcionando, precisamos obrigatoriamente finalizar
//a API essa function, que representa o start da API.
app.listen(3030, function(){
    console.log('Servidor aguardando requisicoes.');
});