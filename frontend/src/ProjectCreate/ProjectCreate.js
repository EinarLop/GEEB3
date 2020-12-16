import React, { useState } from "react";
import styles from "./ProjectCreateStyles.module.scss";

//H = Highlight
function ProjectCreate() {
  const [project, setProject] = useState({
    title: "",
    description: "",
    status: "Open",
    currentHighlight: "",
    currentTag: "",
    currentType: "Learning",
  });
  const [highlights, setHighlights] = useState([]);
  const [tags, setTags] = useState([]);

  const onAddTag = (event) => {
    const tag = {
      value: project.currentTag,
      type: project.currentType,
    };
    setTags((tags) => [...tags, tag]);
    console.log(tags);
    setProject({
      ...project,
      currentTag: "",
    });
  };

  const onAddHighlight = (event) => {
    setHighlights((highlights) => [...highlights, project.currentHighlight]);
    console.log(highlights);
    setProject({
      ...project,
      currentHighlight: "",
    });
  };

  const handleOnChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  const handleOnSubmit = () => {
    const Project = {
      title: project.title,
      description: project.description,
      status: project.status,
    };
    console.log(Project);
    console.log(highlights);
  };

  return (
    <div className={styles.Global}>
      <h1 className={styles.Title}>Create Project</h1>
      <div className={styles.Wrapper}>
        <div className={styles.Column1}>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Project title</label>
            <input
              className={styles.Input}
              placeholder="Awesome Project"
              onChange={handleOnChange}
              name="title"
            />
          </div>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Project description</label>
            <textarea
              className={styles.TextArea}
              placeholder="ej. This project tries to solve world hunger problem"
              onChange={handleOnChange}
              name="description"
            />
          </div>
        </div>

        <div className={styles.Column2}>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Status</label>
            <select
              className={styles.Select}
              onChange={handleOnChange}
              name="status"
              value="Open"
            >
              <option className={styles.Option}>Open</option>
              <option>Closed</option>
            </select>
          </div>
          <div className={styles.HInputContainer}>
            <div className={styles.InputLabelContainer}>
              <label className={styles.Label}>Highlights</label>
              <input
                placeholder="Focused in ending world hunger"
                className={styles.Input}
                onChange={handleOnChange}
                name="currentHighlight"
                value={project.currentHighlight}
              />
            </div>

            <input
              className={styles.Button}
              onClick={onAddHighlight}
              type="button"
              value="Add"
            />
          </div>
          <div className={styles.HContainer}>
            {highlights.map((highlight) => (
              <p className={styles.Highlight}>- {highlight} </p>
            ))}
            {/* <p className={styles.Highlight}>
              Lorem ipsum dolor sit amet, nonummy ligula volutpat hac integer
              nonummy. Suspendisse ultricies, cong
            </p>
            <p className={styles.Highlight}>
              Lorem ipsum dolor sit amet, nonummy ligula volutpat hac integer
              nonummy. Suspendisse ultricies, cong
            </p>
            <p className={styles.Highlight}>
              Lorem ipsum dolor sit amet, nonummy ligula volutpat hac integer
              nonummy. Suspendisse ultricies, cong
            </p> */}
          </div>
        </div>

        <div className={styles.Column3}>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Tags</label>
            <input
              className={styles.Input}
              placeholder="Javascript"
              onChange={handleOnChange}
              name="currentTag"
              value={project.currentTag}
            />
          </div>
          <div className={styles.TInputContainer}>
            <div className={styles.InputLabelContainer}>
              <label className={styles.Label}>Type</label>
              <select
                className={` ${styles.Select} ${styles.Small}`}
                onChange={handleOnChange}
                name="currentType"
                value={project.currentType}
              >
                <option className={styles.Option}>Learning</option>
                <option>Mastered</option>
              </select>
            </div>
            <div className={styles.InputLabelContainer}>
              <label className={`${styles.Label} ${styles.Invisible}`}>
                Button
              </label>
              <input
                className={`${styles.Button} ${styles.Special}`}
                type="button"
                value="Add"
                onClick={onAddTag}
              />
            </div>
          </div>
          <div className={styles.TContainer}>
            {tags.map((tag) => (
              <div className={`${styles.Tag} ${styles[tag.type]}`}>
                {tag.value}
              </div>
            ))}
            {/* <div className={styles.Tag}>Node</div>
            <div className={styles.Tag}>Express</div>
            <div className={styles.Tag}>SQL</div>
            <div className={styles.Tag}>MongoDB</div>
            <div className={styles.Tag}>Development</div>
            <div className={styles.Tag}>Sockets</div>
            <div className={styles.Tag}>SQL</div> */}
          </div>
        </div>
      </div>
      <div>
        <input
          className={`${styles.Button} ${styles.Large}`}
          type="button"
          value="Submit"
          onClick={handleOnSubmit}
        />
      </div>
    </div>
  );
}

export default ProjectCreate;
