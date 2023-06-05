import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDom('#card-container', domString);
};

const showCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn">Add A Card</button>';
  renderToDom('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
  <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
          <h5 class="card-title">${item.definition}</h5>
          <h5 class="card-title">${item.language}</h5>
            <hr>
            <i id="edit-card-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-card-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });

  renderToDom('#card-container', domString);
};

export { showCards, emptyCards };
