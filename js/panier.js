// Récupère le panier depuis le localStorage
function getCart() {
    const cart = localStorage.getItem('thermomix_cart');
    return cart ? JSON.parse(cart) : [];
}

// Ajoute un produit au panier
function addToCart(productId) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem('thermomix_cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Produit ajouté au panier !');
}

// Met à jour le compteur du panier
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = totalItems;
    });
}

// Affiche une notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Exporte les fonctions si besoin
export { getCart, addToCart, updateCartCount };
