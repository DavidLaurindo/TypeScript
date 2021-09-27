"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'joana';
}
var pessoa = {
    nome: 'joão',
    idade: 27,
    saudar: function (sobrenome) {
        console.log('Olá, meu nome é '
            + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({nome: 'Jonas', idade: 27})//erro porque o atributo idade não está na interface Humano.
//saudarComOla({nome: 'Cleitinho', idade: 27, qualquerNome: true});
pessoa.saudar('Skywalker');
//USANDO INTERFACES COM CLASSE:
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    Cliente.prototype.saudar = function (sobrenome) {
        console.log("Ol\u00E1, meu nome \u00E9 " + this.nome + " " + sobrenome);
    };
    return Cliente;
}());
var meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
