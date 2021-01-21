export default class Api{
    constructor({address, token, groupId}){
        this._address = address;
        this._token = token;
        this._groupId = groupId;
    }
    getProfileData(){
        return fetch(`${this._address}${this._groupId}/users/me`, {
            headers: {
                authorization: this._token
            }
        })    
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
        
    }
    getInitialCards(){
        return fetch(`${this._address}${this._groupId}/cards`, {
            headers: {
                authorization: this._token
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
}