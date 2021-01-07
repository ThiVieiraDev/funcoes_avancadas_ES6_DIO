// Promises
const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            //did something
            resolve('First data');
        }, 1500);
    });

const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
        // throw new Error('Ops');
        setTimeout(function () {
            //did something
            resolve('Second data');
        }, 1000);
    });


    /* Executa a promise que 'chegar' primeiro */ 
    Promise.race([doSomethingPromise(), doOtherThingPromise()])
    .then(data => {
        console.log(data);
    })

    /* Executa todas as promises ao mesmo tempo */
    // Promise.all([doSomethingPromise(), doOtherThingPromise()])
    // .then(data => {
    //     console.log(data[0].split(''));
    //     console.log(data[1].split(''));
    // })
    // .catch(err => {
    //     console.log(err);
    // })

// doSomethingPromise()
//     .then(data => {
//         console.log(data.split(''));
//         return doOtherThingPromise();
//     })
//     .then(data2 => console.log(data2.split('')))
//     .catch(error => console.log('Ops', error));

// doSomethingPromise()
//     .then(data => {
//         console.log(data);
//         return doOtherThingPromise();
//     })
//     .then(data2 => console.log(data2))
//     .catch(error => console.log('Ops', error));

// doSomethingPromise
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

/* Tipos de estados da Promise:
Pending - Quando está pendente execução
Fulfilled - Quando terminou de executar
Rejected - Quando ocorre algum erro
*/


// // callbacks
// function doSomething(callback) {
//     setTimeout(function () {
//         //did something
//         callback('First data');
//     }, 1000);
// }

// function doOtherThing(callback) {
//     setTimeout(function () {
//         //did something
//         callback('Second data');
//     }, 1000);
// }

// function doAll() {
//     try {
//         doSomething(function (data) {
//             var processedData = data.split('');
//             try {
//                 doOtherThing(function (data2) {
//                     var processedData2 = data2.split('');

//                     try {
//                         setTimeout(function () {
//                             console.log(processedData, processedData2);
//                         }, 1000);
//                     } catch (err) {
//                         // handle error
//                     }
//                 });
//             } catch (err) {
//                 // handle error
//             }
//         });
//     } catch (err) {
//         // handle error
//     }
// }
// doAll();