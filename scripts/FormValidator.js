export class FormValidator{
    constructor(selectors, formElement){
        this._formSelector = selectors.formSelector;
        this._inputSelector = selectors.inputSelector;
        this._submitButtonSelector = selectors.submitButtonSelector;
        this._inactiveButtonClass = selectors.inactiveButtonClass;
        this._inputErrorClass = selectors.inputErrorClass;
        this._errorClass = selectors.errorClass;
        this._formElement = formElement;
    }
   
    _showError(input){
        const errorElement = this._formElement.querySelector(`#${input.id}-error`);
        errorElement.textContent = input.validationMessage;
        input.classList.add(this._errorClass);
    }
    
    _hideError(input){
        const errorElement = this._formElement.querySelector(`#${input.id}-error`);
        input.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }

    _checkInputValidity(input) {
        if (input.checkValidity()) {
            this._hideError(input);
        } else {
            this._showError(input);
            
        }
    }

    _toggleButtonState(buttonElement){
        if (this._formElement.checkValidity()){
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.disabled = false;
        } 
        else {
            this._addInactiveButtonClass(buttonElement);
            buttonElement.disabled = true;
    
        }
    }

    _addInactiveButtonClass(name){
        name.classList.add(this._inactiveButtonClass);
    }

    _setEventListeners(){
        const inputElements = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        inputElements.forEach((input) => {
            input.addEventListener('input', (evt) =>{
                this._checkInputValidity(evt.target);
                this._toggleButtonState(buttonElement);
            });
        });
        this._toggleButtonState(buttonElement);
    }

   

    generateForm(){
        this._element = this._formElement;
        this._element.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();       
    }
    
} 