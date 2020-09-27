let buttonOpenPopup = document.querySelector(".profile__edit-button");
let buttonClosePopup = document.querySelector(".popup__close-image");
let popup = document.querySelector(".popup");


function popupToggle(){
    popup.classList.toggle("popup_opened");
}


buttonOpenPopup.addEventListener("click", popupToggle);
buttonClosePopup.addEventListener("click", popupToggle);



let proba = document.querySelector(".popup__input-name");

console.log(proba.textContent);
proba.textContent = "new text"
console.log(proba.textContent);
// // Находим форму в DOM
// let formElement = // Воспользуйтесь методом querySelector()

// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
// function formSubmitHandler (evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                         // Так мы можем определить свою логику отправки.
//                         // О том, как это делать, расскажем позже.

//     // Находим поля формы в DOM
//     let nameInput = document.querySelector(.)// Воспользуйтесь инструментом .querySelector()
//     let jobInput = // Воспользуйтесь инструментом .querySelector()

//     // Получите значение полей из свойства value

//     // Выберите элементы, куда должны быть вставлены значения полей

//     // Вставьте новые значения с помощью textContent
// }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler); 