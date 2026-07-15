let numbers = [10,20,30,40,40,50,10];
let unique = [];

for (let i = 0; i < numbers.length; i++) {
    if (!unique.includes(numbers[i])) {
        unique.push(numbers[i])
    }
}
console.log(`original array: ${numbers}`);

console.log (`unique: ${unique}`);
