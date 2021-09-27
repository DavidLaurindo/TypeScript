interface Humano{
    nome: string
    idade?: number//a "?" quer dizer que é um atributo opicional. não é obrigatório ter esse atributo.
    [prop: string]: any//quando não sabe qual o nome do atributo([prop]) e quando não sabe qual o tipo(any). [pop: string] a string significa que o nome passado será em string(não se nomeia atributos com outro tipo.)
}

function saudarComOla(pessoa: Humano){
    console.log('Olá, ' + pessoa.nome);
}

function mudarNome(pessoa: Humano){
    pessoa.nome = 'joana';
}

const pessoa = {
    nome: 'joão',
    idade: 27
}
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({nome: 'Jonas', idade: 27})//erro porque o atributo idade não está na interface Humano.

saudarComOla({nome: 'Cleitinho', idade: 27, qualquerNome: true});