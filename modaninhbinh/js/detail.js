// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fetch product details
function getProductDetails(id) {
    // In a real application, this would be an API call
    return products.find(p => p.id === parseInt(id));
}

// Render product details
function renderProductDetails(product) {
    document.getElementById('main-product-image').src = product.image;
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('product-description').textContent = product.description;
}

// Add to cart functionality
document.getElementById('add-to-cart-btn').addEventListener('click', () => {
    const product = getProductDetails(productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const product = getProductDetails(productId);
    if (product) {
        renderProductDetails(product);
    } else {
        window.location.href = 'index.html';
    }
});
