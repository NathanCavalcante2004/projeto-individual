create database projetoIndividual;
use projetoIndividual;


create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
idade char(3),
email varchar(45),
senha varchar(45),
cep int
);

insert into usuario values
(null,"nathan","19","nathan@arrobinha.com","123","1234556"),
(null,"caio","28","caio@algortimos.com","222","654321");

create table jogadorFavorito(
idJogador int primary key auto_increment,
nome varchar(45),
qtdVotos char(10)
);

insert into jogadorFavorito values
(null,"rafael",0),
(null,"leo",0),
(null,"eduDracena",0),
(null,"durval",0),
(null,"danilo",0),
(null,"arouca",0),
(null,"elano",0),
(null,"ganso",0),
(null,"adriano",0),
(null,"neymar",0),
(null,"zeLove",0);

create table votacao(
fkUsuario int,constraint fkUsu foreign key(fkUsuario) references usuario(idUsuario),
fkJogador int,constraint fkJo foreign key(fkJogador) references jogadorFavorito(idJogador)
);



drop table jogadorFavorito;