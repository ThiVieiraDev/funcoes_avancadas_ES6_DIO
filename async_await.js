// ES7 - Async / Await

const asyncTimer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });


// Processou as duas promises ao mesmo tempo, ou "em paralelo"
const simpleFunc = async () => {
    const data = await Promise.all([
        asyncTimer(),
        fetch('/data.json').then(resStream => resStream.json())
    ]);
    return data;
};

// Tratando com erro
simpleFunc()
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });


// Verificando o retorno da Promise como resolvida ou fulfilled
// console.log(simpleFunc());

//exibindo o dado da promise async
// simpleFunc().then(data => {
//     console.log(data);
// })