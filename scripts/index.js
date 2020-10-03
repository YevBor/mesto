let buttonOpenPopup = document.querySelector(".profile__edit-button");
let buttonClosePopup = document.querySelector(".popup__close-image");

let popup = document.querySelector(".popup");
let close = document.querySelector(".popup_closed");

let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-profession");

let changeInputName= document.querySelector(".profile__title");
let changeInputJob = document.querySelector(".profile__subtitle");

let formElement = document.querySelector(".popup__container");

function togglePopup(){
        if (popup.classList.contains("popup_closed")){
            console.log("nuka");
            nameInput.value = changeInputName.textContent
            jobInput.value = changeInputJob.textContent
        }else{   
            console.log("naka");
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
formElement.addEventListener('submit', formSubmitHandler); 