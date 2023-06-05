import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewCard = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
       <i id="update-card-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-card-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   `;

  renderToDom('#card-container', domString);
};

export default viewCard;
