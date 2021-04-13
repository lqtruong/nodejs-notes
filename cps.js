function add(a, b) {
    return a + b;
}

// callback function
function add_1(a, b, callback) { // This is a  sync cps function
    callback(a + b);
}

console.log('before');
add_1(1, 2, result => console.log('Result: ' + result));
console.log('after');