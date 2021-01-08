// EventEmitter

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
    }
}


const users = new Users();
users.on('User logged', data => {
    console.log(data);
});
users.userLogged({ user: 'Thiago Vieira' });
users.userLogged({ user: 'Nelson Simões' });


/*
    com o método '.once' é utilizado somente o primeiro
*/

// const users = new Users();
// users.once('User logged', data => {
//     console.log(data);
// });
// users.userLogged({ user: 'Nelson Simões'});
// users.userLogged({ user: 'Thiago Vieira'});


/*
    com o método 'on' é utilizado várias vezes
*/

// const users = new Users();
// users.on('User logged', data => {
//     console.log(data);
// });
// users.userLogged({ user: 'Thiago Vieira'});

//----------------------------------------




/*
    Ao executar o node .\eventEmitter.js no pronpt de comando:
    Ao emitir o evento o meu emitter consumiu o conteudo.
*/

// const emitter = new EventEmitter();

// emitter.on('User logged', data => {
//     console.log(data);
// });
// emitter.emit('User logged', {user: 'Thiago Vieira'});