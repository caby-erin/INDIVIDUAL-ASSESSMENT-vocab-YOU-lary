import { getSingleCard } from '../api/cardData';
import addCardForm from '../components/forms/addCardForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-card-btn')) {
      addCardForm(user.uid);
      console.warn('ADD CARD');
    }

    if (e.target.id.includes('update-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleCard(firebaseKey).then((cardObj) => addCardForm(cardObj, user));
    }
  });
};

export default domEvents;
