// نستورد بيانات المنتجات
import { allProducts } from '../data/products.js';

document.addEventListener('DOMContentLoaded', function() {
    const productsGrid = document.querySelector('.products-grid');
    const categoryButtons = document.querySelectorAll('.categories button');
    
    // عرض جميع المنتجات أولاً
    displayProducts(allProducts);
    
    // تصفية حسب التصنيف
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // نزيل النشط من جميع الأزرار
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // نضيف النشط للزر المختار
            this.classList.add('active');
            
            const category = this.textContent;
            let filteredProducts = allProducts;
            
            if (category !== 'الكل') {
                filteredProducts = allProducts.filter(
                    product => product.category === category
                );
            }
            
            displayProducts(filteredProducts);
        });
    });
});

function displayProducts(products) {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <a href="product-detail.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price} ر.س</p>
            </a>
        `;
        productsGrid.appendChild(productCard);
    });
}
