const squareRange = document.querySelector(".square-range");
const clearBtn = document.querySelector(".clear");
const eraserBtn = document.querySelector(".eraser");
const container = document.querySelector(".grid-container");
const rangeLabel = document.querySelector(".input-label");
const colorInput = document.querySelector(".color-input");
const rainbowModeBtn = document.querySelector(".RGB");



let isDrawing = false;
let isRandomColor = false;
let isSingleColor = false;
let eraseColor = false;

function createDiv() {
  container.innerHTML = "";

  rangeLabel.textContent = `${squareRange.value} x ${squareRange.value}`; //shows grid size
  const numberOfSquares = squareRange.value * squareRange.value;
  const squareSize = Math.floor(container.offsetWidth / squareRange.value) - 2; // Subtract border width

  for (let i = 0; i < numberOfSquares; i++) {
    let square = document.createElement("div");
    square.classList.add("squares");
    square.style.width = `${squareSize}px`;
    container.appendChild(square);

    square.addEventListener("mousedown", () => {
      isDrawing = true;
      if (isRandomColor) {
        square.style.backgroundColor = getRandomColor();
      } else if (isSingleColor) {
        square.style.backgroundColor = colorInput.value;
      } else if (eraseColor) {
        square.style.backgroundColor = 'white';
      } else {
        square.style.backgroundColor = "black";
      }
    });

    square.addEventListener("mouseup", () => {
      isDrawing = false;
    });

    square.addEventListener("mouseover", () => {
      if (isDrawing) {
        if (isRandomColor) {
          square.style.backgroundColor = getRandomColor();
        } else if (isSingleColor) {
          square.style.backgroundColor = colorInput.value;
        } else if (eraseColor) {
          square.style.backgroundColor = "white";
        } else {
          square.style.backgroundColor = "black";
        }
      }
    });
  }
}

squareRange.addEventListener("input", createDiv);

function getRandomColor() { //generates random color
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

rainbowModeBtn.addEventListener("click", () => {
  isRandomColor = !isRandomColor;
  isSingleColor = false;
  eraseColor = false;
});

colorInput.addEventListener('input', () => {
  isSingleColor = !isSingleColor;
  isRandomColor = false;
  eraseColor = false;
});

eraserBtn.addEventListener('click', () => {
  eraseColor = !eraseColor;
  isRandomColor = false;
  isSingleColor = false;
})

clearBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".squares");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});


createDiv(); // Initially create the squares
