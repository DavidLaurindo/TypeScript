"use strict";
//VARIÁVEIS EM TYPESCRIPT:
//Maneira implícita:
//Strings
var nome = 'João'; //nesse momento a variável só aceitará Strings
console.log(nome);
//nome = 28; //vai dar erro porque essa variável só irá aceitar String.
//numbers
var idade = 27;
//idade = 'ana'; mesma coisa. a diferencia é que pode ser int ou float. sendo number vai dar certo.
idade = 27.5;
console.log(idade);
//boolean
var possui = false; //nesse momento a variável so aceitará boolen
//Maneira explícita:
var minhaIdade;
minhaIdade = 27; //Dessa maneira não é um number(é um tipo dinâmico). EX:
console.log(typeof minhaIdade);
minhaIdade = 'minha idade é 27';
console.log(typeof minhaIdade); //Mudou para String por ser uma variável dinâmica.(isso é conhecido como any).
var maneiraExplicita = 'nome'; //o correto ao se declarar uma variável.
var numeroExplicito = 28; //tudo minúsculo.
var booleanExplicita = true; //ETC...
//Array
var hobbies = ['cozinhar', 'esportes']; //esse arrayt será somente para String
console.log(hobbies[0]);
console.log(typeof hobbies);
var hobbiesExplicitos = ['nomes', 3, 'nome3'];
hobbiesExplicitos = [20];
console.log(hobbiesExplicitos);
console.log(typeof hobbiesExplicitos); //sempre sera object.
//TUPLAS:
var endereco = ['Av nome', 99]; //tem que explicitar na mesma ordem e quantidade senãi dará erro.
console.log(endereco);
endereco = ['rua principal', 8888];
console.log(endereco); //terá que enviar dados de acordo com a tupla(quantidade e ordem).
//ENUM:
var cor;
(function (cor) {
    cor[cor["cinza"] = 0] = "cinza";
    cor[cor["verde"] = 1] = "verde";
    cor[cor["azul"] = 100] = "azul";
    cor[cor["amarelo"] = 101] = "amarelo"; //representa 101 (vai seguir a apartir do anterior).
})(cor || (cor = {}));
var minhaCor = cor.verde;
console.log(minhaCor);
console.log(cor.amarelo);
//TIPO ANY:
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
