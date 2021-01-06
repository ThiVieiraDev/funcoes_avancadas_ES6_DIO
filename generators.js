// Generators


const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj){
    console.log(value);
}


// function* hello(){
//     console.log('Hello');
//     yield "primeira pausa";
//     console.log('From');
//     yield "segunda pausa";
//     console.log('Function!');
// }
// const it = hello();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());