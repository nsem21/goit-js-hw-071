const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const itemsList = [];
ingredients.forEach (([, index]) => {
    const item = document.createElement('li');
    item.textContent = ingredients[index];
    itemsList.push(item);
});
document.querySelector('#ingredients').append (...itemsList);



