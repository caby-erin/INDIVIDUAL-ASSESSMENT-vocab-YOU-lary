import addCardForm from '../components/forms/addCardForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-card-btn')) {
      addCardForm(user.uid);
      console.warn('ADD CARD');
    }
  });
};

export default domEvents;
