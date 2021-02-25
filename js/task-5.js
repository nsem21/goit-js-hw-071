const userInput = document.querySelector('#name-input');
const myOutput = document.querySelector('#name-output');

const greeting = (userEvent) => {
    if (userEvent.target.value) {
    myOutput.textContent = userEvent.target.value;
    } else {
        myOutput.textContent = 'незнакомец';
    }
}

userInput.addEventListener('input', greeting);