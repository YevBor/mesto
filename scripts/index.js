let buttonOpenPopup = document.querySelector(".profile__edit-button");
let buttonClosePopup = document.querySelector(".popup__close-image");
let popup = document.querySelector(".popup");


function popupToggle(){
    popup.classList.toggle("popup_opened");
}


buttonOpenPopup.addEventListener("click", popupToggle);
buttonClosePopup.addEventListener("click", popupToggle);



// let proba = document.querySelector(".popup__input-name");

// console.log(proba.textContent);
// proba.textContent = "new text"
// console.log(proba.textContent);
// Находим форму в DOM



let formElement = document.querySelector(".popup__save-button");
console.log(formElement);
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = document.querySelector(".popup__input-name");
    let jobInput = document.querySelector(".popup__input-profession");
    
    let changeInputName= document.querySelector(".profile__title");
    let changeInputJob = document.querySelector(".profile__subtitle");



    let name = nameInput.value;
    let job = jobInput.value; // Получите значение полей из свойства value


    changeInputName.textContent = name;
    changeInputJob.textContent = job;

    popup.classList.toggle("popup_opened");
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 