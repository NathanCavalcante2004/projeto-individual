var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    usuarioModel.autenticar(email, senha)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                if (resultadoAutenticar.length == 1) {
                    console.log(resultadoAutenticar);

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json(resultadoAutenticar[0]);
                    }
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pegarVotacao(req, res) {
    var idJogador = req.params.idJogadorVar;

    usuarioModel.pegarVotacao(idJogador).then(function (resultado) {

        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res
                .status(401)
                .json({ mensagem: `Erro na pegar votação.` });
        }
    }).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function votar(req, res) {
    var qtdVotos = req.body.qtdVotosServer;
    var idJogador = req.body.idJogadorServer;
    
    usuarioModel.votar(qtdVotos, idJogador)
        .then(
            function (resultadovotar) {
                console.log(`\nResultados encontrados: ${resultadovotar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadovotar)}`); // transforma JSON em String

                if (resultadovotar.length == 1) {
                    console.log(resultadovotar);

                    if (resultadovotar.length == 1) {
                        console.log(resultadovotar);
                        res.json(resultadovotar[0]);
                    }
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}



function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer
    var idade = req.body.idadeServer
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var cep = req.body.cepServer;

    // Faça as validações dos valores


    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrar(nome, idade, email, senha, cep)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    autenticar,
    cadastrar,
    votar,
    pegarVotacao
}