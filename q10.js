let number = 5;
let factorial = 1;

if (number === 0 ){
    console.log(`0! = 1`);
}
else{
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log(`${number}! = ${factorial}`);
    
}