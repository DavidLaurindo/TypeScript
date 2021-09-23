//VARIÁVEIS EM TYPESCRIPT:

//Maneira implícita:

//Strings
let nome = 'João';//nesse momento a variável só aceitará Strings
console.log(nome);
//nome = 28; //vai dar erro porque essa variável só irá aceitar String.

//numbers
let idade = 27;
//idade = 'ana'; mesma coisa. a diferencia é que pode ser int ou float. sendo number vai dar certo.
idade = 27.5;
console.log(idade);

//boolean
let possui = false;//nesse momento a variável so aceitará boolen


//Maneira explícita:

let minhaIdade;
minhaIdade = 27;//Dessa maneira não é um number(é um tipo dinâmico). EX:
console.log(typeof minhaIdade);
minhaIdade = 'minha idade é 27';
console.log(typeof minhaIdade);//Mudou para String por ser uma variável dinâmica.(isso é conhecido como any).

let maneiraExplicita: string = 'nome';//o correto ao se declarar uma variável.
let numeroExplicito: number = 28;//tudo minúsculo.
let booleanExplicita: boolean = true//ETC...

//Array
let hobbies = ['cozinhar', 'esportes'];//esse arrayt será somente para String
console.log(hobbies[0]);
console.log(typeof hobbies);

let hobbiesExplicitos: any[] = ['nomes', 3, 'nome3'];
hobbiesExplicitos = [20];
console.log(hobbiesExplicitos);
console.log(typeof hobbiesExplicitos);//sempre sera object.

//TUPLAS:

let endereco: [string, number] = ['Av nome', 99];//tem que explicitar na mesma ordem e quantidade senãi dará erro.
console.log(endereco);

endereco = ['rua principal', 8888];
console.log(endereco);//terá que enviar dados de acordo com a tupla(quantidade e ordem).

//ENUM:

enum cor{
    cinza, //representa 0
    verde,// representa 1
    azul = 100,//representa 100
    amarelo//representa 101 (vai seguir a apartir do anterior).
}
let minhaCor: cor = cor.verde;
console.log(minhaCor);
console.log(cor.amarelo);

//TIPO ANY:

let carro:any = 'BMW';
console.log(carro);
carro = {marca:'BMW', ano:2019};
console.log(carro);