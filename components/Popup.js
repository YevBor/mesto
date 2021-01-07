
export class Popup{
    constructor(popupSelector){
        this._popup = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeButton = popupSelector.querySelector('.popup__close-image');

    }
    open(){
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        this.setEventListeners();
    }
    close(){
        this._popup.classList.remove('popup_opened');
        this._removeEventListeners();
    }
    _handleEscClose(evt){
        if(evt.key === 'Escape'){
            this.close();
        }
    }
    _handleOverlayClose = (evt) => {
        if (evt.target === evt.currentTarget) {
          this.close();
        }
      }

    setEventListeners(){
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.addEventListener('click', this._handleOverlayClose);
        this._closeButton.addEventListener('click', () => {
            this.close();
          });
    }

    _removeEventListeners() {
        document.removeEventListener('keydown', this._handleEscClose);
        this._popup.removeEventListener('click', this._handleOverlayClose);
        this._closeButton.removeEventListener('click', () => {
            this.close();
          });
      }
}