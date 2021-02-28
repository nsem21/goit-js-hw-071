const control = document.querySelector('#controls');
const userInput =control.querySelector('input');
const boxes = document.querySelector('#boxes');

const renderBtn = control.querySelector('button[data-action="render"]');
const destroyBtn = control.querySelector('button[data-action="destroy"]')



const createBoxes = (amount) => {
    destroyBoxes();
    let size = 30;
    const itemsList = [];
    // recursion, which replaced loop
    function createDiv (arr, n) {
        if (n<=0) {
            return arr;
        } else {
            const colorRandom = Math.floor(Math.random()*16777215).toString(16);
            const box = document.createElement('div');
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            box.style.marginBottom = '10px';
            box.style.backgroundColor = `#${colorRandom}`;
            size += 10;
            arr.push(box)
            return (createDiv(arr,n-1).concat(arr));
        }
    }
    
    const newBoxes = createDiv(itemsList, amount); 
    //loop  
    //for (let i = 0; i < amount; i += 1){
    //    const colorRandom = Math.floor(Math.random()*16777215).toString(16);
    //    const item = document.createElement('div');
    //    item.style.width = `${size}px`;
    //    item.style.height = `${size}px`;
    //    item.style.marginBottom = '10px';
    //    item.style.backgroundColor = `#${colorRandom}`;
    //    itemsList.push(item);
    //    size += 10;
    //}
    boxes.prepend(...newBoxes);
}

const destroyBoxes = () => {
   while (boxes.firstChild) {
       boxes.removeChild(boxes.lastChild);
    }
   
}

renderBtn.addEventListener('click', () => createBoxes(userInput.value));
destroyBtn.addEventListener('click', () => destroyBoxes());

