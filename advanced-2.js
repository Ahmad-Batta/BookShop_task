const names = ["yousef" , "Ahmad" , "Abdullah" , "zaid"];
const scores = [54 , 45, 67 , 89];

const addBtn = document.querySelector("#add_btn");
addBtn.addEventListener("click", addScore);
const resultsBtn = document.querySelector("#results_btn");
resultsBtn.addEventListener("click", displayResults);
const scoresBtn = document.querySelector("#scores_btn");
scoresBtn.addEventListener("click", displayScores);

function addScore() {

    const nameInput = document.querySelector("#name");
    const scoreInput = document.querySelector("#score");

    const name = nameInput.value;
    const score = scoreInput.value;

    if (name == "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score");
        return;
}
names.push(name);
scores.push(score);

nameInput.value = "";
scoreInput.value = "";
nameInput.focus();
}


function displayResults() {
    if (scores.length === 0) 
        return;

    let sum = 0;
    let highScore = scores[0];
    let highName = names[0];

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
        if (scores[i] > highScore) {
            highScore = scores[i];
            highName = names[i];
        }
    }

    const average =sum / scores.length;

    const resultsDiv = document.querySelector("#results");
    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <p>Average score = ${average}</p>
        <p>High score = ${highName} with a score of ${highScore}</p>
    `;

}

function displayScores() {
    const tableBody = document.querySelector("#scores_table tbody");
    tableBody.innerHTML = ""; 

    for (let i = 0; i < names.length; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${names[i]}</td><td>${scores[i]}</td>`;
        tableBody.appendChild(row);
    }

}


document.querySelector("#add_btn").addEventListener("click", addScore);
document.querySelector("#results_btn").addEventListener("click", displayResults);
document.querySelector("#scores_btn").addEventListener("click", displayScores);
document.querySelector("#name").focus();





