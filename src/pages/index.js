import './index.css';
import Section  from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {avatar,popupAvatar,validationSelector, elementTemplate, buttonOpenPopupEdit,buttonOpenPopupNewCard,
    popupEdit,popupNewCard,popupImage,changeInputName,changeInputJob,cards, popupImageSub, popupFullImage,popupDelete,formEditElement,formNewCardElement,formAvatarElement}  from '../utils/constants.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Api from '../components/Api.js';



const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/',
    token: 'b51eb88c-1f29-40be-ab99-c44982cb41ab',
    groupId: 'cohort-19'
})

const formEdit = new FormValidator(validationSelector, formEditElement);
const formNewCard = new FormValidator(validationSelector, formNewCardElement);
const formAvatar = new FormValidator(validationSelector, formAvatarElement);



// enableValidation(validationSelector);
let myId = '';
console.log(myId)
api.getProfileData()
    .then(result => {
        userInfo.setUserInfo(result);
        // userInfo.setUserInfo(result.name, result.about,result.avatar, result._id);
        myId = result._id;
        // document.querySelector('.avatar').src = result.avatar;
        
    })
    .catch((err) => {
        console.log(err);
    });
    // let cardId ="";
    const openImagePopup = new PopupWithImage(popupImage, popupImageSub, popupFullImage);


let carddel = '';


function creatCard(item){
    const card = new Card(myId, item, elementTemplate, {
        handleCardClick: (text, link) => {
            openImagePopup.open(text,link);
            // cardId = card;
        },
        handleDeleteCard: () => {
            deleteCardPopup.open();
            carddel = card;    
        },
        handleAddLike: () => {
            api.addLike(item._id)
               .then(res =>  {card.likeCount(res.likes);
            })
               .catch(err => console.log(err))
        },
        handlRemoveLike: () => {
           api.removeLike(item._id)
               .then(res => card.likeCount(res.likes))
               .catch(err => console.log(err))
        },
    } );
    return card.generateCard();
}





const deleteCardPopup= new PopupWithForm(popupDelete, {
    handleFormSubmit: (evt) => {
        api.removeCard(carddel.getId())
            .then(() => {
                carddel.removeCard();
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                deleteCardPopup.close();
            });
            
        }

})



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
        newCardPopup.setLoading(true);
        api.addNewCard(values)
            .then(result => {
                console.log(result._id)
                const card = creatCard(result)
                cardList.addItem(card);
                newCardPopup.close();
        
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                newCardPopup.setLoading(false);
            });
    }
});


buttonOpenPopupNewCard.addEventListener('click', function(){
    formNewCard.resetValidation();
    formNewCard.enableValidation();
    newCardPopup.open();
});

const popupEditProfile = new PopupWithForm(popupEdit, {
    handleFormSubmit: (evt) => {
        // evt.preventDefault();
        popupEditProfile.setLoading(true);
        const values = popupEditProfile._getInputValues();
        
        api.editUserProfile(values)
            .then((userData) => {
                userInfo.setUserInfo(userData); 
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupEditProfile.setLoading(false);
            }); 
        
        popupEditProfile.close();
    }
});


buttonOpenPopupEdit.addEventListener('click', function(){
    popupEditProfile.setInputValues(userInfo.getUserInfo());
    popupEditProfile.open();
    formEdit.resetValidation();
    formEdit.enableValidation();
});

const userInfo = new UserInfo(changeInputName , changeInputJob,avatar);
// cardList.renderItems();



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
        popupUserAvatar.setLoading(true);
        const values = popupUserAvatar._getInputValues();
        api.editAvatar(values[0])
            .then((res) => {
                userInfo.setUserInfo(res);
                popupUserAvatar.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupUserAvatar.setLoading(false);
            });
        
        popupEditProfile.close();
    }
});

avatar.addEventListener('click', function (){
    popupUserAvatar.open();
    formAvatar.resetValidation();
    formAvatar.enableValidation();
})



















