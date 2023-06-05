import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { showCards } from '../pages/cards';
import getCards from '../api/cardData';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();

  getCards(user.uid).then((cards) => showCards(cards));
};

export default startApp;
