const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');
inputEl.addEventListener('input', onInputSize);
function onInputSize() {
    spanEl.style.fontSize = inputEl.value + 'px';
    
    }