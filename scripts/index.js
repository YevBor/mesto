

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

function togglePopup(popup) {
    popup.addEventListener('click', function (evt){
        if (evt.target === evt.currentTarget){
            togglePopup(popup);
        } 
    });
    handleEscListener(popup);
    popup.classList.toggle("popup_closed");
}

function formSubmitHandler(evt) {
    evt.preventDefault(); 
    changeInputName.textContent = nameInput.value;
    changeInputJob.textContent = jobInput.value;
    togglePopup(popupEdit);
}

editProfileForm.addEventListener('submit', formSubmitHandler);
//////////////////////////////////////////////////////////////////
function handleKeyDown(evt){
    if(evt.key === 'Escape'){
        document.removeEventListener('keydown', handleKeyDown);
        const elements = Array.from(evt.currentTarget.querySelectorAll(".popup__overlay"));
        addClosePopup(elements);
    }
};

function addClosePopup(elements){
    elements.forEach(form => {
        if (!form.classList.contains('popup_closed')){
            form.classList.add('popup_closed');
        };
    })
}


function handleEscListener(popup) {
    if (popup.classList.contains('popup_closed')) {
        document.addEventListener('keydown', handleKeyDown);
    } else{
        document.removeEventListener('keydown', handleKeyDown);
    }
};


// function onClickClosePopupOverlay(popup) {
//     popup.addEventListener('click', function (evt){
//         if (evt.target === evt.currentTarget){
//             togglePopup(popup);
//         } 
//     });
// };

///////////////////////////////////////////////////////////////////

buttonOpenPopupEdit.addEventListener("click", function () {
    nameInput.value = changeInputName.textContent;
    jobInput.value = changeInputJob.textContent;
    togglePopup(popupEdit);
    // onClickClosePopupOverlay(popupEdit);
    // popupEdit.addEventListener('click', function (evt){
    //     if (evt.target === evt.currentTarget){
    //         togglePopup(popupEdit);
    //     } 
    // });
});


buttonClosePopupEdit.addEventListener("click", function () {
    togglePopup(popupEdit);
});

buttonOpenPopupNewCard.addEventListener("click", function (evt) {
    cardName.value = "";
    cardUrl.value = "";
    console.log(evt.currentTarget);
    resetNewCardButton(popupNewCard)
    togglePopup(popupNewCard);
    // onClickClosePopupOverlay(popupNewCard);
    // popupEdit.addEventListener('click', function (evt){
    //     if (evt.target === evt.currentTarget){
    //         togglePopup(popupEdit);
    //     } 
    // });
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
    // onClickClosePopupOverlay(popupImage);
    // popupImage.addEventListener('click', function (evt){
    //     if (evt.target === evt.currentTarget){
    //         togglePopup(popupImage);
    //     } 
    // });
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
    togglePopup(popupNewCard);
};

addCardForm.addEventListener('submit', handleSubmitCard);

renderList()
