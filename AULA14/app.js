//Import da biblioteca do express para criar a API
const express = require('express');

//Import da biblioteca do cors para manipular as permissoes do protocolo http
const cors = require('cors');

//Import da biblioteca do body-parser que irá manipular o corpo das requisicoes
    //do protocolo http
const bodyParser = require('body-parser');

//import do arquivo de livros
const { getLivros } = require ('./modulo/livros.js');

//Cria um objeto chamado app que será especialista nas funcoes do express
const app = express();

app.use((request, response, next) => {
    //Permite especificar quem serao os IPs que podem acessar a API (* - significa todos)
    response.header('Access-Control-Allow-Origin', '*');

    //Permite especificar quais serao os verbos (metodos) que a API irá reconhecder
    response.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');

    //Estabelece que as permissoes acima serao representadas pelo cors
    app.use(cors());

    next();

});

//EndPoint para buscar os livros
app.get('/livros/:nome', cors(), async function(request, response, next){
    //Recebe a variavel que será enviada na requisiscao por parametro de URL
    let nomeLivro = request.params.nome;

    //Chama a funcao e encaminha a palavra chave
    let livros = getLivros(nomeLivro);

    if(livros)
    {
        response.status(200);
        response.json(livros);
    }else
        response.status(404);
        

});

//EndPoint para filtar os livros 
app.get('/livros/', cors(), async function(request, response, next){
    
    //Recebe a a variavel nome por QueryString (indicada quando precisamos criar filtros)
    let nomeLivro = request.query.nome;
    
    //Chama a funcao e encaminha a palavra chave
    let livros = getLivros(nomeLivro);

    if(livros)
    {
        response.status(200);
        response.json(livros);
    }else
        response.status(404);
        
});

app.listen(8080, function(){
    console.log('Servidor aguardando requisicoes.');
});