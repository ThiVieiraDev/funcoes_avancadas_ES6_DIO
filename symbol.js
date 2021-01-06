// Symbols

const uniqueId = Symbol('Hello');

// Well know symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

console.log(arr[Symbol.iterator]().next());

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };

    }
};

const arr2 = [...obj];
console.log(arr2);

// for (let value of str){
//     console.log(value);
// }

/* mesma coisa que While, porém com foreach
for (let value of arr) {
    console.log(value);
}
*/
// const it = arr[Symbol.iterator]();

// while (true){
//     let {value, done} = it.next()
    
//     if(done){
//         break;
//     }
//     console.log(value);
// }

// const obj = {
//     [Symbol.iterator](){

//     }
// }

// const obj = {
//     [uniqueId]: 'Hello',
//     uniqueId2: 'Hello2',
//     _id: 'teste'
// };

// console.log(obj);

// const uniqueId = Symbol('Hello');
// const uniqueId2 = Symbol('Hello');
// console.log(uniqueId === uniqueId2);