// arrays.js
const steps = ["one", "two", "three"];
const listTemplate = (step) => {
    console.log(steps.join());
    return steps;
};

const grades = ["A", "B", "A"];
function calculator(grade){
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}

// Correct function reference: change convertGradeToPoints to calculator
const gpaPoints = grades.map(calculator);
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
}, 0);  // Added initial value for reduce
const gpa = pointsTotal / gpaPoints.length;
console.log("GPA:", gpa);

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log("Lucky number index:", luckyIndex);

// Convert steps array into HTML list items
const stepsHtml = steps.map(step => `<li>${step}</li>`).join('');
document.querySelector("#myList").innerHTML = stepsHtml;  // Set the innerHTML
