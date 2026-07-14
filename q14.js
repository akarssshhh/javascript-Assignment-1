let numbers = [10, 20, 30, 40, 50];

console.log("Using for loop");

for (let i = 0; i < numbers.length; i++) {
    console.log(`Index ${i}: ${numbers[i]}`);
}

console.log('====================================');
console.log();
console.log('====================================');

console.log("using for.....of");

for(let values of numbers){
    console.log(values);
}
    