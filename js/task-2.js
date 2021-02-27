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
ingredients.forEach (ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    itemsList.push(item);
});
newList.append (...itemsList);



