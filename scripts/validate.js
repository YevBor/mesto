function showError(formElement, input){
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    input.classList.add('popup__text-row_state_invalid');
};

function hideError(formElement, input){
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    input.classList.remove('popup__text-row_state_invalid');
    errorElement.textContent = '';
};


function checkInputValidity(formElement, input) {
    console.log("in check validity");
    if (input.checkValidity()) {
        hideError(formElement, input);
        console.log("true");
    } else {
        console.log("false");
        showError(formElement, input);
        
    }
};

function setEventListeners(formElement) {
    const inputElements = Array.from(formElement.querySelectorAll('.popup__text-row'));
    const buttonElement = formElement.querySelector('.popup__save-button');
    inputElements.forEach((input) => {
        input.addEventListener('input', (evt) =>{
            checkInputValidity(formElement, evt.target);
            toggleButtonState(formElement, buttonElement);
        });
    });
    toggleButtonState(formElement,buttonElement);
};

function enableValidation() {
    const formElements = Array.from(document.querySelectorAll('.popup__container'));
    console.log(formElements);
    formElements.forEach(form => {
        form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form);
    });
}


function toggleButtonState(formElement, buttonElement){
    if (formElement.checkValidity()){
        buttonElement.classList.remove('popup__save-button_invalid');
        buttonElement.disabled = false;
    } else {
        buttonElement.classList.add('popup__save-button_invalid');
        buttonElement.disabled = true;

    };
};
enableValidation();


