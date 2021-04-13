const numbers = [2, 6, 7, 8, 1];
const even = numbers.filter(n => {
    if (n % 2 == 0) {
        console.log(n + ' is even');
        return true;
    }
});
console.log(even);

// anothe way
console.log('another way');
const even_2 = numbers.filter(n => n % 2 == 0);
console.log(even_2);