import './index.css';
import Section  from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {avatar,popupAvatar,validationSelector, elementTemplate, buttonOpenPopupEdit,buttonOpenPopupNewCard,
    popupEdit,popupNewCard,popupImage,changeInputName,changeInputJob,cards, popupImageSub, popupFullImage,popupDelete}  from '../utils/constants.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Api from '../components/Api.js';



const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/',
    token: 'b51eb88c-1f29-40be-ab99-c44982cb41ab',
    groupId: 'cohort-19'
})



function enableValidation(objectsList) {
    const formElements = Array.from(document.querySelectorAll(objectsList.formSelector));
    formElements.forEach(form => {
        const formValidator = new FormValidator(objectsList, form);
        formValidator.enableValidation();        
    });
}

let myId = '';
api.getProfileData()
    .then(result => {
        userInfo.setUserInfo(result.name, result.about, result._id);
        myId = result._id;
        document.querySelector('.avatar').src = result.avatar;
        
    })
    .catch((err) => {
        console.log(err);
    });
    // let cardId ="";
    const openImagePopup = new PopupWithImage(popupImage, popupImageSub, popupFullImage);

function creatCard(item){
    const card = new Card(myId, item, elementTemplate, {
        handleCardClick: (text, link) => {
            openImagePopup.open(text,link);
            // cardId = card;
        },
        handleDeleteCard: () => {
            popupDeleteCard(card);    
        },
        handleAddLike: () => {
            api.addLike(item._id)
               .then(res =>  {card.likeCount(res)})
               .catch(err => console.log(`ошибка лайка ${err}`))
        },
        handlRemoveLike: () => {
           api.removeLike(item._id)
               .then(res => card.likeCount(res))
               .catch(err => console.log(`ошибка дизлайка ${err}`))
        },
    } );
    return card.generateCard();
}


function popupDeleteCard(card) {
    const popupConfirm = new PopupWithForm(popupDelete, {
        handleFormSubmit: (evt) => {
            api.removeCard(card.getId())
                .catch((err) => {
                    console.log(err);
            });
            card.removeCard();
            popupConfirm.close();            
        }
    })
    popupConfirm.open()
}

// popupDeleteCard.setEventListeners();

const cardList = new Section({
    // items: initialCards,
    renderer: (item) => {
        const card = creatCard(item);
        cardList.addItem(card);
    },
},
cards
);

const newCardPopup = new PopupWithForm(popupNewCard, {
    handleFormSubmit: (evt) => {
        // evt.preventDefault();
        const values = newCardPopup._getInputValues();
        // const data = {
        //     name: values[0],
        //     link: values[1]
        // };
        api.addNewCard(values)
            .then(result => {
                console.log(result._id)
                const card = creatCard(result)
                cardList.addItem(card);
                newCardPopup.close();
        
            })
            .catch((err) => {
                console.log(err);
            });
    }
});


buttonOpenPopupNewCard.addEventListener('click', function(){
    newCardPopup.open();
});

const popupEditProfile = new PopupWithForm(popupEdit, {
    handleFormSubmit: (evt) => {
        // evt.preventDefault();
        const values = popupEditProfile._getInputValues();
        
        api.editUserProfile(values)
            .catch((err) => {
                console.log(err);
            });
            userInfo.setUserInfo(values[0], values[1]); 
        
        popupEditProfile.close();
    }
});


buttonOpenPopupEdit.addEventListener('click', function(){
    popupEditProfile.setInputValues(userInfo.getUserInfo());
    popupEditProfile.open();
});

const userInfo = new UserInfo(changeInputName , changeInputJob);
// cardList.renderItems();
enableValidation(validationSelector);



api.getInitialCards()
    .then(result => {
        cardList.renderItems(result);
    })
    .catch((err) => {
        console.log(err);
    });

const popupUserAvatar = new PopupWithForm(popupAvatar, {
    handleFormSubmit: (evt) => {
        // evt.preventDefault();
        console.log(evt)
        const values = popupUserAvatar._getInputValues();
        console.log(values[0])
        api.editAvatar(values[0])
            .then((res) => {
                popupUserAvatar.close();
            })
            .catch((err) => {
                console.log(err);
            });
            // document.querySelector('.avatar').src = values; 
        
        popupEditProfile.close();
    }
});

avatar.addEventListener('click', function (){
    popupUserAvatar.open();
})



















