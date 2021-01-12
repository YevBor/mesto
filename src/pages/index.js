import './index.css';
import Section  from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {initialCards,validationSelector, elementTemplate, buttonOpenPopupEdit,buttonOpenPopupNewCard,
    popupEdit,popupNewCard,popupImage,changeInputName,changeInputJob,cards, popupImageSub, popupFullImage}  from '../utils/constants.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';



function enableValidation(objectsList) {
    const formElements = Array.from(document.querySelectorAll(objectsList.formSelector));
    formElements.forEach(form => {
        const formValidator = new FormValidator(objectsList, form);
        formValidator.enableValidation();        
    });
}

const openImagePopup = new PopupWithImage(popupImage, popupImageSub, popupFullImage);

function creatCard(item){
    const card = new Card(item, elementTemplate, {
        handleCardClick: (text, link) => {
            openImagePopup.open(text,link);
        }
    } );
    return card.generateCard();
}


const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = creatCard(item);
        cardList.addItem(card);
    },
},
cards
);

const newCardPopup = new PopupWithForm(popupNewCard, {
    handleFormSubmit: (evt) => {
        evt.preventDefault();
        const values = newCardPopup._getInputValues();
        const data = {
            name: values[0],
            link: values[1]
        };
        const card = creatCard(data)
        cardList.addItem(card);
        newCardPopup.close();
    }
});

buttonOpenPopupNewCard.addEventListener('click', function(){
    newCardPopup.open();
});

const popupEditProfile = new PopupWithForm(popupEdit, {
    handleFormSubmit: (evt) => {
        evt.preventDefault();
        const values = popupEditProfile._getInputValues();
        userInfo.setUserInfo(values[0], values[1]);
        popupEditProfile.close();
    }
});

buttonOpenPopupEdit.addEventListener('click', function(){
    popupEditProfile.setInputValues(userInfo.getUserInfo());
    popupEditProfile.open();
});

const userInfo = new UserInfo(changeInputName , changeInputJob);
cardList.renderItems();
enableValidation(validationSelector);


















