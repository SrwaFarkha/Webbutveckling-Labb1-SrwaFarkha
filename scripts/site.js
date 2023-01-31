const productList = document.querySelector('.product-list');

eventListeners();

// all event listeners
function eventListeners(){
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();
    });

function loadJSON(){
    fetch('./data/cars.json')
    .then(response => response.json())
    .then(data =>{
        let html = '';
        data.forEach(product => {
            html += `
                <div class = "product-item">
                    <div class = "card">
                        <img class= "card-img-top" src = "${product.img}" alt = "product image">
        
                    </div>
                    <div class = "card-body">
                        <h3 class = "text">${product.gear}</h3>
                        <span class = "product-price">Pris: ${product.price}</span>
                        <p class = "product-price">${product.price} kr</p>
                    </div>
                </div>
            `;
        });
        productList.innerHTML = html;
    })
    .catch(error => {
        alert(`ERROR`);
    })}
}