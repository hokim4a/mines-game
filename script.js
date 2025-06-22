const gridElement = document.getElementById("grid");
let mineIndexes = [];
let gameOver = false;

function createGrid() {
  gridElement.innerHTML = '';
  gameOver = false;
  mineIndexes = [];

  const mineCount = parseInt(document.getElementById("mines").value);
  const cells = [];

  // Эҷод кардани 25 ячейка
  for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = i;

    cell.addEventListener("click", () => handleClick(cell));
    gridElement.appendChild(cell);
    cells.push(cell);
  }

  // Гузоштани ловушка (мина)
  while (mineIndexes.length < mineCount) {
    const rand = Math.floor(Math.random() * 25);
    if (!mineIndexes.includes(rand)) {
      mineIndexes.push(rand);
    }
  }
}

function handleClick(cell) {
  if (gameOver || cell.classList.contains("clicked")) return;

  const index = parseInt(cell.dataset.index);

  if (mineIndexes.includes(index)) {
    // Ловушка ёфт шуд!
    cell.classList.add("mine");
    cell.innerHTML = "💣";
    cell.style.backgroundColor = "red";
    alert("💥 Бахт надоштӣ! Мина буд.");
    gameOver = true;

    // Намоиш додани дигар минаҳо
    document.querySelectorAll(".cell").forEach(c => {
      const idx = parseInt(c.dataset.index);
      if (mineIndexes.includes(idx)) {
        c.innerHTML = "💣";
        c.style.backgroundColor = "#900";
      }
    });

  } else {
    // Ҷойи бехатар
    cell.classList.add("clicked");
    cell.innerHTML = "🌟";
  }
}

function startGame() {
  createGrid();
}

function getSignal() {
  // Ин функсия ҳоло истифодаи махсус надорад,
  // Метавонӣ онро барои “пешгӯӣ” ё сигнал истифода барӣ баъд
  alert("📡 Сигнал: минаҳо нав карда шуданд.");
  startGame();
}

// Боркунии аввал
window.onload = createGrid;
