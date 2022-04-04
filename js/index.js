'use-strict';
const gallery = document.querySelector('.gallery');
const galleryUl = gallery.querySelector('ul');
const galleryUlLi = galleryUl.querySelectorAll('li');
const liSize = galleryUlLi.length;
const arrBg = [];

for (let i = 0; i < liSize; i++) {
  arrBg.push(`url(img/gallery${i}.jpg) no-repeat 50%/cover`)
  galleryUlLi[i].style.background = arrBg[i];
}
let i = -1;
const autoGallery = () => {
  i++
  const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft
  const goto = (-i * gap) + 'px'

  gallery.style.left = goto;
  // gallery.style.transition= 'all 0.5s ease-in-out'
  gallery.classList.add('gallery-ani')

  if (i >= liSize - 1) i = -1;
}
let setIn = setInterval(autoGallery, 4000);

const arrow = document.querySelectorAll('span.arrow');
arrow.forEach(el => el.addEventListener('mouseover', () => clearInterval(setIn)));
arrow.forEach(el => {
  el.addEventListener('mouseout', () => setIn = setInterval(autoGallery, 4000));
});

const items = document.querySelector('.items');
const itemsUl = items.querySelector('ul');
const itemsUlLi = itemsUl.querySelectorAll('li');

itemsUlLi.forEach(el => el.addEventListener('mouseover', () => clearInterval(setIn)));
itemsUlLi.forEach(el => {
  el.addEventListener('mouseout', () => setIn = setInterval(autoGallery, 4000));
});

itemsUl.addEventListener('click', (e) => {
  const eTarget = e.target;

  itemsUlLi.forEach((el, idx) => {
    if(eTarget===el){
      el.classList.add('on')

      const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft
      const goto = (-gap*idx) + 'px'

      gallery.style.left=goto;
      gallery.classList.add('gallery-ani')
    }else{
      el.classList.remove('on')
    }

  });
});



(() => autoGallery())();