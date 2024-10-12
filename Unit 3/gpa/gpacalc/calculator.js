// Get grades from the input box, clean and format them
function getGrades(inputSelector) {
    // get grades from the input box
    const grades = document.querySelector(inputSelector).value;
    // split them into an array (String.split(','))
    const gradesArray = grades.split(",");
    // clean up any extra spaces, and make the grades all uppercase (Array.map())
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
    console.log(cleanGrades);
    // return grades
    return cleanGrades;
  }
  
  // Lookup grade to convert letter grades to GPA points
  function lookupGrade(grade) {
    let points = 0;
    // Convert letter grades to GPA points (ignore + and - for now)
    if (grade === "A") {
      points = 4;
    } else if (grade === "B") {
      points = 3;
    } else if (grade === "C") {
      points = 2;
    } else if (grade === "D") {
      points = 1;
    }
    return points;
  }
  
  // Calculate GPA by converting grades to points and averaging them
  function calculateGpa(grades) {
    const gradePoints = grades.map((grade) => lookupGrade(grade));
    const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;
    return gpa.toFixed(2);  // Round to 2 decimal places
  }
  
  // Output the calculated GPA to the specified selector in the HTML
  function outputGpa(gpa, selector) {
    const outputElement = document.querySelector(selector);
    outputElement.innerText = `Your GPA is: ${gpa}`;
  }
  
  // Handle button click, calculate the GPA, and display the result
  function clickHandler() {
    const grades = getGrades("#grades");
    const gpa = calculateGpa(grades);
    outputGpa(gpa, "#output");
  }
  
  // Add event listener to the "Calculate GPA" button
  document.querySelector("#submitButton").addEventListener("click", clickHandler);
  