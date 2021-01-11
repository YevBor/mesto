import Popup  from './Popup.js';
import {popupImageSub,popupFullImage} from '../utils/constants.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);

    }
    open(text,link){
        super.open();
        popupImageSub.innerText = text;
        popupFullImage.src = link;
        popupFullImage.alt = text;
        console.log('hi class Popupwith Image');
    }
}
