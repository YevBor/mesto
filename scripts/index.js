
//popups open buttons
let buttonOpenPopupEdit = document.querySelector(".profile__edit-button");
let buttonOpenPopupNewCard = document.querySelector(".profile__add-button");
//popups close buttons
let buttonClosePopupEdit = document.querySelector(".popup_type_edit .popup__close-image");
let buttonClosePopupNewCard = document.querySelector(".popup_type_new-card .popup__close-image");



//popups
let popupEdit = document.querySelector(".popup_type_edit");
let popupNewCard = document.querySelector(".popup_type_new-card")


let nameInput = document.querySelector(".popup_type_edit .popup__input-name");
let jobInput = document.querySelector(".popup_type_edit .popup__input-profession");

let changeInputName= document.querySelector(".profile__title");
let changeInputJob = document.querySelector(".profile__subtitle");

let formElement = document.querySelector(".popup_type_edit .popup__container");

function togglePopup(popup){
        if (popup.classList.contains("popup_closed") && popup.classList.contains("popup_type_edit")){
            console.log('1');
            nameInput.value = changeInputName.textContent
            jobInput.value = changeInputJob.textContent
        }
        popup.classList.toggle("popup_closed");        
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

const addButton = document.querySelector('.profile__add-button');

const renderList = () =>{
    const items = initialCards.map(element => {
        return `<div class="cards__item">
        <img class="cards__image " src="${element.link}" alt="${element.name}">
        <div class="cards__rectangle">
            <h2 class="cards__title">${element.name}</h2>
            <button type="button"  aria-label="кнопка лайк" class="cards__like-button pointer-opacity"></button>
        </div>
    </div>`
    }).join('');
    cards.insertAdjacentHTML('afterbegin', items);
}

renderList()