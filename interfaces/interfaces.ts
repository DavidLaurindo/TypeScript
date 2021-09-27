interface Humano{
    nome: string

    idade?: number//a "?" quer dizer que é um atributo opicional. não é obrigatório ter esse atributo.

    [prop: string]: any//quando não sabe qual o nome do atributo([prop]) e quando não sabe qual o tipo(any). [pop: string] a string significa que o nome passado será em string(não se nomeia atributos com outro tipo.)

    saudar(sobrenome: string):void;
}

function saudarComOla(pessoa: Humano){
    console.log('Olá, ' + pessoa.nome);
}

function mudarNome(pessoa: Humano){
    pessoa.nome = 'joana';
}

const pessoa: Humano = {
    nome: 'joão',
    idade: 27,
    saudar(sobrenome: string){
        console.log('Olá, meu nome é '
        + this.nome + ' ' + sobrenome)
    }
}
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({nome: 'Jonas', idade: 27})//erro porque o atributo idade não está na interface Humano.

//saudarComOla({nome: 'Cleitinho', idade: 27, qualquerNome: true});
pessoa.saudar('Skywalker');

//USANDO INTERFACES COM CLASSE:
class Cliente implements Humano{
    nome: string = '';
    ultimaCompra: Date = new Date;
    saudar(sobrenome: string){
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);