// import {FormValidator} from './FormValidator.js';

// function showError(selectors, formElement, input){
//     const errorElement = formElement.querySelector(`#${input.id}-error`);
//     errorElement.textContent = input.validationMessage;
//     input.classList.add(selectors.errorClass);
// }

// function hideError(selectors, formElement, input){
//     const errorElement = formElement.querySelector(`#${input.id}-error`);
//     input.classList.remove(selectors.errorClass);
//     errorElement.textContent = '';
// }


// function checkInputValidity(selectors, formElement, input) {
//     if (input.checkValidity()) {
//         hideError(selectors, formElement, input);
//     } else {
//         showError(selectors, formElement, input);
        
//     }
// }

// function setEventListeners(selectors, formElement) {
//     const inputElements = Array.from(formElement.querySelectorAll(selectors.inputSelector));
//     const buttonElement = formElement.querySelector(selectors.submitButtonSelector);
//     inputElements.forEach((input) => {
//         input.addEventListener('input', (evt) =>{
//             checkInputValidity(selectors, formElement, evt.target);
//             toggleButtonState(selectors, formElement, buttonElement);
//         });
//     });
//     toggleButtonState(selectors, formElement,buttonElement);
// }

// function enableValidation(selectors) {
//     const formElements = Array.from(document.querySelectorAll(selectors.formSelector));
//     formElements.forEach(form => {
//         const formValidator = new FormValidator(selectors, form);
//         form.addEventListener("submit", (evt) => {
//             evt.preventDefault();
//         });
//         setEventListeners(selectors, form);
        
//     });
// }


// function toggleButtonState(selectors, formElement, buttonElement){
//     if (formElement.checkValidity()){
//         buttonElement.classList.remove(selectors.inactiveButtonClass);
//         buttonElement.disabled = false;
//     } 
//     else {
//         addInactiveButtonClass(buttonElement);
//         buttonElement.disabled = true;

//     }
// }

// function addInactiveButtonClass(name){
//     name.classList.add('popup__save-button_invalid');
// }


// function resetNewCardButton(popup){
//     const button_disable = popup.querySelector('.popup__save-button');
//     addInactiveButtonClass(button_disable);
//     button_disable.disabled = true;
// }

// enableValidation({
//     formSelector: '.popup__container',
//     inputSelector: '.popup__text-row',
//     submitButtonSelector: '.popup__save-button',
//     inactiveButtonClass: 'popup__save-button_invalid',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__text-row_state_invalid'
//   });





