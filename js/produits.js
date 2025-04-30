// المنتجات المؤقتة (حتى يتم ربطها بقاعدة بيانات)
const produits = [
    {
        id: 1,
        nom: "Thermomix TM6",
        prix: 1499,
        categorie: "TM6",
        image: "../images/produit1.jpg"
    },
    {
        id: 2,
        nom: "Couteau pétrir",
        prix: 59,
        categorie: "Accessoires",
        image: "../images/produit2.jpg"
    }
];

function afficherProduits() {
    const grid = document.querySelector('.grille-produits');
    
    produits.forEach(produit => {
        grid.innerHTML += `
            <div class="produit-card">
                <img src="${produit.image}" alt="${produit.nom}">
                <h3>${produit.nom}</h3>
                <p>${produit.prix}€</p>
                <button class="btn-ajouter" data-id="${produit.id}">Ajouter au panier</button>
            </div>
        `;
    });
}

// استدعاء عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', afficherProduits);
