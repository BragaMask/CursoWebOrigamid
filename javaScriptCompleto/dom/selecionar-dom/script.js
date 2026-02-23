const img = document.querySelector('img');

function clicou(event) {
    console.log(event);
}
//img.addEventListener('click', clicou)

const imagensLista = document.querySelector('.animais-lista');

function callBackLista(event) {
    console.log(event.currentTarget);
    console.log(event.target);
}

imagensLista.addEventListener('click', callBackLista)

const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(event){
    event.preventDefault();
    console.log('Clicou');
}

linkExterno.addEventListener('click', handleLinkExterno)