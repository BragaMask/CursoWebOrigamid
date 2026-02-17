// Retorne no console todas as imagens do site
const selecionarImg = document.querySelectorAll('img');
console.log(selecionarImg);

// Retorne no console apenas as imagens que começaram com a palavra imagem
imagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagens);

// Selecione todos os links internos (onde o href começa com #)
links = document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const selecionarFirstH2 = document.querySelector('.animais-descricao h2');
console.log(selecionarFirstH2);

// Selecione o último p do site
const selecionarP = document.querySelectorAll('p');

console.log(selecionarP[--selecionarP.length]);
