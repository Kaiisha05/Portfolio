  // app appArray []; /* declaring an array*/
  // appArray = new app[4]; /*allocating array to memory*/
  // app[] appArray = new app[4]; /*combining the two statements into one*/


  

  var apps = ["appURL", "appImage", "appName"]

// Build Drink Display Cards //
function makeAppCards() {
  var appCardsHTML = '';

    var appURL = ["https://kaiisha05.github.io/Psychic-Game/", "https://kaiisha05.github.io/Crystal-Collector/", "https://kaiisha05.github.io/Trivia-Game/", "https://kaiisha05.github.io/Giphy/", "https://kaiisha05.github.io/Train-Schedule/",  "https://jmbodnar.github.io/Group07-Project01"];
    var appImage = ["assets/images/crystall ball.jpeg", "assets/images/crystals.jpeg", "assets/images/trivia.jpg", "assets/images/vacation.jpeg", "assets/images/train.jpeg", "assets/images/WeathertoDrink.jpg"];
    var appName = ["Psychic", "Crystal Counter", "Childhood Trivia", "Get Giphy", "Trainin' to Meet", "Weather to Drink"];
    //the $ below is not jQuery, it is template literals, which allow making strings out of variables and expressions

    appCardsHTML += `
  <div class="drink-card">
  <h3 class="drink-card__header">${appName}<h3>
  <div class="drink-card__body">
  <img 
  src="${appImage}"
  alt="drink"
  class="drink-card__image"
  />
  <div>
  <a class="drink-card__link" href="${appURL}" target="_blank">Drink Me <i class="fa fa-external-link"></i></a>
  
  </div>
  </div>
  </div>`;
  
  // document.querySelector(".drinks").innerHTML = drinkCardsHTML;
.app-container.documentHTML(appCardsHTML);
};
  makeAppCards();

    


