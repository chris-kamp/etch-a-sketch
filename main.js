//Get a reference to the container for the grid
const gridContainer = document.getElementById("grid-container");
const resetButton = document.getElementById("reset-button");

//Initialise a 16*16 grid on page load
initialiseGrid(16);
resetButton.addEventListener("click", clearShading);

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
    shaded = document.querySelectorAll(".grid-item-shaded");
    shaded.forEach(element => {
        element.classList.remove("grid-item-shaded");
    })
}

//Prompt the user for grid dimensions


//Initialise a grid of given dimensions
function initialiseGrid(size) {
    gridContainer.setAttribute("display", "grid");
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        createGridItem();
    }
}


