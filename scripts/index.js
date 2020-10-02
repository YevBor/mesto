let buttonOpenPopup = document.querySelector(".profile__edit-button");
let buttonClosePopup = document.querySelector(".popup__close-image");

let popup = document.querySelector(".popup");

let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-profession");

let changeInputName= document.querySelector(".profile__title");
let changeInputJob = document.querySelector(".profile__subtitle");

let state = 0;

let formElement = document.querySelector(".popup__container");

function popupToggle(){
        popup.classList.toggle("popup_closed");
}

function openWindowChecker(){
    if ( state === 0){
        state = 1;
        popupToggle();
    }else{
        nameInput.value = "";
        jobInput.value = ""; 
        state = 0;
        popupToggle();    
    }
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    changeInputName.textContent = nameInput.value;
    changeInputJob.textContent = jobInput.value;
    openWindowChecker();
}

buttonOpenPopup.addEventListener("click", openWindowChecker);
buttonClosePopup.addEventListener("click", openWindowChecker);
formElement.addEventListener('submit', formSubmitHandler); 