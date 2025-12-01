let health = 100;

const healthDisplay = document.getElementById("health-value");
const attackBtn = document.getElementById("attack-btn");

attackBtn.addEventListener("click", function () {
    if (health > 0) {
        health -= 20;
        healthDisplay.textContent = health;
    }

    if (health == 0) {
        healthDisplay.textContent = 0;
        alert("Broski just passed out");
    }
});

let level = 5;

const levelDisplay = document.getElementById("level-riser");
const levelBtn = document.getElementById("level-btn");

levelBtn.addEventListener("click", function () {
    if (level > 0){
        level += 1;
        levelDisplay.textContent = level;
    }
});
