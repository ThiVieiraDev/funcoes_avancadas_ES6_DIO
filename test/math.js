class Math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b);
        }, 5);
    }
}

module.exports = Math;

// class Math {
//     sum(a,b) {
//         return a + b;
//     }
// }
