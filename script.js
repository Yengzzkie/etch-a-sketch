const squareRange = document.querySelector(".square-range");
const eraseBtn = document.querySelector(".erase");
const container = document.querySelector(".grid-container");

let isDrawing = false;

function createDiv() {
  container.innerHTML = "";

  const numberOfSquares = squareRange.value * squareRange.value;
  const squareSize = Math.floor(container.offsetWidth / squareRange.value) - 2; // Subtract border width

  for (let i = 0; i < numberOfSquares; i++) {
    let square = document.createElement("div");
    square.classList.add("squares");
    square.style.width = `${squareSize}px`;
    square.style.height = `auto`;
    container.appendChild(square);

    square.addEventListener("mousedown", () => {
      isDrawing = true;
      square.style.backgroundColor = "black";
    });

    square.addEventListener("mouseup", () => {
      isDrawing = false;
    });

    square.addEventListener("mouseover", () => {
      if (isDrawing) {
        square.style.backgroundColor = "black";
      }
    });
  }
}

squareRange.addEventListener("input", createDiv);

eraseBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".squares");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});

createDiv(); // Initially create the squares
