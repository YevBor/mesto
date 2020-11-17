export class FormValidator{
    constructor(selectors, formElement){
        this._formSelector = selectors.formSelector;
        this._inputSelector = selectors.inputSelector;
        this._submitButtonSelector = selectors.submitButtonSelector;
        this._inactiveButtonClass = selectors.inactiveButtonClass;
        this._inputErrorClass = selectors.inputErrorClass;
        this._errorClass = selectors.errorClass;
        this._formElement = formElement;
        console.log(1);
    }
    _getForm() {
        console.log(2);
        const formElement = this._formElement.cloneNode(true);
        return formElement
        
    }

    _setEventListeners(){
        console.log(3);
        const inputElements = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        console.log(inputElements);
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        inputElements.forEach((input) => {
            input.addEventListener('input', (evt) =>{
                checkInputValidity(selectors, formElement, evt.target);
                toggleButtonState(selectors, formElement, buttonElement);
            });
        });
        toggleButtonState(selectors, formElement,buttonElement);
    }

   

    generateForm(){
        console.log(4);
        this._element = this._getForm();
        this._element.addEventListener("submit", (evt) => {
            evt.preventDefault();
            console.log('hi')
        });
        this._setEventListeners();
            
    }
    
} 