const profiles = new Map();
profiles.set('twitter', '@adalovelace');
profiles.set('facebook', 'adalovelace');
profiles.set('googleplus', 'ada');
for (const entry of profiles) {
    console.log(entry);
}

console.log('before delete: ' + profiles.size); // 3
profiles.has('twitter'); // true
profiles.get('twitter'); // "@adalovelace"
profiles.has('youtube'); // false
console.log('delete facebook'); // 3
profiles.delete('facebook');
profiles.has('facebook'); // false
profiles.get('facebook'); // undefined
console.log('after delete: ' + profiles.size); // 3
for (const entry of profiles) {
    console.log(entry);
}