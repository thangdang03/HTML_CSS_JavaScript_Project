// Sample product data
const products = [
    {
        id: 1,
        name: "Mộ Đá Tam Sơn Cao Cấp",
        image: "./assert/image0.png",
    },
    {
        id: 2,
        name: "Lăng Mộ Đá Đơn",
        image: "./assert/image1.png",
    },
    {
        id: 3,
        name: "Mộ Đá Hai Mái",
        image: "./assert/image1.png",
    },
    {
        id: 4,
        name: "Lăng Mộ Đá Gia Tộc",
        image: "./assert/image3.png",
    }
];

// Render products to grid
function renderProducts() {
    const productGrid = document.querySelector('.product-grid');
    
    // Create slider container
    const slideContainer = document.createElement('div');
    slideContainer.className = 'product-slide';
    
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="contact-wrapper">
                        <a href="tel:01390123123" class="contact-link">
                            <span class="contact-label">Liên hệ:</span>
                            <span class="contact-number">0139.012.3123</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
        slideContainer.innerHTML += productCard;
    });
    
    // Add duplicate items for infinite scroll
    slideContainer.innerHTML += slideContainer.innerHTML;
    productGrid.appendChild(slideContainer);
    
    // Initialize slider
    initializeSlider();
}

function initializeSlider() {
    const slideContainer = document.querySelector('.product-slide');
    const cardWidth = 320; // card width + gap
    let currentPosition = 0;
    
    function slide() {
        currentPosition -= 1; // Move 1px at a time for smooth sliding
        
        // Reset position when reaching half of the duplicated content
        if (currentPosition <= -(cardWidth * products.length)) {
            currentPosition = 0;
        }
        
        slideContainer.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(slide);
    }
    
    // Start auto-sliding
    requestAnimationFrame(slide);
}

// Initialize cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
});
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
});
