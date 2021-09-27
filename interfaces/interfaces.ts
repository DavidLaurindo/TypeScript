interface Humano{
    nome: string
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