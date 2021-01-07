
export class Popup{
    constructor(popupSelector){
        this._popup = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeButton = popupSelector.querySelector('.popup__close-image');

    }
    open(){
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        // this.setEventListeners();
    }
    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose(evt){
        if(evt.key === 'Escape'){
            this.close();
        }
    }
    setEventListeners(){
        this._closeButton.addEventListener('click', () => this.close());

    }
}