
export default class Card {
    constructor(myId, data, templateSelector, { handleCardClick, handleDeleteCard, handleAddLike, handlRemoveLike}){
        this._handleDeleteCard = handleDeleteCard;
        this._handleCardClick = handleCardClick;
        this._handlRemoveLike = handlRemoveLike;
        this._handleAddLike = handleAddLike;
        this._cardId = data._id;
        this._likes = data.likes;
        this._myId = myId;
        this._ownerId = data.owner._id;
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
        const likelist = this._element.querySelector(".cards__like-button");
            likelist.addEventListener("click", () =>  {
                if (likelist.classList.contains("cards__like-button_active")) {
                    console.log('privet')
                    this._handleAddLike();
                } else {
                    console.log(this._element.querySelector(".cards__like-button"))
                    console.log('poka')
                    this._handlRemoveLike();
                }
        });

        this._element.querySelector(".cards__remove-button")
        .addEventListener("click", () => this._handleDeleteCard());

        this.elementCardImage.addEventListener('click', () => this._handleCardClick(this._text, this._link));

    }

    _handleRemoveClick() {
        this._element.remove();
        // document.querySelector('.popup_type_delete-card').classList.add('popup_opened');
    }

    _handleLikeClick() {
        this._element.querySelector(".cards__like-button")
        .classList.toggle("cards__like-button_active");
    }
    removeCard(){
        this._element.remove();
    }

    getId() {
        return this._cardId;
    }
    likeCount(){
        this._element.querySelector(".cards__like-count").innerText = this._likes.length;
    }

    checkLikeState() {
        this._likes.forEach((likeId) => {
            if (likeId._id === this._myId) {
                console.log('hi')
                this._element.querySelector(".cards__like-button")
                    .classList.remove("cards__like-button_active");
            }
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this.elementCardImage = this._element.querySelector(".cards__image");
        this._setEventListeners();
        this.elementCardImage.src = this._link;
        this.elementCardImage.alt = this._altText;
        this._element.querySelector(".cards__title").innerText = this._text;
        this.likeCount();
        this.checkLikeState();
        if (this._ownerId !== this._myId) {
            this._element.querySelector('.cards__remove-button').remove();
        }
        return this._element;
    } 
}