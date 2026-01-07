// 1. Expanded Data List (30 Countries)
const allCountries = [
    { name: "United States", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
    { name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Germany", flag: "https://flagcdn.com/w320/de.png" },
    { name: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
    { name: "Brazil", flag: "https://flagcdn.com/w320/br.png" },
    { name: "India", flag: "https://flagcdn.com/w320/in.png" },
    { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { name: "France", flag: "https://flagcdn.com/w320/fr.png" },
    { name: "South Korea", flag: "https://flagcdn.com/w320/kr.png" },
    { name: "Italy", flag: "https://flagcdn.com/w320/it.png" },
    { name: "Spain", flag: "https://flagcdn.com/w320/es.png" },
    { name: "China", flag: "https://flagcdn.com/w320/cn.png" },
    { name: "Mexico", flag: "https://flagcdn.com/w320/mx.png" },
    { name: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
    { name: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
    { name: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
    { name: "Egypt", flag: "https://flagcdn.com/w320/eg.png" },
    { name: "Turkey", flag: "https://flagcdn.com/w320/tr.png" },
    { name: "Sweden", flag: "https://flagcdn.com/w320/se.png" },
    { name: "Norway", flag: "https://flagcdn.com/w320/no.png" },
    { name: "Netherlands", flag: "https://flagcdn.com/w320/nl.png" },
    { name: "Switzerland", flag: "https://flagcdn.com/w320/ch.png" },
    { name: "Portugal", flag: "https://flagcdn.com/w320/pt.png" },
    { name: "Greece", flag: "https://flagcdn.com/w320/gr.png" },
    { name: "Thailand", flag: "https://flagcdn.com/w320/th.png" },
    { name: "Vietnam", flag: "https://flagcdn.com/w320/vn.png" },
    { name: "Indonesia", flag: "https://flagcdn.com/w320/id.png" },
    { name: "Ukraine", flag: "https://flagcdn.com/w320/ua.png" },
    { name: "Poland", flag: "https://flagcdn.com/w320/pl.png" }
];

// Game State Variables
let gameCountries = [];
let currentQuestionIndex = 0;
let score = 0;
const TOTAL_QUESTIONS = 25;

// Start the game initially
restartGame();

function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    
    // Shuffle the full list and slice the first 25 for this game round
    // This ensures no repeats in a single game
    gameCountries = [...allCountries].sort(() => Math.random() - 0.5).slice(0, TOTAL_QUESTIONS);
    
    // UI Resets
    document.getElementById("end-screen").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
    
    loadQuestion();
}

function loadQuestion() {
    // Check if game is over
    if (currentQuestionIndex >= TOTAL_QUESTIONS) {
        showEndScreen();
        return;
    }

    // Update Stats UI
    document.getElementById("progress-text").innerText = `Question: ${currentQuestionIndex + 1} / ${TOTAL_QUESTIONS}`;
    document.getElementById("score-text").innerText = `Score: ${score}`;
    document.getElementById("message").innerText = "";

    // Get current country
    const correctCountry = gameCountries[currentQuestionIndex];

    // Set Image
    document.getElementById("flag").src = correctCountry.flag;

    // Create Options: 1 Correct + 3 Wrong
    let options = [correctCountry.name];
    
    while (options.length < 4) {
        // Pick random wrong answer from the FULL list
        let randomWrong = allCountries[Math.floor(Math.random() * allCountries.length)].name;
        if (!options.includes(randomWrong)) {
            options.push(randomWrong);
        }
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    // Render Buttons
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    options.forEach(opt => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(btn, opt, correctCountry.name);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(btn, selected, correct) {
    // Disable all buttons to prevent double clicking
    const btns = document.querySelectorAll("#options button");
    btns.forEach(b => b.disabled = true);

    if (selected === correct) {
        btn.classList.add("correct");
        score++;
        document.getElementById("message").innerText = "✅ Correct!";
        document.getElementById("message").style.color = "green";
    } else {
        btn.classList.add("wrong");
        // Highlight the correct one
        btns.forEach(b => {
            if(b.innerText === correct) b.classList.add("correct");
        });
        document.getElementById("message").innerText = `❌ Wrong! It was ${correct}`;
        document.getElementById("message").style.color = "red";
    }

    // Update score immediately to show user
    document.getElementById("score-text").innerText = `Score: ${score}`;

    // Move to next question after short delay
    currentQuestionIndex++;
    setTimeout(loadQuestion, 1500);
}

function showEndScreen() {
    document.getElementById("game-container").classList.add("hidden");
    document.getElementById("end-screen").classList.remove("hidden");
    
    document.getElementById("final-score").innerText = `${score} / ${TOTAL_QUESTIONS}`;
    
    let feedback = "";
    if (score === 25) feedback = "🏆 Perfect Score! You are a geography genius!";
    else if (score >= 20) feedback = "🔥 Great job! Very impressive.";
    else if (score >= 10) feedback = "👍 Good effort, keep practicing!";
    else feedback = "📚 Need to study more flags!";
    
    document.getElementById("feedback-text").innerText = feedback;
}