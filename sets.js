const s = new Set([0, 1, 2, 3]);
console.log('size of entry: ' + s.size); // 4

for (const entry of s) {
    console.log(entry);
}
console.log('add 3, sets does not allow duplication. So not be added');
s.add(3); // will not be added
console.log('after add 3, size is the same')
for (const entry of s) {
    console.log(entry);
}

s.delete(0);
s.has(0); // false
console.log('after delete 0')
for (const entry of s) {
    console.log(entry);
}