import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { showCards } from '../pages/cards';
import navigationEvents from '../events/navigationEvents';
import { getCards } from '../api/cardData';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  navigationEvents(user);
  domEvents(user);
  formEvents(user);
  logoutButton();

  getCards(user.uid).then((cards) => showCards(cards));
};

export default startApp;
