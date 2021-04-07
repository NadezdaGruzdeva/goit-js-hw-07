const inputEl = document.getElementById('validation-input');
inputEl.addEventListener('input', onInputText);
function onInputText() {
    console.log('a:' + inputEl.value.length);
    console.log('b:' + inputEl.getAttribute('data-length'));
    console.log('d: ' + inputEl.value.length === 6);
    if (inputEl.value.length === 6) {
        console.log('c: ');
        inputEl.classList.toggle('invalid', false);
        inputEl.classList.toggle('valid', true)
    } else {
        inputEl.classList.toggle('invalid', true);
        inputEl.classList.toggle('valid', false)
    }
    
}