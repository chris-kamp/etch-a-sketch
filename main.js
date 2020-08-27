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
    console.log(newDiv.style.backgroundColor);
    //Make each grid item a child of the grid container
    gridContainer.appendChild(newDiv);
}

//Set the shade of a given grid item
function shade() {

    if(!(this.style.backgroundColor)) {
        this.style.backgroundColor = "rgba(10, 10, 10, 0.1)";
        // this.style.backgroundColor = "#0a0a0a" + hexAlphaConvert(10);
    } else {
        this.style.backgroundColor = incrementAlpha(this.style.backgroundColor, 0.1);
    }
    console.log(this.style.backgroundColor);
    // this.classList.add("grid-item-shaded");
    // this.style.backgroundColor = "rgb(10,10,10,0.5)";
    
    // console.log(this.getAttribute("background-color"));
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
    return prompt("Grid size?");
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

//From a given background-color property in rgba format, get the alpha value as a number
function getAlpha(bgColor) {
    if(bgColor.slice(0, 4) !== "rgba") {
        return false;
    } else {
        const alpha = bgColor.slice(-4, -1);
        return Number(alpha);
    }
}

//Given a background color in rgba format, return with alpha increased by a given step
function incrementAlpha(bgColor, step) {
    if(!getAlpha(bgColor)) {
        return bgColor;
    }
    const startAlpha = getAlpha(bgColor);
    const newAlpha = (startAlpha + step).toFixed(1);
    const newColor = bgColor.slice(0, -4) + newAlpha + ")";
    return newColor;
}



/* //Redundant functions
//Convert a given number to %alpha (rounded up) in hexadecimal
function hexAlphaConvert(percentage){
    const val = Math.ceil(255 * (percentage / 100));
    let hex = val.toString(16);
    return hex;
}

//From a string representing background-color in hexadecimal, get the alpha%
function getAlphaPercent(bgColor) {
    const hex = bgColor.slice(-2);
    const val = parseInt(hex, 16);
    const percentage = Math.floor(val / 255 * 100);
    return percentage;
}

//Given a background color with an alpha value in hex, return with the alpha% incremented by a given step
function incrementAlpha(bgColor, step) {
    const noAlpha = bgColor.slice(0, -2);
    let alphaPercent = getAlphaPercent(bgColor);
    alphaPercent += step;
    const newAlpha = hexAlphaConvert(alphaPercent);
    return(noAlpha + newAlpha);
} */