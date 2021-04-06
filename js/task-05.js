document.querySelector('#name-input').addEventListener("input", handleInputText);
function handleInputText() {
    console.log("tipp");
    if (document.querySelector('#name-input').value === "") {
        document.querySelector('#name-output').textContent = 'незнакомец';
    } else {
        document.querySelector('#name-output').textContent = document.querySelector('#name-input').value;
    }
    
}

