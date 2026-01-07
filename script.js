let countries = [];
let correctCountry = null;

// OPTIMIZATION: added "?fields=name,flags" to the URL.
// This makes the download much smaller and the app faster.
fetch("https://restcountries.com/v3.1/all?fields=name,flags")
  .then(res => res.json())
  .then(data => {
    countries = data;
    // Hide loading text and start game
    document.getElementById("loading").style.display = "none";
    loadQuestion();
  })
  .catch(err => {
    console.error(err);
    document.getElementById("loading").innerText = "Failed to load data. Check internet connection.";
  });

function loadQuestion() {
  document.getElementById("result").innerText = "";
  
  // Safety check
  if (countries.length === 0) return;

  let random = Math.floor(Math.random() * countries.length);
  correctCountry = countries[random];

  // Set Flag Image
  let flagImg = document.getElementById("flag");
  flagImg.src = correctCountry.flags.png;
  flagImg.style.display = "inline-block"; // Show image only after setting src

  // Create Options
  let options = [correctCountry.name.common];

  // Add 3 random wrong answers
  while (options.length < 4) {
    let randCountry = countries[Math.floor(Math.random() * countries.length)];
    let name = randCountry.name.common;
    if (!options.includes(name)) {
      options.push(name);
    }
  }

  // Shuffle options
  options.sort(() => Math.random() - 0.5);

  // Render Buttons
  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  let resultText = document.getElementById("result");
  
  if (selected === correctCountry.name.common) {
    resultText.innerText = "✅ Correct!";
    resultText.style.color = "green";
  } else {
    resultText.innerText = "❌ Wrong! It was " + correctCountry.name.common;
    resultText.style.color = "red";
  }

  // Disable buttons so user can't click twice while waiting
  let btns = document.querySelectorAll("#options button");
  btns.forEach(btn => btn.disabled = true);

  setTimeout(loadQuestion, 1500);
}