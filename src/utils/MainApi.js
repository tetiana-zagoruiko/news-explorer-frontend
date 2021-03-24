export const BASE_URL = 'http://51.143.18.84';

export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      }
    })
    .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
  };


  export const getAllArticles = () => {
    return fetch(`${BASE_URL}/articles`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      }
    })
    .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
  };


  export const deleteArticle = (articleID) => {
    return fetch(`${BASE_URL}/articles/${articleID}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      }
    })
    .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
  };

  export const postArticle = (article) => {
    return fetch(`${BASE_URL}/articles`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({"keyword": localStorage.getItem('keyword'), 
      "title": article.title, "text": article.content, "date": article.publishedAt,
      "source": article.source.name, "link": article.url, "image": article.urlToImage})
    })
    .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
  };