let cart = [];

function addToCart(productId) {
    const product = featuredProducts.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        saveCart();
    }
}

function updateCartCount() {
    const countElement = document.querySelector('.cart-count');
    if (countElement) {
        countElement.textContent = cart.length;
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// استدعاء عند تحميل الصفحة
loadCart();

// إضافة حدث للنقر على أزرار "أضف للسلة"
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        addToCart(productId);
    }
});
