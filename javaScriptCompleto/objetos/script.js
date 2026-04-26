//Native, Host e User

//Native: São os objetos nativos do JavaScript, como Array, Object, String, etc. Eles são parte da linguagem e estão disponíveis em qualquer ambiente JavaScript.
//Exemplos: Object, Array, String, Number, Boolean, Function...

//Host: São os objetos fornecidos pelo ambiente onde o JavaScript está sendo executado, como o navegador ou o Node.js. Eles permitem que o JavaScript interaja com o ambiente e realizem tarefas específicas.
//Exemplos: NodeList, HTMLCollection, Document, Window, XMLHttpRequest...

//Objetos do user, são os objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa.

//API: Aplication Programming Interface, é um conjunto de regras e especificações que permitem que diferentes softwares se comuniquem entre si. No contexto do JavaScript, as APIs são fornecidas pelos ambientes de execução (navegadores, Node.js) e permitem que os desenvolvedores acessem funcionalidades específicas, como manipulação de DOM, requisições HTTP, armazenamento local, etc.
//Exemplos: DOM API, Fetch API, LocalStorage API, Canvas API...

//Exercicios

// Liste 5 objetos nativos



const array = [1,2,3];
const string = "Hello World";
const boolean = true;
const number = 42;
const object = { name: "John", age: 30 };

// Liste 5 objetos do browser
const document = window.document;
const window = globalThis.window;
const navigator = window.navigator;
const location = window.location;
const history = window.history;
