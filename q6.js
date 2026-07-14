let number1 = 12;
let number2 = 45;
let number3 = 7;

if (number1 >= number2 && number1 >= number3 ) {
    console.log(`Largest of (${number1},${number2},${number3}) is ${number1}`);
    
} else if (number2 >= number1 && number2 >= number3)
    {
    console.log(`Largest of (${number1},${number2},${number3}) is ${number2}`);
}
else {
    console.log(`Largest of (${number1},${number2},${number3}) is ${number3}`);
}