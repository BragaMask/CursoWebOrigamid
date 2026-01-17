
//Variaveis
/*
let nome = "João";  // A variável pode ser modificada
const idade = 25; // A variável não pode ser modificada
var cidade = "São Paulo"; // Variável com escopo global (um coringa)
*/

const nav = document.querySelector("nav");
const produtos = document.querySelector(".produtos a");

console.log(nav);
console.log(produtos);

console.log(produtos.href);

nav.style.backgroundColor = "cyan";
produtos.style.color = "red";
nav.style.padding = "10px";