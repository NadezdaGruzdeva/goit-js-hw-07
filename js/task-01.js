
const liItems = document.querySelectorAll('li.item');

console.log("В списке " + liItems.length + " категории.");

liItems.forEach(liItem => {
    const title = liItem.querySelector('h2').innerText;
    const count = liItem.querySelectorAll('li').length;
    console.log("Категория:" + title);
    console.log("Количество элементов:" + count);
});







