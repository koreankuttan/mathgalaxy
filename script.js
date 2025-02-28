const questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { question: "What is 5 - 3?", options: ["1", "2", "3"], answer: "2" }
];

let currentQuestion = 0;

function loadQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question-text").innerText = q.question;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].answer) {
        alert("Correct! 🚀");
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            alert("You've completed the quiz! Check the leaderboard.");
            window.location.href = "leaderboard.html";
        }
    } else {
        alert("Try again! ❌");
    }
}

// Text-to-Speech Feature
function speakQuestion() {
    let msg = new SpeechSynthesisUtterance(document.getElementById("question-text").innerText);
    window.speechSynthesis.speak(msg);
}

window.onload = loadQuestion;
