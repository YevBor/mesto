import Popup  from './Popup.js';


export class PopupWithImage extends Popup {
    constructor(popupSelector, popupImageSub, popupFullImage){
        super(popupSelector);
        this._popupImageSub = popupImageSub;
        this._popupFullImage = popupFullImage;

    }
    open(text,link){
        super.open();
        this._popupImageSub.innerText = text;
        this._popupFullImage.src = link;
        this._popupFullImage.alt = text;
    }
}
