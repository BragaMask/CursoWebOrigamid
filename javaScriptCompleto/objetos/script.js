//prototype -> objeto adicionado a uma função quando a mesma é criada.

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.morreu = function(){
  console.log('acho que ele morreu');
}

const p1 = new Pessoa('Luiz', 'Otávio');

console.log(Pessoa.prototype); //retorna o objeto 
console.log(p1.prototype); //undefined

console.log(p1.morreu());

//construtores nativos - Objetos, Funções, Números, Strings, etc... possuem o prototype, ou seja, possuem métodos e propriedades.

const pais = 'Brasil'; 
const cidade = new String('Rio'); //String é um construtor nativo, ou seja, tem o prototype.