let marks = 84;

if (marks<0 ||marks>100) {
    console.log("invalid marks");
} 
else if (marks>=90){
    console.log(`${marks} = Grade: A`);
}
else if (marks>=80){
     console.log(`${marks} = Grade: B`);
}
else if (marks>=70){
     console.log(`${marks} = Grade: c`);
}
else if (marks>=60){
     console.log(`${marks} = Grade: d`);
}
else  console.log(`${marks} = Grade: Fail`);
