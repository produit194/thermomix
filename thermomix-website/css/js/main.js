// بيانات المنتجات المميزة (مؤقتة - لاحقاً سنربط بقاعدة بيانات)
const featuredProducts = [
    {
        id: 1,
        name: "Thermomix TM6",
        price: 5999,
        image: "images/tm6.jpg",
        description: "أحدث نموذج من Thermomix مع ميزات متطورة"
    },
    {
        id: 2,
        name: "وعاء الخلط",
        price: 899,
        image: "images/mixing-bowl.jpg",
        description: "وعاء خلط عالي الجودة بسعة 2 لتر"
    },
    {
        id: 3,
        name: "كتاب الوصفات",
        price: 199,
        image: "images/recipe-book.jpg",
        description: "أكثر من 100 وصفة معتمدة من Thermomix"
    }
];

// عرض المنتجات المميزة
document.addEventListener('DOMContentLoaded', function() {
    const productsGrid = document.querySelector('.products-grid');
    
    featuredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-footer">
                <span class="price">${product.price} ر.س</span>
                <button class="add-to-cart" data-id="${product.id}">أضف للسلة</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
});
