const template = document.querySelector(".template");
//popups open buttons
let buttonOpenPopupEdit = document.querySelector(".profile__edit-button");
let buttonOpenPopupNewCard = document.querySelector(".profile__add-button");
//popups close buttons
let buttonClosePopupEdit = document.querySelector(".popup_type_edit .popup__close-image");
let buttonClosePopupNewCard = document.querySelector(".popup_type_new-card .popup__close-image");
let buttonClosePopupImage = document.querySelector(".popup_type_image .popup__close-image");




//popups
let popupEdit = document.querySelector(".popup_type_edit");
let popupNewCard = document.querySelector(".popup_type_new-card");
let popupImage = document.querySelector(".popup_type_image");


const nameInput = document.querySelector(".popup_type_edit .popup__input-name");
const jobInput = document.querySelector(".popup_type_edit .popup__input-profession");

const cardName = document.querySelector(".popup_type_new-card .popup__input-name");
const cardUrl = document.querySelector(".popup_type_new-card .popup__input-profession");

let changeInputName= document.querySelector(".profile__title");
let changeInputJob = document.querySelector(".profile__subtitle");

let formElement = document.querySelector(".popup_type_edit .popup__container");
let formElementCards = document.querySelector(".popup_type_new-card .popup__container");


// !!!!! Need to update
function togglePopup(popup){
        if (popup.classList.contains("popup_closed") && popup.classList.contains("popup_type_edit")){
            console.log('1');
            nameInput.value = changeInputName.textContent
            jobInput.value = changeInputJob.textContent
        }
        popup.classList.toggle("popup_closed");
        cardName.value = "";
        cardUrl.value = "";        
}


function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    changeInputName.textContent = nameInput.value;
    changeInputJob.textContent = jobInput.value;
    togglePopup(popupEdit);
}



formElement.addEventListener('submit', formSubmitHandler); 


buttonOpenPopupEdit.addEventListener("click", function () { 
    togglePopup(popupEdit)
});
buttonClosePopupEdit.addEventListener("click",  function () { 
    togglePopup(popupEdit)
});

buttonOpenPopupNewCard.addEventListener("click",  function () { 
    togglePopup(popupNewCard)
});

buttonClosePopupNewCard.addEventListener("click",  function () { 
    togglePopup(popupNewCard)
});

buttonClosePopupImage.addEventListener("click", function () {
    togglePopup(popupImage);
})

const initialCards = [
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

const cards = document.querySelector('.cards');
//cards
let cardImport = document.querySelector(".cards__item");

const addButton = document.querySelector('.profile__add-button');

const renderList = () =>{
    const items = initialCards.map(element => getItems(element));
    cards.prepend(...items);
}


const handlerRemove = (evt) => {
    evt.target.closest('.cards__item').remove();
};

const handlerLike = (evt) => {
    evt.target.classList.toggle("cards__like-button_active");
};

const handlerImage = (evt) => {
    console.log(evt);
    popupImage.querySelector(".popup__subtitle").innerText=evt.target.alt;
    popupImage.querySelector(".popup__image").src=evt.target.src;
    popupImage.querySelector(".popup__image").alt=evt.target.alt;
    popupImage.classList.toggle("popup_closed");
};


const getItems = (element) => {
    const card = template.content.cloneNode(true);
    card.querySelector(".cards__image").src=element.link
    card.querySelector(".cards__image").alt=element.name
    card.querySelector(".cards__title").innerText=element.name
    console.log(popupImage.querySelector(".popup__subtitle").alt)
    //remove card button
    const removeButton = card.querySelector(".cards__remove-button");
    //like button
    const likeButton = card.querySelector(".cards__like-button");
    //open popupImage
    const fullSizeImage = card.querySelector(".cards__image");
    fullSizeImage.addEventListener('click', handlerImage);
    likeButton.addEventListener('click', handlerLike);
    removeButton.addEventListener('click', handlerRemove);
    return card;
};

const bindHandlers = (evt) => {
    evt.preventDefault();
    const item = getItems({
        name: cardName.value,
        link: cardUrl.value
    })
    cards.prepend(item);
    cardName.value = "";
    cardUrl.value = "";
    togglePopup(popupNewCard);
};

formElementCards.addEventListener('submit', bindHandlers); 

renderList()
