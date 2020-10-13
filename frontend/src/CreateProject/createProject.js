import React from "react";
import "./createProjectStyles.scss";
function CreateProject() {
  return (
    <div class="wrapper">
      <header>Header</header>
      <div class="contentWrapper">
        <h1>Create project</h1>
        <div class="titleAndStausWrapper">
          <input type="text" placeholder="Title" />

          <div class="statusWrapper">
            <label for="status">Select the status of the project</label>
            <select id="staus">
              <option>Open</option>
              <option>Closed</option>
            </select>
          </div>
        </div>
        <div class="descriptionHighlightsAndTagsWrapper">
          <div class="descriptionWrapper">
            <textarea placeholder="description" />
          </div>

          <div class="highlightsAndTagsWrapper">
            <div class="highlightsWrapper">
              <input type="text" placeholder="Highlight" />

              <button>Add</button>
            </div>

            <div class="tagsWrapper">
              <input type="text" placeholder="Tag" />
              <button>Add</button>
            </div>
          </div>
        </div>
        <div class="submitButtonWrapper">
          <button>Create project</button>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
