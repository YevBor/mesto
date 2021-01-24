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
    editUserProfile(values){
        return fetch(`${this._address}${this._groupId}/users/me`,{
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: values[0],
                about: values[1]
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    addNewCard(values){
        return fetch(`${this._address}${this._groupId}/cards`,{
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: values[0],
                link : values[1]
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    removeCard(id) {
        return fetch(`${this._address}${this._groupId}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
    removeLike(id) {
        return fetch(`${this._address}${this._groupId}/cards/likes/${id}`, {
            method: "DELETE",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    addLike(id) {
        return fetch(`${this._address}${this._groupId}/cards/likes/${id}`, {
            method: "PUT",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    editAvatar(data) {
        return fetch(`${this._address}${this._groupId}/users/me/avatar`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                avatar: data,
            }),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
}