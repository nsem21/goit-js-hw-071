const userInput = document.querySelector('#validation-input');

const toValidate = (newEvent) => {
    const measurement = newEvent.currentTarget.value.length;
    if (measurement === 6) {
        userInput.classList.remove('valid')
        userInput.classList.remove('invalid')
        userInput.classList.add('valid')

    } else {
        userInput.classList.remove('valid')
        userInput.classList.remove('invalid')
        userInput.classList.add('invalid')
    }
}
userInput.addEventListener('change', toValidate);