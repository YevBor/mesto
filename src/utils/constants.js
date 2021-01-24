export const elementTemplate = '.template';

//popups open buttons
export const buttonOpenPopupEdit = document.querySelector(".profile__edit-button");
export const buttonOpenPopupNewCard = document.querySelector(".profile__add-button");
//popups close buttons
export const buttonClosePopupEdit = document.querySelector(".popup_type_edit .popup__close-image");
export const buttonClosePopupNewCard = document.querySelector(".popup_type_new-card .popup__close-image");
export const buttonClosePopupImage = document.querySelector(".popup_type_image .popup__close-image");
//popups
export const popupEdit = ".popup_type_edit";
export const popupNewCard = ".popup_type_new-card";
export const popupImage = ".popup_type_image";
export const nameInput = document.querySelector(".popup_type_edit .popup__input-name");
export const jobInput = document.querySelector(".popup_type_edit .popup__input-profession");
//full size image
export const popupImageSub = document.querySelector(".popup_type_image .popup__subtitle");
export const popupFullImage = document.querySelector(".popup_type_image .popup__image");

export const cardName = document.querySelector(".popup_type_new-card .popup__input-name");
export const cardUrl = document.querySelector(".popup_type_new-card .popup__input-profession");

export const changeInputName = document.querySelector(".profile__title");
export const changeInputJob = document.querySelector(".profile__subtitle");

export const editProfileForm= document.querySelector(".popup_type_edit .popup__container");
export const addCardForm = document.querySelector(".popup_type_new-card .popup__container");
export const cards = document.querySelector('.cards');
export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const validationSelector = {
    formSelector: '.popup__container',
    inputSelector: '.popup__text-row',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_invalid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__text-row_state_invalid'
}