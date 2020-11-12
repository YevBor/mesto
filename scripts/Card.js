export class Card {
    constructor(data, templateSelector){
        this._text =  data.name;
        this._altText = data.name;
        this._link = data.link;
        this._template = document.querySelector(templateSelector).content.querySelector(".cards__item");
    }
    _delete() {
        this._content.remove();
    }
    _like(){
        this._content.querySelector(".cards__like-button")
        .classList.toggle("cards__like-button_active");
    }



    render (){
        this._content =  this._template.cloneNode(true);
        this._content.querySelector(".cards__title").innerText = this._text;
        this._content.querySelector(".cards__image").alt = this._altText;
        this._content.querySelector(".cards__image").src = this._link;
        this._content.querySelector(".cards__remove-button").addEventListener("click", () => this._delete());
        this._content.querySelector(".cards__like-button").addEventListener("click", () => this._like());
        return this._content
    }

}