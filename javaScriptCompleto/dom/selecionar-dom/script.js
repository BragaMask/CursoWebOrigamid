// Verifique a distância da primeira imagem
// em relação ao topo da página
const imgs = document.querySelector('img');
console.log(imgs.offsetTop);

// Retorne a soma da largura de todas as imagens
function LarguraTotal() {
    let soma = 0;
    const imagens = document.querySelectorAll('img');
    imagens.forEach((imagem) => {
        soma = soma + imagem.offsetWidth;
    })
    console.log(soma);
}

window.onload = function() {
    LarguraTotal();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link) => {
    linkWidth = link.offsetWidth;
    linkHeight = link.offsetHeight;

    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, 'Possui boa acessibilidade');
    } else {
        console.log(link, 'Não possui boa acessibilidade');
    }
})
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const tamanho = window.matchMedia('(max-width: 720px)').matches;

if(tamanho){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile')
}