//Get a reference to the container for the grid and the clear and reset buttons
const gridContainer = document.getElementById("grid-container");
const resetButton = document.getElementById("reset-button");
const clearButton = document.getElementById("clear-button");

//Initialise a 16*16 grid on page load
initialiseGrid(16);

//When clear or reset button is clicked, clear shading or initialise a new grid respectively
resetButton.addEventListener("click", resetGrid);
clearButton.addEventListener("click", clearShading);

//Create a grid item
function createGridItem() {
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");
    //Shade each grid item on mouseover
    newDiv.addEventListener("mouseover", shade);
    //Make each grid item a child of the grid container
    gridContainer.appendChild(newDiv);
}

//Shade a given grid item
function shade() {
    this.classList.add("grid-item-shaded");
}

//Clear all shaded grid items
function clearShading() {
    const shaded = document.querySelectorAll(".grid-item-shaded");
    shaded.forEach(element => {
        element.classList.remove("grid-item-shaded");
    })
}

//Prompt the user for grid size
function promptSize() {
    return prompt("Test");
}

//Delete all grid items
function deleteGrid() {
    const grid = document.querySelectorAll(".grid-item");
    grid.forEach(item => {
        item.remove();
    })
}

//Reset the grid by prompting for new dimensions, deleting the existing grid and initialising a new grid
function resetGrid() {
    //prompt for new grid size
    const size = promptSize();
    //delete existing grid items
    deleteGrid();
    //initialise a new grid of the correct size
    initialiseGrid(size);
}

//Initialise a grid of given dimensions
function initialiseGrid(size) {
    gridContainer.setAttribute("display", "grid");
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        createGridItem();
    }
}


