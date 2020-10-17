let buttonOpenPopup = document.querySelector(".profile__edit-button");
let buttonClosePopup = document.querySelector(".popup__close-image");

let popup = document.querySelector(".popup");
let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-profession");

let changeInputName= document.querySelector(".profile__title");
let changeInputJob = document.querySelector(".profile__subtitle");

let formElement = document.querySelector(".popup__container");

function togglePopup(){
        if (popup.classList.contains("popup_closed")){
            nameInput.value = changeInputName.textContent
            jobInput.value = changeInputJob.textContent
        }
        popup.classList.toggle("popup_closed");        
}

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    changeInputName.textContent = nameInput.value
    changeInputJob.textContent = jobInput.value
    togglePopup()
}

formElement.addEventListener('submit', formSubmitHandler); 

buttonOpenPopup.addEventListener("click", togglePopup);
buttonClosePopup.addEventListener("click", togglePopup);


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