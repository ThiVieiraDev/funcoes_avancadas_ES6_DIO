// Destructuring Assignment
var arr = [{ name: 'Apple', type: 'friot' }];

var [{ name: fruitName }] = arr;
console.log(name);
var [{ name }] = arr;
console.log(name);

// function

//função recebendo objeto como parâmetro
function sum ({a, b}) {
  return a + b;
}
console.log(sum({a: 5, b: 5}));

//função recebendo array como parâmetro
function sum ([a, b]) {
  return a + b;
}
console.log(sum([5, 5]));




/* 
Rest e Spread Operator

*Rest* permite que uma função receba um número indefinido de parâmetros e spread permite definir um número indefinido de parâmetros. Os operadores rest e spread permitem trabalhar com múltiplos parâmetro em funções.
*/