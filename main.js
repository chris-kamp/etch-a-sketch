//Get a reference to the container for the grid
let gridContainer = document.getElementById("grid-container");

//Create 16*16 grid items
for (let i = 0; i < 16*16; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");
    //Shade each grid item on mouseover
    newDiv.addEventListener("mouseover", shade);
    //Make each grid item a child of the grid container
    gridContainer.appendChild(newDiv);
}

//A function to shade a given grid item
function shade() {
    this.classList.add("grid-item-shaded");
}

