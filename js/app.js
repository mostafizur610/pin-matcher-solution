// console.log('app.js')

function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log("pin not 3 digit found", pin);
        return getPin();
    }
}


function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    // console.log(pin);
    // display pin 
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;

});

document.getElementById('calculator').addEventListener('click', function (event) {
    // console.log(event.target.innerText);
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typeNumberField.value;
    if (isNaN(number)) {
        // console.log(number);
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === '<') {
            const digit = previousTypedNumber.split('');
            digit.pop();
            const remainingDigits = digit.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else {


        const newTypedNmber = previousTypedNumber + number;
        typeNumberField.value = newTypedNmber;
    }
});

document.getElementById('verify-pin').addEventListener('click', function () {
    // console.log('verify button clicked');
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typed-number');
    const typeNumbers = typeNumberField.value;


    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if (typeNumbers === currentPin) {
        // console.log('correct pin');
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }

    else {
        // console.log('incorrect pin');
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
});