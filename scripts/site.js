'use strict';

const gallery = document.querySelector('.gallery');
const modalDialog = document.querySelector('.modal-car-details');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');


vehicles.forEach(car => {
  gallery.insertAdjacentHTML(
    'beforeend',
    `<div class="car">
    <img id="${car.id}" src="./content/img/${car.img}"/>
    <p>${car.milage} ${car.price}</p>
    </div>`
  );
});

const images = document.querySelectorAll('.car img');

const openModal = function(id) {
  const image = modalDialog.querySelector('.modal-container');

  var selectedCar = vehicles.find(x => x.id == id);
  console.log(selectedCar)

  image.innerHTML = `
    <div class="card"">
    <img class="card-img-top" src="./content/img/${selectedCar.img}">
    <div class="card-body">
        <h5 class="card-title">${selectedCar.brand}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    `;

  overlay.classList.remove('hidden');
  modalDialog.classList.remove('hidden');
}

for(let image of images){
  let id = image.getAttribute('id');

  image.addEventListener('click', function() {
    openModal(id);
  });
}

const quitModal = () => {
  modalDialog.classList.add('hidden');
  overlay.classList.add('hidden');
}

closeModal.addEventListener('click', quitModal);

overlay.addEventListener('click', quitModal);

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') {
    if(!modalDialog.classList.contains('hidden')){
      quitModal();
    }
  }
})