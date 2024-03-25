document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('main');
    let currentPage = 1;
    const productsPerPage = 8;
    let products = []; // This array would be fetched from an API

    // Simulate fetching products
    function fetchProducts() {
        // Simulated product data
        products = Array.from({length: 50}, (_, i) => ({
            id: i + 1,
            name: `Product ${i + 1}`,
            image: `https://source.unsplash.com/random/200x200?sig=${i}`,
            price: `$${(Math.random() * 100).toFixed(2)}`
        }));
        displayProducts();
    }

    function displayProducts() {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = products.slice(startIndex, endIndex);

        productsContainer.innerHTML = productsToShow.map(product => `
            <div class="bg-white p-4 shadow rounded-lg">
                <img src="${product.image}" alt="${product.name}" class="h-40 w-full object-cover">
                <div class="mt-2">
                    <h3 class="text-lg font-bold">${product.name}</h3>
                    <p class="text-gray-800">${product.price}</p>
                </div>
            </div>
        `).join('');
    }

    window.changePage = function(direction) {
        if (direction === 'prev' && currentPage > 1) {
            currentPage--;
        } else if (direction === 'next' && currentPage * productsPerPage < products.length) {
            currentPage++;
        }
        displayProducts();
    };

    fetchProducts();
});
