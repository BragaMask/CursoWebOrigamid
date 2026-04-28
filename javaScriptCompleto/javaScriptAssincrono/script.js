//JavaScript Assincrono
//Sicrono - espera a tarefa ser concluida para passar para a proxima
//Move para a proxima tarefa antes da anterior terminar. O trabalho será executado num 'fundo' e quando terminar, será colocado na fila;

//Promises - é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.

const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if(condicao){
    resolve('Promessa resolvida');}
    else
    reject('error');
})

console.log(promessa)

//then() - O callback deste método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função resolve.

promessa.then(resolucao => {
    console.log(resolucao);
})

const promessa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promessa resolvida depois de um tempin');
    }, 1000);
})

promessa2.then(resolucao => {
    console.log(resolucao);
})

//catch() - adiciona um callback a promise que será ativado caso a mesma seja rejeitada.
//finally() - executará a função anonima assim que a promessa acabar. A diferença do finally é que ele será executado independente do resultado, se for resolvida ou rejeitada.
const promessa3 = new Promise((resolve, reject) => {
    let condicao = false;
    if(condicao){
        resolve('Promessa resolvida');
    } else {
        reject(Error('Promessa rejeitada'));
    }
})

promessa3.then(resolucao => {
    console.log(resolucao); //Se tudo der certo
}).catch(rejeicao => {
    console.log(rejeicao); //Se tudo der errado e kaboom
}).finally(() => {
    console.log('Promessa finalizada'); //Independente do resultado, a promessa foi finalizada
})