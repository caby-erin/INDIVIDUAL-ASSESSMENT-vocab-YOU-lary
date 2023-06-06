import { signOut } from '../utils/auth';
import { showCards } from '../pages/cards';
import { getCards, jsCards, cSharpCards } from '../api/cardData';

const navigationEvents = (user) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // Show All Cards
  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards(user.uid).then(showCards);
  });
  // Show JS Cards
  document.querySelector('#js-cards').addEventListener('click', () => {
    jsCards(user.uid).then(showCards);
  });
  // Show C# Cards
  document.querySelector('#c-sharp-cards').addEventListener('click', () => {
    cSharpCards(user.uid).then(showCards);
  });
};

export default navigationEvents;
