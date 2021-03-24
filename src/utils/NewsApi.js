const today = new Date()
const sevenDaysAgo = new Date(today - (7*86400000))
const dateApi = sevenDaysAgo.toISOString().split('T')[0];

export const getSearchArticles = (keyword) => {
    return fetch(`https://nomoreparties.co/news/v2/everything?q=${keyword}&from=${dateApi}&sortBy=publishedAt&pageSize=100&apiKey=352235b5a82043a8ac9321e5ada81a49`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
  };