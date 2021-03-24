import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

function SavedNewsMain({articles}) {
  const currentUser = React.useContext(CurrentUserContext);
  articles = articles.filter(article => article.owner == currentUser._id)
  const articlesDict = {};
  articles.forEach(function(article) {
    if (!articlesDict.hasOwnProperty(article.keyword)) {
      articlesDict[article.keyword] = 1;
    } else {
      articlesDict[article.keyword] += 1;
    }
  })
  const sortable = Object.fromEntries(
      Object.entries(articlesDict).sort( (a,b) => a[1] - b[1] )    
   );
let articlesKeys = ""
const finalKeywords = Object.keys(sortable).reverse();
if (finalKeywords.length <=3) {
  articlesKeys = finalKeywords.join(", ");
} else {
  articlesKeys = `${finalKeywords[0]}, ${finalKeywords[1]} and ${finalKeywords.length-2} others`
}

  return (
      <section className="main-saved">
        <h3 className="main-saved__subtitle">Saved articles</h3>
        <h2 className="main-saved__title">{currentUser.name}, you have {articles.length} saved articles</h2>
        <p className="main-saved__text">By keywords: <b>{articlesKeys}</b></p>
      </section>
  );

}

export default SavedNewsMain;