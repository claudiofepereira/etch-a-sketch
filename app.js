const container = document.querySelector('.container');
const setGridBtn = document.querySelector('.set-grid');
const clearGridBtn = document.querySelector('.clear-grid');;

let newGridSize = 0;

// This function simply creates a grid by manipulating css
function makeGrid(num = 16) {
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
}

// Receives input from user and defines global grid size
function changeGridSize() {
    newGridSize = parseInt(prompt("Enter a number:", "Needs to be in range (2,100)"));
    if (newGridSize < 2 || newGridSize > 100 || !newGridSize) {
        newGridSize = 16;
    } else {
        container.innerHTML = "";
        createDivs(newGridSize);
        addMouseOverToGrids();
        makeGrid(newGridSize);
    }
}

// Uses global grid size defined in changeGridSize() from user
// If there's no grid size defined from user, use 16 as def
function clearGrid() {
    if (newGridSize < 2 || newGridSize > 100 || !newGridSize) {
        newGridSize = 16;
    } else {
        container.innerHTML = "";
        createDivs(newGridSize);
        addMouseOverToGrids();
        makeGrid(newGridSize);
    }
}

function createDivs(gridSize = 16) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let div = document.createElement("div");
        div.classList.add('grid');
        container.append(div);
    }
}

// Function to change the color with which the grid cells will be "painted"
function changePencilColor(color) {
    return function(e) {
        e.target.style.backgroundColor = color;
    }
}

// Function to color the grid cells when mouse passes over them
function addMouseOverToGrids() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach(element => {
        element.onmouseover = changePencilColor('rgb(0,0,0)');
    });
}

// This is the absolute main function, it compiles all functions into it
function init() {
    createDivs();
    addMouseOverToGrids();
    makeGrid();
}

setGridBtn.addEventListener('click', function() {
    changeGridSize();
});

clearGridBtn.addEventListener('click', function() {
    clearGrid();
})

window.addEventListener('load', init());