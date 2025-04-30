const allProducts = [
    {
        id: 1,
        name: "Thermomix TM6",
        price: 5999,
        image: "images/tm6.jpg",
        category: "Thermomix TM6",
        description: "أحدث نموذج من Thermomix مع ميزات متطورة"
    },
    {
        id: 2,
        name: "وعاء الخلط",
        price: 899,
        image: "images/mixing-bowl.jpg",
        category: "الملحقات",
        description: "وعاء خلط عالي الجودة بسعة 2 لتر"
    },
    {
        id: 3,
        name: "كتاب الوصفات",
        price: 199,
        image: "images/recipe-book.jpg",
        category: "الكتب والوصفات",
        description: "أكثر من 100 وصفة معتمدة من Thermomix"
    },
    // يمكن إضافة المزيد من المنتجات هنا
];

// نصدّر البيانات ليتم استخدامها في ملفات أخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = allProducts;
}
