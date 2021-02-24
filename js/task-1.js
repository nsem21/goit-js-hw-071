
const allInformation = document.querySelectorAll('.item');
const categoriesQuantity = allInformation.length;
console.log (`В списке ${categoriesQuantity} категории.`);
allInformation.forEach ((value, index) => {
    const category = allInformation[index].getElementsByTagName('h2')[0].innerText;
    const itemsQuantity = allInformation[index].getElementsByTagName('li').length;
    console.log (`Категория: ${category} \nКоличество элементов: ${itemsQuantity}`)
});

