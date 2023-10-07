
const categoriesList = document.querySelector('#categories');
const categoryItems = [...categoriesList.children];

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(categoryItem => {
    const categoryName = categoryItem.firstElementChild.textContent;
    const categoryElements = categoryItem.lastElementChild.children.length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
})