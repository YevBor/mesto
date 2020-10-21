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

const cards = document.querySelector('.cards');
//cards
const cardImport = document.querySelector(".cards__item");

const addButton = document.querySelector('.profile__add-button');



function togglePopup(popup) {
    popup.classList.toggle("popup_closed");
}

function formSubmitHandler(evt) {
    evt.preventDefault(); 
    changeInputName.textContent = nameInput.value;
    changeInputJob.textContent = jobInput.value;
    togglePopup(popupEdit);
}

editProfileForm.addEventListener('submit', formSubmitHandler);

buttonOpenPopupEdit.addEventListener("click", function () {
    nameInput.value = changeInputName.textContent;
    jobInput.value = changeInputJob.textContent;
    togglePopup(popupEdit);
});
buttonClosePopupEdit.addEventListener("click", function () {
    togglePopup(popupEdit);
});

buttonOpenPopupNewCard.addEventListener("click", function () {
    cardName.value = "";
    cardUrl.value = "";
    togglePopup(popupNewCard);
});

buttonClosePopupNewCard.addEventListener("click", function () {
    togglePopup(popupNewCard);
});

buttonClosePopupImage.addEventListener("click", function () {
    togglePopup(popupImage);
});

const renderList = () => {
    const items = initialCards.map(element => getItem(element));
    cards.prepend(...items);
};

const handlerRemove = (evt) => {
    evt.target.closest('.cards__item').remove();
};

const handlerLike = (evt) => {
    evt.target.classList.toggle("cards__like-button_active");
};

const handlerImage = (element) => {
    popupImageSub.innerText = element.name;
    popupFullImage.src = element.link;
    popupFullImage.alt = element.name;
    togglePopup(popupImage);

};


const getItem = (element) => {
    const card = template.content.cloneNode(true);
    const cardImage = card.querySelector(".cards__image");
    const removeButton = card.querySelector(".cards__remove-button");
    const likeButton = card.querySelector(".cards__like-button");
    cardImage.src = element.link
    cardImage.alt = element.name
    card.querySelector(".cards__title").innerText = element.name
    cardImage.addEventListener('click', () => handlerImage(element));
    likeButton.addEventListener('click', handlerLike);
    removeButton.addEventListener('click', handlerRemove);
    return card;

};

const handleSubmitCard = (evt) => {
    evt.preventDefault();
    const item = getItem({
        name: cardName.value,
        link: cardUrl.value
    })
    cards.prepend(item);
    // cardName.value = "";
    // cardUrl.value = "";
    togglePopup(popupNewCard);
};

addCardForm.addEventListener('submit', handleSubmitCard);

renderList()
