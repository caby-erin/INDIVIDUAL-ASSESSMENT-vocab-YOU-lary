import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addCardForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-card-btn--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
    <div class="form-group">
      <label for="title">Vocab Word</label>
      <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Vocab Word" value="${obj.title || ''}" required>
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea class="form-control" placeholder="Word/Phrase Definition" id="definition" style="height: 100px" required>${obj.definition || ''}</textarea>
    </div>

    <div class="mb-3">
    <label for="language" class="form-label">Language</label>
    <select id="language" class="form-select" required>
      <option selected value="">Select a language</option>
      <option value="Javascript">JavaScript</option>
      <option value="C#">C#</option>
    </select>
  </div>
    <button type="submit" class="btn btn-primary">Submit Card
    </button>
  </form>`;

  renderToDom('#form-container', domString);
};

export default addCardForm;
