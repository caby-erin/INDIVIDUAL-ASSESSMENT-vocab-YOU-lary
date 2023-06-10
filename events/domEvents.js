import { deleteCard, getSingleCard, getCards } from '../api/cardData';
import addCardForm from '../components/forms/addCardForm';
import { showCards } from '../pages/cards';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-card-btn')) {
      addCardForm(user.uid);
      console.warn('ADD CARD');
    }

    if (e.target.id.includes('update-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleCard(firebaseKey).then((cardObj) => addCardForm(cardObj, user));
      window.scrollTo(0, 0);
    }

    if (e.target.id.includes('delete-card-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE CARD', e.target.id);
        console.warn(e.target.id.split('--'));
        const [, firebaseKey] = e.target.id.split('--');

        deleteCard(firebaseKey).then(() => {
          getCards(user.uid).then(showCards);
        });
      }
    }
  });
};

export default domEvents;
