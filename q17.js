let numbers = [10,20,30,40,50];
let searchelement = 30;
let found = false;
let index= -1;

for (let i = 0; i < numbers.length; i++) {
    
    if (searchelement===numbers[i]) {
        found = true;
        index=i;
        break;
    }
    
}
if (found) {
    console.log(`Element found at index ${index}`);
}
else(
    console.log(`Element not Found`)
    
)