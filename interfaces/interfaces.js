"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'joana';
}
var pessoa = {
    nome: 'joão',
    idade: 27
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({nome: 'Jonas', idade: 27})//erro porque o atributo idade não está na interface Humano.
saudarComOla({ nome: 'Cleitinho', idade: 27, qualquerNome: true });
