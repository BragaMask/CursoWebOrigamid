// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkExternos = document.querySelectorAll('a[href^="#"]')

function handleLink(event) {
    event.preventDefault();
    linkExternos.forEach((link) => {
        link.classList.remove('ativo');
    })
    this.classList.add('ativo');
}

linkExternos.forEach((link) => {
    link.addEventListener('click', handleLink);
})
// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
    console.log(event.currentTarget);
}

todosElementos.forEach((elemento) =>{
    elemento.addEventListener('click', handleElemento);
})


