import { Popup } from './Popup.js';
export class PopupWithForm extends Popup{
    constructor(popupSelector, {handleFormSubmit}){
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__container');
    }
    _getInputValues() {
        const values = this._fields.map((field) => {
            return field.value;
        });
        return values;
    }
    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleFormSubmit);
    }
    close(){
        super.close();
        this._form.reset();
        this._form.removeEventListener('submit', this._handleFormSubmit);
    }
    


}