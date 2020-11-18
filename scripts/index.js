import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
const elementTemplate = '.template';

const template = document.querySelector(".template");
//popups open buttons
const buttonOpenPopupEdit = document.querySelector(".profile__edit-button");
const buttonOpenPopupNewCard = document.querySelector(".profile__add-button");
//popups close buttons
const buttonClosePopupEdit = document.querySelector(".popup_type_edit .popup__close-image");
const buttonClosePopupNewCard = document.querySelector(".popup_type_new-card .popup__close-image");
const buttonClosePopupImage = document.querySelector(".popup_type_image .popup__close-image");
//popups
const popupEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");
const nameInput = document.querySelector(".popup_type_edit .popup__input-name");
const jobInput = document.querySelector(".popup_type_edit .popup__input-profession");
//full size image
const popupImageSub = document.querySelector(".popup_type_image .popup__subtitle");
const popupFullImage = document.querySelector(".popup_type_image .popup__image");

const cardName = document.querySelector(".popup_type_new-card .popup__input-name");
const cardUrl = document.querySelector(".popup_type_new-card .popup__input-profession");

const changeInputName = document.querySelector(".profile__title");
const changeInputJob = document.querySelector(".profile__subtitle");

const editProfileForm= document.querySelector(".popup_type_edit .popup__container");
const addCardForm = document.querySelector(".popup_type_new-card .popup__container");
const closeOver = document.querySelectorAll(".popup_opened");
const cards = document.querySelector('.cards');

popupEdit.addEventListener('click', closePopupOverlay);
popupNewCard.addEventListener('click', closePopupOverlay);
popupImage.addEventListener('click', closePopupOverlay);


function togglePopup(popup) {
    
    handleEscListener(popup);
    popup.classList.toggle("popup_opened");
}

function closePopupOverlay(evt){
    if (evt.target === evt.currentTarget){
        console.log(evt.currentTarget.querySelector('.popup_opened'));
        togglePopup(evt.target);
    } 
}


function formSubmitHandler(evt) {
    evt.preventDefault(); 
    changeInputName.textContent = nameInput.value;
    changeInputJob.textContent = jobInput.value;
    togglePopup(popupEdit);
}

editProfileForm.addEventListener('submit', formSubmitHandler);

function handleKeyDown(evt){
    if(evt.key === 'Escape'){
        document.removeEventListener('keydown', handleKeyDown);
        togglePopup(evt.currentTarget.querySelector('.popup_opened'));
    }
}

function addClosePopup(elements){
    elements.forEach(form => {
        if (form.classList.contains('popup_opened')){
            form.classList.remove('popup_opened');
        };
    })
}

function handleEscListener(popup) {
    if (!popup.classList.contains('popup_opened')) {
        document.addEventListener('keydown', handleKeyDown);
    } else{
        document.removeEventListener('keydown', handleKeyDown);
    }
}

buttonOpenPopupEdit.addEventListener("click", function () {
    nameInput.value = changeInputName.textContent;
    jobInput.value = changeInputJob.textContent;
    togglePopup(popupEdit);
   
});


buttonClosePopupEdit.addEventListener("click", function () {
    togglePopup(popupEdit);
});

buttonOpenPopupNewCard.addEventListener("click", function (evt) {
    cardName.value = "";
    cardUrl.value = "";
    resetNewCardButton(popupNewCard);
    togglePopup(popupNewCard);
});

buttonClosePopupNewCard.addEventListener("click", function () {
    togglePopup(popupNewCard);
});

buttonClosePopupImage.addEventListener("click", function () {
    togglePopup(popupImage);
});


function openImage(text, link){
    popupImageSub.innerText = text;
    popupFullImage.src = link;
    popupFullImage.alt = text;
    togglePopup(popupImage);
}

const handleSubmitCard = (evt) => {
    evt.preventDefault();
    const cardClass =new Card({
        name: cardName.value,
        link: cardUrl.value
    }, elementTemplate, openImage);
    cards.prepend(cardClass.generateCard());
    togglePopup(popupNewCard);
};

addCardForm.addEventListener('submit', handleSubmitCard);

initialCards.forEach((item) => {
  const card = new Card(item, elementTemplate, openImage);
  const cardElement = card.generateCard();
  cards.prepend(cardElement);
});


function enableValidation(selectors) {
    const formElements = Array.from(document.querySelectorAll(selectors.formSelector));
    formElements.forEach(form => {
        const formValidator = new FormValidator(selectors, form);
        formValidator.generateForm();        
    });
}

function resetNewCardButton(popup){
    const button_disable = popup.querySelector('.popup__save-button');
    button_disable.classList.add('popup__save-button_invalid');
    button_disable.disabled = true;
}

enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__text-row',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_invalid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__text-row_state_invalid'
  });


  




