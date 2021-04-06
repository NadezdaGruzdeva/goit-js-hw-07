const renderBtnEl = document.querySelector('[data-action="render"]');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');
const inputEl = document.querySelector('input');
renderBtnEl.addEventListener("click", alteredNumber);
destroyBtnEl.addEventListener("click", destroyBoxes);

function alteredNumber() {
    if (inputEl.value != "") {
       createBoxes(inputEl.value)
    }
}

function createBoxes(amount) {
    const boxSize = 30;
    for (let i = 0; i < amount; i += 1){
        const divEl = document.createElement('div');
        let nextBoxSize = i * 10 + boxSize;
        let r = Math.floor(Math.random() * 255) + 1;
        let g = Math.floor(Math.random() * 255) + 1;
        let b = Math.floor(Math.random() * 255) + 1;
        divEl.style.width = nextBoxSize + 'px';
        divEl.style.height = nextBoxSize + 'px';
        divEl.style.backgroundColor = `rgb(${r},${g},${b})`;
        document.getElementById('boxes').append(divEl);
    }
}
function destroyBoxes() {
    document.getElementById('boxes').innerHTML = '';
}