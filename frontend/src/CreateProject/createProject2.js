import React from "react";
import "./createProject2Styles.scss";
function CreateProject2() {
  return (
    <div class="wrapper">
      <header>Header</header>
      <div class="contentWrapper">
        <h1>Create project</h1>

        <div class="titleWrapper">
          <label for="title">Title</label>
          <input id="title" type="text" class="input" />
        </div>

        <div class="descriptionWrapper">
          <label for="description">Description</label>
          <textarea id="description" />
        </div>
        <div class="statusWrapper">
          <label for="status">Project status</label>
          <select id="stauts" class="select">
            <option>Open</option>
            <option>Closed</option>
          </select>
        </div>
        <div class="labelWrapper">
          <label for="highlight">Highlight</label>
          <div class="highlightsWrapper">
            <input type="text" id="highlight" class="input md" />
            <button class="button highlight">Add</button>
          </div>
        </div>
        <div class="labelWrapper">
          <label for="highlight" class="label">
            Tag
          </label>
          <div class="tagsWrapper">
            <input type="text" class="input sm" />
            <select id="stauts" class="select md">
              <option value="" selected disabled hidden>
                Type
              </option>
              <option>Open</option>
              <option>Closed</option>
            </select>
            <button class="button">Add</button>
          </div>
        </div>

        <div class="submitButtonWrapper">
          <button class="button xlg">Create project</button>
        </div>
      </div>
    </div>
  );
}

export default CreateProject2;
