/**
 * FICHIER PRINCIPAL JS - Thermomix
 * Gère les fonctionnalités communes à toutes les pages
 */

// ==================== CONSTANTES ====================
const CART_STORAGE_KEY = 'thermomix_cart';

// ==================== FONCTIONS UTILITAIRES ====================

/**
 * Met à jour le compteur du panier dans le header
 */
function updateCartCount() {
    const cart = getCart();
    const countElements = document.querySelectorAll('.cart-count, .panier-count');
    
    countElements.forEach(el => {
        el.textContent = cart.length;
    });
}

/**
 * Récupère le panier depuis le localStorage
 */
function getCart() {
    const cartJson = localStorage.getItem(CART_STORAGE_KEY);
    return cartJson ? JSON.parse(cartJson) : [];
}

/**
 * Sauvegarde le panier dans le localStorage
 */
function saveCart(cart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

// ==================== GESTION DU PANIER ====================

/**
 * Ajoute un produit au panier
 */
function addToCart(productId) {
    const cart = getCart();
    
    // Vérifier si le produit est déjà dans le panier
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            quantity: 1,
            addedAt: new Date().toISOString()
        });
    }
    
    saveCart(cart);
    updateCartCount();
    showCartNotification();
}

/**
 * Affiche une notification quand on ajoute au panier
 */
function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = 'Produit ajouté au panier !';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 500);
    }, 2000);
}

// ==================== ÉVÉNEMENTS ====================

/**
 * Initialise les event listeners communs
 */
function initEventListeners() {
    // Gestion des clics sur "Ajouter au panier"
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-ajouter')) {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        }
    });
    
    // Menu mobile (si vous en avez un)
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            document.querySelector('.navigation').classList.toggle('active');
        });
    }
}

// ==================== INITIALISATION ====================

/**
 * Fonction d'initialisation principale
 */
function init() {
    initEventListeners();
    updateCartCount();
    
    // Autres initialisations si nécessaire
    console.log('Application Thermomix initialisée');
}

// Lance l'application quand le DOM est chargé
document.addEventListener('DOMContentLoaded', init);
