const gridElement = document.getElementById("grid");

function createGrid() {
  gridElement.innerHTML = '';
  for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("click", () => {
      if (!cell.classList.contains("clicked")) {
        cell.classList.add("clicked");
        cell.innerHTML = "🌟";
      }
    });
    gridElement.appendChild(cell);
  }
}

function startGame() {
  createGrid();
}

function getSignal() {
  const mines = parseInt(document.getElementById("mines").value);
  const cells = document.querySelectorAll(".cell");
  const indexes = [];

  while (indexes.length < mines) {
    const rand = Math.floor(Math.random() * cells.length);
    if (!indexes.includes(rand)) {
      indexes.push(rand);
    }
  }

  indexes.forEach(i => {
    cells[i].classList.add("clicked");
    cells[i].innerHTML = "🌟";
  });
}

// Автоматически запускаем при загрузке
window.onload = createGrid;
