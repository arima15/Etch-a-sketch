const container = document.getElementById('container');
const button = document.getElementById('numberOfgrids');

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function getRandomColor() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256),
    }
}

function createGrid(numberOfSquares, sizePerSquare) {
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        const square = document.createElement('div');
        square.setAttribute('style', `width: ${sizePerSquare}px; height: ${sizePerSquare}px; box-sizing: border-box;`);
        square.style.border = '1px solid';
        square.style.backgroundColor = 'white';
        square.dataset.darkness = 0;
        square.addEventListener('mouseover', () => {
            const darkness = parseInt(square.dataset.darkness);
            if (darkness < 10) {
                square.dataset.darkness = darkness + 1;
                const color = getRandomColor();
                square.style.backgroundColor = `rgb(${color.r - darkness * 25}, ${color.g - darkness * 25}, ${color.b - darkness * 25})`;
            }
        });
        container.appendChild(square);
    }
}

button.addEventListener('click', () => {
    let gridSize = prompt('Enter the number of grids per side');
    while (gridSize > 100 || gridSize < 1) {
        gridSize = prompt('Enter the number of grids per side (between 1 and 100)');
    }
    const sizePerSquare = Math.floor(700 / gridSize);
    clearGrid();
    createGrid(gridSize, sizePerSquare);
});