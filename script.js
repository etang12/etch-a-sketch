
const grid_container = document.getElementById("grid-container");
const reset_button = document.getElementsByClassName("reset-button")[0];
const slider = document.getElementById("slider-range");
const color_choice = document.getElementById("color-choice")

let mouse_down = false;

document.body.onmousedown = () => {
    mouse_down = true;
}

document.body.onmouseup = () => {
    mouse_down = false;
}

const changeGridSize = (range) => {
    document.getElementsByClassName('range-output')[0].textContent = `${range.value}x${range.value}`;
    clearGrid();
    createGrid(range.value, range.value);
};

const colorIn = (e) => {
    if (e.type === "mouseover" && !mouse_down) {
        return;
    };
    
    chosen_color = color_choice.value;
    e.target.classList.add('color-in');
    e.target.style.setProperty('--pen-color', chosen_color);
}

const resetGridColors = () => {
    const all_grid_items = document.querySelectorAll('.grid-item');
    all_grid_items.forEach((item) => {
        item.classList.remove('color-in');
    });
};

const createGrid = (rows, cols) => {
    grid_container.style.setProperty('--grid-rows', rows);
    grid_container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < rows * cols; i++) {
        let grid_item = document.createElement('div');
        grid_item.classList.add('grid-item');
        grid_item.addEventListener("mousedown", colorIn);
        grid_item.addEventListener("mouseover", colorIn);
        grid_container.appendChild(grid_item);
    };
};

const clearGrid = () => {
    grid_container.innerHTML = '';
}

createGrid(16, 16);

reset_button.addEventListener("click", resetGridColors);
