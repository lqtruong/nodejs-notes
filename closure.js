function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();


function makeFunc() {
    var name = 'Mozilla1';
    function displayName() {
        console.log(name);
    }
    return displayName; // return a function
}

var myFunc = makeFunc(); // variable is a function reference
myFunc(); // closure programming

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

