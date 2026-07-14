let student = {
    name: "Akarsshhh",
    age:26,
    city:"Mumbai",
    marks:[85, 90, 78, 88, 92]
}

console.log(`Name:  ${student.name}`);
console.log(`Age:   ${student.age}`);
console.log(`City:  ${student.city}`);
console.log(`Marks: ${student.marks}`);

let totalmarks=0;
for(let marks of student.marks){
    totalmarks += marks;
}

let averageMarks = totalmarks / student.marks.length;

let Grade;

if (averageMarks >=90) {
    Grade = "A";
}
else if (averageMarks >=80) {
    Grade = "B";
}
else if (averageMarks >=70) {
    Grade = "C";
}
else if (averageMarks >=60) {
    Grade = "D";
}
else {
    Grade = "Fail";
}

console.log(`TotalMarks: ${totalmarks}`);
console.log(`AverageMarks: ${averageMarks}`);
console.log(`Grade: ${Grade}`);
