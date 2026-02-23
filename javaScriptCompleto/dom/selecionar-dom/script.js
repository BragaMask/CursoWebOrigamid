const listaAnimais = document.querySelector('.animais-lista');

const heightTotal = listaAnimais.scrollHeight;
console.log(heightTotal);

//listaAnimais.clientHeight; - height + padding
//listaAnimais.offsetHeight; - height + padding + border
//listaAnimais.scrollHeight; - height total, mesmo dentro de scroll

const distanciaTopo = listaAnimais.offsetTop;
console.log(distanciaTopo);

const rect = listaAnimais.getBoundingClientRect();
console.log(rect.width);
//rect.height - tamanho do Height do elemento
//rect.width - tamanho do width do elemento

console.log(window.innerWidth);

const small = window.matchMedia('(max-width: 600px)').matches;

if (small) {
    console.log('usuario mobile')
} else {
    console.log('usuario desktop')
}

console.log(small)