let countries = [];
let correctCountry = "";

fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json())
  .then(data => {
    countries = data.filter(
      c => c.flags && c.flags.png && c.name && c.name.common
    );
    loadQuestion();
  })
  .catch(err => console.error(err));


function loadQuestion() {
  document.getElementById("result").innerText = "";

  let random = Math.floor(Math.random() * countries.length);
  correctCountry = countries[random];

  if (!correctCountry || !correctCountry.flags) {
    loadQuestion();
    return;
  }

  document.getElementById("flag").src = correctCountry.flags.png;

  let options = [correctCountry.name.common];

  while (options.length < 4) {
    let randCountry = countries[Math.floor(Math.random() * countries.length)];
    let name = randCountry.name.common;
    if (!options.includes(name)) options.push(name);
  }

  options.sort(() => Math.random() - 0.5);

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
  if (selected === correctCountry.name.common) {
    document.getElementById("result").innerText = "✅ Correct!";
  } else {
    document.getElementById("result").innerText =
      "❌ Wrong! Correct answer: " + correctCountry.name.common;
  }

  setTimeout(loadQuestion, 1500);
}
