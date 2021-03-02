class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = "http://51.143.18.84";
        this._headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        }; 
    }

    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
    }

}

const api = new Api({
    baseUrl: "http://51.143.18.84",
});

export default api;