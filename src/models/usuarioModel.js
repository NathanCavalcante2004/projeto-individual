var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * from usuario  where email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
 
function pegarVotacao(idJogador) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pegarVotacao(): ", idJogador)
    var instrucao = `
    select qtdVotos from jogadorFavorito where idJogador = '${idJogador}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome,idade,email,senha,cep) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, idade , email, senha ,cep) VALUES ('${nome}','${idade}' ,'${email}', '${senha}','${cep}' );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function votar(qtdVotos, idJogador) {
    Number(qtdVotos);
    var votosAtual = qtdVotos + 1
    var instrucao = `
        update jogadorFavorito set qtdVotos = '${votosAtual}' where idJogador = '${idJogador}';
    
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listar(){
    var instrucao =`
    select * from jogadorFavorito order by nome;`
    return database.executar(instrucao);
}
function cadastros(){
    var instrucao =`
    select count(idUsuario) as quantidade from usuario;`
    return database.executar(instrucao);
}


module.exports = {
    autenticar,
    cadastrar,
    votar,
    pegarVotacao,
    listar,
    cadastros
};