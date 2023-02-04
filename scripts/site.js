'use strict';

const galleryContainer = document.querySelector('.gallery-container');
const modalDialog = document.querySelector('.modal-car-details');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

//Visar alla bilar
vehicles.forEach(car => {
  galleryContainer.insertAdjacentHTML(
    'beforeend',
    `<div class="car card m-3 " style="width: 370px;">
        <img class="car-img card-img-top" width="300" height="300" id="${car.id}" src="./content/img/${car.img}" alt="car-img"/>
        <div class="card-body">
            <p>${car.brand} ${car.model}</p>
        </div>
    </div>`
  );
});


const images = document.querySelectorAll('.car img');

//visar en specifik bil
const openModal = function(id) {
  const image = modalDialog.querySelector('.modal-container');

  var selectedCar = vehicles.find(x => x.id == id);
  image.innerHTML = `
    <div class="card" style="width: 50%; height:auto; margin:auto;"">
    <img class="card-img-top" width="300" height="300" src="./content/img/${selectedCar.img}" alt="car-img">
    <div class="card-body">
        <h5 class="card-title">${selectedCar.brand} ${selectedCar.model}</h5>
        <p class="card-text">Färg: ${selectedCar.colour} <br> År: ${selectedCar.year} <br> Pris: ${selectedCar.price}kr <br> Miltal: ${selectedCar.milage} <br> Växellåda: ${selectedCar.gear}</p>

    
    
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