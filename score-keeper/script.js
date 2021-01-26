const p1 = {
  score: 0,
  button: document.getElementById("p1Btn"),
  display: document.getElementById("p1score"),
};

const p2 = {
  score: 0,
  button: document.getElementById("p2Btn"),
  display: document.getElementById("p2score"),
};

const resetBtn = document.getElementById("resetBtn");
const winnningScoreSelect = document.querySelector("#dropdown");

let score1 = 0;
let score2 = 0;
let winningScore = 3;
let gameOver = false;

function updateScores(player, opponent) {
  if (!gameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      gameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", () => {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScores(p2, p1);
});

winnningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetScore();
});

resetBtn.addEventListener("click", resetScore);

function resetScore() {
  gameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
