
const allInformation = document.querySelectorAll('.item');

const categoriesQuantity = allInformation.length;
console.log (`В списке ${categoriesQuantity} категории.`);

allInformation.forEach ((value, index) => {
    const category = allInformation[index].querySelector('h2').textContent;
    const itemsQuantity = allInformation[index].querySelectorAll('li').length;
    console.log (`Категория: ${category} \nКоличество элементов: ${itemsQuantity}`)
});

