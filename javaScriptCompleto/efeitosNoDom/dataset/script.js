//Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement
//dataset é uma propriedade de HTMLElement, essa propriedade é um objeo do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave/valor, com todos os atributos do elemento html que começarem com data-

const div = document.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]'); 
//Todos esses valores acima vão retornar a mesma div.

//Podemos adicionar novos atributos data-

div.dataset.height = 300;

//Podemos deletar também

delete div.dataset.width;

console.log(div.dataset);

//Data vs Class - A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada.

