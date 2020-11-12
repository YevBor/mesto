export class Card {
    constructor(data, templateSelector){
        this._text =  data.name;
        this._altText = data.name;
        this._link = data.link;
        this._template = document.querySelector(templateSelector).content;
    }

    render (){
        this._content =  this._template.cloneNode(true);
        this._content.querySelector(".cards__title").innerText = this._text;
        this._content.querySelector(".cards__image").alt = this._altText;
        this._content.querySelector(".cards__image").src = this._link;
        console.log(this._content);
        return this._content
    }

}