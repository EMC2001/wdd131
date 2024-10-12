//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`//the html string made from step
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");// set the innerHTML

document.querySelector("#myList").innerHTML = stepsHtml.join
("");

listTemplate(steps[0]);

