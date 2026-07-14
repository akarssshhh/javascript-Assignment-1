// Reverse an Array without using .reverse()

let numbers = [1, 2, 3, 4, 5];

let reversedArray = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    reversedArray.push(numbers[i]);
}

console.log("Original Array:", numbers);
console.log("Reversed Array:", reversedArray);