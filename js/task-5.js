const userInput = document.querySelector('#name-input');
const greetOutput = document.querySelector('#name-output');

const greeting = (inputEvent) => {
    greetOutput.textContent = inputEvent.target.value ? inputEvent.target.value : 'незнакомец';    
}

userInput.addEventListener('input', greeting);