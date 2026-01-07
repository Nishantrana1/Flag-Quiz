// 1. MASSIVE DATA LIST (Mixed Easy, Medium, Hard)
const allCountries = [
    // --- EASY ---
    { name: "United States", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
    { name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Germany", flag: "https://flagcdn.com/w320/de.png" },
    { name: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
    { name: "Brazil", flag: "https://flagcdn.com/w320/br.png" },
    { name: "India", flag: "https://flagcdn.com/w320/in.png" },
    { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { name: "France", flag: "https://flagcdn.com/w320/fr.png" },
    { name: "Italy", flag: "https://flagcdn.com/w320/it.png" },
    { name: "China", flag: "https://flagcdn.com/w320/cn.png" },
    { name: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
    
    // --- MEDIUM ---
    { name: "South Korea", flag: "https://flagcdn.com/w320/kr.png" },
    { name: "Spain", flag: "https://flagcdn.com/w320/es.png" },
    { name: "Mexico", flag: "https://flagcdn.com/w320/mx.png" },
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
    { name: "Poland", flag: "https://flagcdn.com/w320/pl.png" },
    { name: "Saudi Arabia", flag: "https://flagcdn.com/w320/sa.png" },
    { name: "Iran", flag: "https://flagcdn.com/w320/ir.png" },
    { name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png" },
    { name: "Nigeria", flag: "https://flagcdn.com/w320/ng.png" },
    { name: "Colombia", flag: "https://flagcdn.com/w320/co.png" },
    { name: "Chile", flag: "https://flagcdn.com/w320/cl.png" },
    { name: "Peru", flag: "https://flagcdn.com/w320/pe.png" },
    
    // --- HARD & OBSCURE ---
    { name: "Bhutan", flag: "https://flagcdn.com/w320/bt.png" },
    { name: "Kyrgyzstan", flag: "https://flagcdn.com/w320/kg.png" },
    { name: "Seychelles", flag: "https://flagcdn.com/w320/sc.png" },
    { name: "Antigua and Barbuda", flag: "https://flagcdn.com/w320/ag.png" },
    { name: "Eswatini", flag: "https://flagcdn.com/w320/sz.png" },
    { name: "Kiribati", flag: "https://flagcdn.com/w320/ki.png" },
    { name: "Liechtenstein", flag: "https://flagcdn.com/w320/li.png" },
    { name: "Saint Lucia", flag: "https://flagcdn.com/w320/lc.png" },
    { name: "Vanuatu", flag: "https://flagcdn.com/w320/vu.png" },
    { name: "Djibouti", flag: "https://flagcdn.com/w320/dj.png" },
    { name: "Timor-Leste", flag: "https://flagcdn.com/w320/tl.png" },
    { name: "Burkina Faso", flag: "https://flagcdn.com/w320/bf.png" },
    { name: "Turkmenistan", flag: "https://flagcdn.com/w320/tm.png" },
    { name: "Tajikistan", flag: "https://flagcdn.com/w320/tj.png" },
    { name: "Moldova", flag: "https://flagcdn.com/w320/md.png" },
    { name: "North Macedonia", flag: "https://flagcdn.com/w320/mk.png" },
    { name: "Mongolia", flag: "https://flagcdn.com/w320/mn.png" },
    { name: "Mozambique", flag: "https://flagcdn.com/w320/mz.png" },
    { name: "Myanmar", flag: "https://flagcdn.com/w320/mm.png" },
    { name: "Namibia", flag: "https://flagcdn.com/w320/na.png" },
    { name: "Nauru", flag: "https://flagcdn.com/w320/nr.png" },
    { name: "Nepal", flag: "https://flagcdn.com/w320/np.png" },
    { name: "Belize", flag: "https://flagcdn.com/w320/bz.png" },
    { name: "Benin", flag: "https://flagcdn.com/w320/bj.png" },
    { name: "Comoros", flag: "https://flagcdn.com/w320/km.png" },
    { name: "Dominica", flag: "https://flagcdn.com/w320/dm.png" },
    { name: "Eritrea", flag: "https://flagcdn.com/w320/er.png" },
    { name: "Estonia", flag: "https://flagcdn.com/w320/ee.png" },
    { name: "Fiji", flag: "https://flagcdn.com/w320/fj.png" },
    { name: "Gabon", flag: "https://flagcdn.com/w320/ga.png" },
    { name: "Grenada", flag: "https://flagcdn.com/w320/gd.png" },
    { name: "Palau", flag: "https://flagcdn.com/w320/pw.png" },
    { name: "Papua New Guinea", flag: "https://flagcdn.com/w320/pg.png" },
    { name: "Rwanda", flag: "https://flagcdn.com/w320/rw.png" },
    { name: "Saint Kitts and Nevis", flag: "https://flagcdn.com/w320/kn.png" },
    { name: "Samoa", flag: "https://flagcdn.com/w320/ws.png" },
    { name: "San Marino", flag: "https://flagcdn.com/w320/sm.png" },
    { name: "Sierra Leone", flag: "https://flagcdn.com/w320/sl.png" },
    { name: "Solomon Islands", flag: "https://flagcdn.com/w320/sb.png" },
    { name: "Suriname", flag: "https://flagcdn.com/w320/sr.png" },
    { name: "Togo", flag: "https://flagcdn.com/w320/tg.png" },
    { name: "Tonga", flag: "https://flagcdn.com/w320/to.png" },
    { name: "Tuvalu", flag: "https://flagcdn.com/w320/tv.png" },
    { name: "Uganda", flag: "https://flagcdn.com/w320/ug.png" },
    { name: "Uzbekistan", flag: "https://flagcdn.com/w320/uz.png" },
    { name: "Zambia", flag: "https://flagcdn.com/w320/zm.png" },
    { name: "Zimbabwe", flag: "https://flagcdn.com/w320/zw.png" }
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
    
    // Shuffle the full massive list and slice the first 25 for this game round
    // This ensures a totally different mix of Easy/Hard every time you play
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
        // Pick random wrong answer from the FULL list (so wrong answers can be hard too!)
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

    // Update score immediately
    document.getElementById("score-text").innerText = `Score: ${score}`;

    // Move to next question
    currentQuestionIndex++;
    setTimeout(loadQuestion, 1500);
}

function showEndScreen() {
    document.getElementById("game-container").classList.add("hidden");
    document.getElementById("end-screen").classList.remove("hidden");
    
    document.getElementById("final-score").innerText = `${score} / ${TOTAL_QUESTIONS}`;
    
    let feedback = "";
    if (score === 25) feedback = "🏆 Stand Proud! You are Smart!";
    else if (score >= 20) feedback = "🔥 Amazing! You are a Geography Master.";
    else if (score >= 15) feedback = "👍 Great Job! That was a hard quiz.";
    else if (score >= 10) feedback = "😐 Not bad, but keep studying.";
    else feedback = "📚 What a failure!";
    
    document.getElementById("feedback-text").innerText = feedback;
}