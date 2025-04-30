// produits.js - النسخة المحسنة

// 1. بيانات المنتجات
const produits = [
    {
        id: 1,
        nom: "Thermomix TM6",
        prix: 1499,
        categorie: "TM6",
        description: "Robot cuiseur intelligent dernière génération",
        image: "../images/produit-tm6.jpg",
        enStock: true
    },
    {
        id: 2,
        nom: "Couteau pétrir",
        prix: 59,
        categorie: "Accessoires",
        description: "Accessoire pour pétrir la pâte",
        image: "../images/accessoire.jpg",
        enStock: false
    }
];

// 2. دالة عرض المنتجات مع تحسينات
function afficherProduits() {
    const container = document.querySelector('.grille-produits');
    
    // تفريغ المحتوى الحالي (إذا كان هناك)
    container.innerHTML = '';
    
    produits.forEach(produit => {
        const produitCard = document.createElement('div');
        produitCard.className = 'produit-card';
        
        // إضافة حالة التوفر
        const stockStatus = produit.enStock 
            ? '<span class="in-stock">En stock</span>' 
            : '<span class="out-of-stock">Rupture</span>';
        
        produitCard.innerHTML = `
            <img src="${produit.image}" alt="${produit.nom}" loading="lazy">
            <div class="produit-info">
                <h3>${produit.nom}</h3>
                ${stockStatus}
                <p class="description">${produit.description}</p>
                <p class="prix">${produit.prix.toLocaleString('fr-FR')} €</p>
                <button class="btn-ajouter" 
                        data-id="${produit.id}"
                        ${!produit.enStock ? 'disabled' : ''}>
                    ${produit.enStock ? 'Ajouter au panier' : 'Indisponible'}
                </button>
            </div>
        `;
        
        container.appendChild(produitCard);
    });
    
    // إضافة event listeners للأزرار
    document.querySelectorAll('.btn-ajouter').forEach(btn => {
        btn.addEventListener('click', function() {
            if(this.disabled) return;
            const productId = parseInt(this.getAttribute('data-id'));
            ajouterAuPanier(productId);
        });
    });
}

// 3. دالة إضافة للسلة (مثال)
function ajouterAuPanier(productId) {
    const produit = produits.find(p => p.id === productId);
    if(!produit) return;
    
    console.log(`Produit ajouté: ${produit.nom}`);
    // هنا يمكنك إضافة منطق إدارة السلة
    // مثلاً: localStorage أو تحديث عداد السلة
}

// 4. تهيئة الصفحة
document.addEventListener('DOMContentLoaded', () => {
    afficherProduits();
    
    // يمكنك إضافة تهيئات إضافية هنا
    console.log('Page produits chargée');
});
