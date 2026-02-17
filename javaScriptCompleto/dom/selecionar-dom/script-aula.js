//Id - getElementById seleciona e retorna elementos do DOM
//Seleciona pelo ID
const animaisSection = document.getElementById("animais");

console.log(animaisSection);

//Quando não existe ele retorna nulo
const naoExiste = document.getElementById("diasiddsa");
console.log(naoExiste);

// Classe e Tag - getElementsByClassName e getElementByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

//Seleciona pela classe, retorna uma HTMLCollection
const gridSection =  document.getElementsByClassName("grid-section");
console.log(gridSection);
console.log(gridSection.length);
//Retorna o primeiro elemento
console.log(gridSection[0]);

//Seletor Geral Único - querySelector retorna o primeiro elemento que combinar com o seu seletor CSS
const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"');
console.log(linksInternos.href);

//Seletor Geral Lista - querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);
console.log(animaisImg[2]);

//HTMLCollection vs NodeList - A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

//Array-Like - HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Arra forEach() por exemplo, existe apenas em NodeList

gridSectionNode.forEach(function(item, index) {
    console.log(item);
    //ou
    console.log(index);
})

const arrayGrid = Array.from(gridSectionHTML);
arrayGrid.forEach(function(item) {
    console.log(item);
})

