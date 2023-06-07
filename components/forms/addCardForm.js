import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addCardForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
    <div class="form-group">
      <label for="title">Vocab Word</label>
      <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Vocab Word" value="${obj.title || ''}" required>
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea class="form-control" placeholder="Word/Phrase Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
    </div>

    <div class="form-group" id="select-language">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Language
      </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" value="Javascript" id="language">Javascript</a></li>
         <li><a class="dropdown-item" value="C#">C#</a></li>
        </ul>
    </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit Card
    </button>
  </form>`;

  renderToDom('#form-container', domString);
};

export default addCardForm;
