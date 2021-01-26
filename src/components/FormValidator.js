export default class FormValidator{
    constructor(selectors, formElement){
        console.log(formElement)
        this._formSelector = selectors.formSelector;
        this._inputSelector = selectors.inputSelector;
        this._submitButtonSelector = selectors.submitButtonSelector;
        this._inactiveButtonClass = selectors.inactiveButtonClass;
        this._inputErrorClass = selectors.inputErrorClass;
        this._errorClass = selectors.errorClass;
        this._form = formElement;
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._submitButton = this._form.querySelector(this._submitButtonSelector);
    }
   
    _showError(input){
        const errorElement = this._form.querySelector(`#${input.id}-error`);
        errorElement.textContent = input.validationMessage;
        input.classList.add(this._errorClass);
    }
    
    _hideError(input){
        const errorElement = this._form.querySelector(`#${input.id}-error`);
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
        if (this._form.checkValidity()){
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
        // const inputElements = Array.from(this._form.querySelectorAll(this._inputSelector));
        // const buttonElement = this._form.querySelector(this._submitButtonSelector);
        this._inputList.forEach((input) => {
            input.addEventListener('input', (evt) =>{
                this._checkInputValidity(evt.target);
                this._toggleButtonState(this._submitButton);
            });
        });
        this._toggleButtonState(this._submitButton);
    }


    enableValidation(){
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();           
        });
        this._setEventListeners();       
    }
    
    resetValidation() {
        this._inputList.forEach((inputElement) => {
          this._hideError(inputElement)
        });
  
        // this._toggleButtonState();
      }
    
} 