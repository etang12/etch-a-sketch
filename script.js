const grid_container = document.getElementById("grid-container");

const createGrid = (rows, cols) => {
    grid_container.style.setProperty('--grid-rows', rows);
    grid_container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < rows * cols; i++) {
        let grid_item = document.createElement('div');
        grid_item.innerText = (i + 1);
        grid_item.classList.add('grid-item');
        grid_container.appendChild(grid_item);
    };
};

createGrid(16, 16);

