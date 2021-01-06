import { Popup } from './Popup.js';
export class PopupWithForm extends Popup{
    constructor(popupSelector, formSubmit){
        super(popupSelector);
        
         
    }
    _getInputValues(){

    }
    setEventListeners(){
        super.setEventListeners();
    }
    close(){
        super.close();
    }
    


}