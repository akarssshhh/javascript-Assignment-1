let arr = [10,20,30,40,50];

console.log(arr);
console.log(`first number ${arr[0]}`);
console.log(`last number ${arr[-1]}`);
console.log(`Array length ${arr.length}`);

// pushing Element

arr.push(60);
console.log("after push");
console.log(arr);

// popping element

arr.pop();
console.log("after pop");
console.log(arr);

// unshift


arr.unshift(5);
console.log(arr);

// shift


arr.shift();
console.log(arr);