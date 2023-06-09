import {
  getCards, createCard, updateCard
} from '../api/cardData';
import { showCards } from '../pages/cards';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // Submit New Cards
    if (e.target.id.includes('submit-card')) {
      const dateSubmitted = new Date();
      const date = dateSubmitted.toLocaleString();
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        date_submitted: date,
        uid: user.uid
      };
      console.warn('CLICKED SUBMIT CARD', payload);
      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCard(patchPayload).then(() => {
          getCards(user.uid).then(showCards);
        });
      });
    }

    // Click event for editing a card
    if (e.target.id.includes('update-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        firebaseKey,
      };

      updateCard(payload).then(() => {
        getCards(user.uid).then(showCards);
      });
      console.warn('CLICKED UPDATE CARD', e.target.id);
      console.warn(firebaseKey);
    }
  });
};

export default formEvents;
