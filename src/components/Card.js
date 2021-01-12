
export default class Card {
    constructor(data, templateSelector, { handleCardClick }){
        this._handleCardClick = handleCardClick;
        this._text =  data.name;
        this._altText = data.name;
        this._link = data.link;
        this._template = document.querySelector(templateSelector).content.querySelector(".cards__item");
        this.elementCard = document.querySelector(".cards__image");
    }
    _getTemplate() {
        const cardElement = this._template.cloneNode(true);
        return cardElement;
    }

    _setEventListeners() {
        this._element.querySelector(".cards__like-button")
        .addEventListener("click", () => this._handleLikeClick());

        this._element.querySelector(".cards__remove-button")
        .addEventListener("click", () => this._handleRemoveClick());

        this.elementCardImage.addEventListener('click', () => this._handleCardClick(this._text, this._link));

    }

    _handleRemoveClick() {
        this._element.remove();
    }

    _handleLikeClick() {
        this._element.querySelector(".cards__like-button")
        .classList.toggle("cards__like-button_active");
    }

    generateCard() {
        this._element = this._getTemplate();
        this.elementCardImage = this._element.querySelector(".cards__image");
        this._setEventListeners();
        this.elementCardImage.src = this._link;
        this.elementCardImage.alt = this._altText;
        this._element.querySelector(".cards__title").innerText = this._text;
        return this._element;
    } 
}