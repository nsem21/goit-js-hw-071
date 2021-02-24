
const allInformation = document.querySelectorAll('.item');
const categoriesQuantity = allInformation.length;
console.log (`В списке ${categoriesQuantity} категории.`);
for (let i = 0; i < categoriesQuantity; i += 1) {
    const category = allInformation[i].getElementsByTagName('h2')[0].innerText;
    const itemsQuantity = allInformation[i].getElementsByTagName('li').length;
    console.log (`Категория: ${category} \nКоличество элементов: ${itemsQuantity}`)
}

