// Basit bir ürün veri seti
const products = [
    { id: 1, name: 'Ürün 1', price: 100 },
    { id: 2, name: 'Ürün 2', price: 150 },
    { id: 3, name: 'Ürün 3', price: 200 },
];

// Ürünleri listeleme fonksiyonu
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `<h2>${product.name}</h2><p>Fiyat: ${product.price} TL</p>`;
        productList.appendChild(productElement);
    });
}

// Sayfa yüklendiğinde ürünleri listele
window.onload = function() {
    displayProducts();
};
