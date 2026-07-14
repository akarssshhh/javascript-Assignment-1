let a = 7;
let b = 9;

console.log("Before swap:");
console.log(`a=${a} and b=${b}`);

let temp=a;
a=b;
b=temp;
console.log("(After swap)");

console.log(`a=${a} and b${b}`);


// second way
console.log();

let x=4;
let y=8;

console.log("(before swap:)");
console.log(`x=${x} and y=${y}`);

[x,y]  =   [y,x]

console.log("After swap");
console.log(`x=${x} and y=b${y}`);
