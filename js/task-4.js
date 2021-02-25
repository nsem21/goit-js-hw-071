let counterValue = Number(document.querySelector('#value').innerHTML);
const increment = () => {
    counterValue += 1;
    document.querySelector('#value').innerHTML=counterValue;
}
const decrement = () => {
    counterValue -= 1;
    document.querySelector('#value').innerHTML=counterValue;
}
const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', increment)
const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', decrement)