const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulEl = document.querySelector('ul#gallery');
ulEl.style.display = 'flex';
ulEl.style.alignItems = 'flex-start';
ulEl.style.justifyContent = 'space-around';

const createListItem = images.map(image => {
  const liEl = document.createElement('li');
  liEl.style.listStyle = 'none';
  liEl.insertAdjacentHTML(
    'afterbegin', `<img src= '${image.url}' alt='${image.alt}' width='240px'>`,
  );
  return liEl;
});

ulEl.append(...createListItem);


//images.forEach(image => {
//    const imgEl = document.createElement('img', imgTamplate );
//    const liEl = document.createElement('li');
//
//    imgEl.width = 240;
//    //imgEl.src = image.url;
//    //imgEl.alt = image.alt;
//    liEl.appendChild(imgEl);
//    liEl.classList.add('list_item');
//    console.log(liEl);
//    ulEl.insertAdjacentElement('beforeend', liEl);
//});
//ulEl.classList.add('list');
//console.log(ulEl);
////.list {
      //  list-style: none;
      //  display: flex;
      //  margin: 30px;
      //}
      //.list_item {
      //  margin: 10px;
      //}