import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import {Card} from '../scripts/Card.js';
import {FormValidator} from '../scripts/FormValidator.js';
import {initialCards} from '../scripts/initialCards.js';
import {elementTemplate, buttonOpenPopupEdit,buttonOpenPopupNewCard,
    buttonClosePopupEdit,buttonClosePopupNewCard,buttonClosePopupImage,
    popupEdit,popupNewCard,popupImage,nameInput,jobInput,popupImageSub,
    popupFullImage,cardName,cardUrl,changeInputName,changeInputJob,
    editProfileForm,addCardForm,cards}  from '../utils/constants.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import {PopupWithForm} from '../components/PopupWithForm.js';

// popupEdit.addEventListener('click', closePopupOverlay);
// popupNewCard.addEventListener('click', closePopupOverlay);
// popupImage.addEventListener('click', closePopupOverlay);


// function togglePopup(popup) {
//     handleEscListener(popup);
//     popup.classList.toggle("popup_opened");
// }

// function closePopupOverlay(evt){
//     if (evt.target === evt.currentTarget){
//         togglePopup(evt.target);
//     } 
// }


// function formSubmitHandler(evt) {
//     evt.preventDefault(); 
//     changeInputName.textContent = nameInput.value;
//     changeInputJob.textContent = jobInput.value;
//     togglePopup(popupEdit);
// }

// editProfileForm.addEventListener('submit', formSubmitHandler);

// function handleKeyDown(evt){
//     if(evt.key === 'Escape'){
//         togglePopup(evt.currentTarget.querySelector('.popup_opened'));
//     }
// }

// function handleEscListener(popup) {
//     if (!popup.classList.contains('popup_opened')) {
//         document.addEventListener('keydown', handleKeyDown);
//     } else{
//         document.removeEventListener('keydown', handleKeyDown);
//     }
// }

// buttonOpenPopupEdit.addEventListener("click", function () {
//     nameInput.value = changeInputName.textContent;
//     jobInput.value = changeInputJob.textContent;
//     togglePopup(popupEdit);
   
// });


// buttonClosePopupEdit.addEventListener("click", function () {
//     togglePopup(popupEdit);
// });

// buttonOpenPopupNewCard.addEventListener("click", function () {
//     cardName.value = "";
//     cardUrl.value = "";
//     resetNewCardButton(popupNewCard);
//     togglePopup(popupNewCard);
// });

// buttonClosePopupNewCard.addEventListener("click", function () {
//     togglePopup(popupNewCard);
// });

// buttonClosePopupImage.addEventListener("click", function () {
//     togglePopup(popupImage);
// });


// function openImage(text, link){
//     popupImageSub.innerText = text;
//     popupFullImage.src = link;
//     popupFullImage.alt = text;
//     togglePopup(popupImage);
// }

// const handleSubmitCard = (evt) => {
//     evt.preventDefault();
//     const cardClass =new Card({
//         name: cardName.value,
//         link: cardUrl.value
//     }, elementTemplate, openImage);
//     cards.prepend(cardClass.generateCard());
//     togglePopup(popupNewCard);
// };

// addCardForm.addEventListener('submit', handleSubmitCard);

// initialCards.forEach((item) => {
//     const card = new Card(item, elementTemplate, openImage);
//     const cardElement = card.generateCard();
//     cards.prepend(cardElement);
// });


function enableValidation(selectors) {
    const formElements = Array.from(document.querySelectorAll(selectors.formSelector));
    formElements.forEach(form => {
        const formValidator = new FormValidator(selectors, form);
        formValidator.generateForm();        
    });
}

// function resetNewCardButton(popup){
//     const buttonDisable = popup.querySelector('.popup__save-button');
//     buttonDisable.classList.add('popup__save-button_invalid');
//     buttonDisable.disabled = true;
// }

enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__text-row',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_invalid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__text-row_state_invalid'
});

// ##################################


function creatCard(item){
    const card = new Card(item, elementTemplate, {
        handleCardClick: (text, link) => {
            const openImagePopup = new PopupWithImage(popupImage);
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


buttonOpenPopupNewCard.addEventListener('click', function(){
    const newCard = new PopupWithForm(popupNewCard, {
      handleFormSubmit: (evt) => {
        evt.preventDefault();
        const values = newCard._getInputValues();
        const data = {
          name: values[0],
          link: values[1]
        };
        const card = creatCard(data)
        cardList.addItem(card);
        newCard.close();
      }
    });
    newCard.open();
  });

cardList.renderItems();

const userInfo = new UserInfo(changeInputName , changeInputJob);

buttonOpenPopupEdit.addEventListener('click', function(){
    const popupEditProfile = new PopupWithForm(popupEdit, {
      handleFormSubmit: (evt) => {
        evt.preventDefault();
        const values = popupEditProfile._getInputValues();
        userInfo.setUserInfo(values[0], values[1]);
        popupEditProfile.close();
      }
    });
    popupEditProfile._setInputValues(userInfo.getUserInfo());
    popupEditProfile.open();
  });






  




