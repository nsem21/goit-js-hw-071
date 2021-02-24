const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const newList = document.querySelector('#ingredients');
const itemsList = [];
ingredients.forEach ((value, index) => {
    const item = document.createElement('li');
    item.textContent = ingredients[index];
    itemsList.push(item);
});
newList.append (...itemsList);



