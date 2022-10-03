
const grid_container = document.getElementById("grid-container");
const reset_button = document.getElementsByClassName("reset-button")[0];

const colorIn = (e) => {
    e.target.classList.add('color-in');
}

const resetGrid = () => {
    console.log('inside reset');
    const all_grid_items = document.querySelectorAll('.grid-item');
    console.log(all_grid_items);
    all_grid_items.forEach((item) => {
        item.classList.remove('color-in');
    });
};


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

grid_container.addEventListener("mouseover", (event) => {
    colorIn(event);
});

reset_button.addEventListener("click", resetGrid);