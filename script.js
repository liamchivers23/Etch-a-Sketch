const container = document.querySelector(".sketch-container");
const changeGrid = document.querySelector(".grid-change-btn");
const toggleGrid = document.querySelector(".toggleGrid");
const restartButton = document.querySelector(".restartButton");

function createGrid(size = 64) {
  container.style.gridTemplateRows = `repeat(${size}, auto)`;
  container.style.gridTemplateColumns = `repeat(${size}, auto)`;

  for (let i = 0; i < size * size; i++) {
    const divs = document.createElement("div");
    container.append(divs);
    divs.classList.add("divs-border");

    divs.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });

    toggleGrid.addEventListener("click", () => {
      divs.classList.toggle("divs-border");
    });
  }
}
createGrid();

restartButton.addEventListener("click", () => {
  container.textContent = "";
  createGrid();
});

changeGrid.addEventListener("click", () => {
  container.textContent = "";
  const gridSquares = Math.floor(
    Math.abs(
      Number(prompt("enter a number of squares per side for the new grid."))
    )
  );

  if (gridSquares > 100) {
    alert("Please insert only one number between 1-100");
    createGrid();
  } else {
    createGrid(gridSquares);
  }
});
