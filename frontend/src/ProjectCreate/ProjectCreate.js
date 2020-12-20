import React, { useState } from "react";
import styles from "./ProjectCreateStyles.module.scss";

//TO DO
//No empty title, description, highlights, tags
//Title max characters 50
//Description max characters 400
//Highlight max characters 100
//Tag max character 25
//Max higlights 3
//Max tags 10

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

  const [errorTitle, setErrorTitle] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorHighlight, setErrorHighlight] = useState("");
  const [errorTag, setErrorTag] = useState("");

  const onAddTag = (event) => {
    if (project.currentTag != "") {
      if (project.currentTag.length <= 25) {
        if (tags.length < 10) {
          const tag = {
            value: project.currentTag,
            type: project.currentType,
          };
          setTags((tags) => [...tags, tag]);

          setProject({
            ...project,
            currentTag: "",
          });
          setErrorTag("");
          //tags.length < 10
        } else {
          setErrorTag("You can not have more than 10 tags");
        }
        //project.currentTag.length <= 25
      } else {
        setErrorTag("You can only use 25 chars per tag");
      }
      //project.currentTag != ""
    } else {
      setErrorTag("Tags can not be empty");
    }
  };

  const onAddHighlight = (event) => {
    if (project.currentHighlight != "") {
      if (project.currentHighlight.length <= 100) {
        if (highlights.length < 3) {
          setHighlights((highlights) => [
            ...highlights,
            project.currentHighlight,
          ]);

          setProject({
            ...project,
            currentHighlight: "",
          });
          setErrorHighlight("");
        } else {
          setErrorHighlight("You can not have more than 3 highlights");
        }
      } else {
        setErrorHighlight("Highlight can not have more than 100 char");
      }
    } else {
      console.log("Empty H");
      setErrorHighlight("Highlight can not be empty");
    }
    console.log(highlights);
  };

  const handleOnChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = () => {
    if (project.title == "") {
      setErrorTitle("Title can not be empty");

      console.log("title");
    }
    if (project.title.length > 50) {
      setErrorTitle("Title can not have more than 50 char");
    }
    if (project.title !== "" && project.title.length < 50) {
      setErrorTitle("");
    }
    if (project.description == "") {
      setErrorDescription("Description can not be empty");
      console.log("des");
    }
    if (project.description.length > 400) {
      setErrorDescription("Description can not have more than 400 char");
    }
    if (project.description.length < 400 && project.description !== "") {
      setErrorDescription("");
    }
    if (highlights.length === 0) {
      setErrorHighlight("You should add at least 1 highlight");
    }
    if (highlights.length !== 0) {
      setErrorHighlight("");
    }
    if (tags.length === 0) {
      setErrorTag("You should add at least 1 tag");
    }
    if (tags.length !== 0) {
      setErrorTag("");
    }

    if (
      errorDescription === "" &&
      errorTitle === "" &&
      errorTag === "" &&
      errorHighlight === ""
    ) {
      const Project = {
        title: project.title,
        description: project.description,
        status: project.status,
      };
    }
  };

  const onDeleteHighlight = (index) => {
    setHighlights(highlights.filter((highlight, i) => i !== index));
  };

  const onDeleteTag = (index) => {
    setTags(tags.filter((tag, i) => i !== index));
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
              autoComplete="off"
            />
            <p className={styles.ErrorMsg}>{errorTitle}</p>
          </div>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Project description</label>
            <textarea
              className={styles.TextArea}
              placeholder="ej. This project tries to solve world hunger problem"
              onChange={handleOnChange}
              name="description"
            />
            <p className={styles.ErrorMsg}>{errorDescription}</p>
          </div>
        </div>

        <div className={styles.Column2}>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Status</label>
            <select
              className={styles.Select}
              onChange={handleOnChange}
              name="status"
              value={project.status}
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
                autoComplete="off"
              />
            </div>

            <input
              className={styles.Button}
              onClick={onAddHighlight}
              type="button"
              value="Add"
            />
            <p className={styles.ErrorMsg}>{errorHighlight}</p>
          </div>
          <div className={styles.HContainer}>
            {highlights.map((highlight, index) => (
              <p
                className={styles.Highlight}
                onClick={() => onDeleteHighlight(index)}
              >
                {index + 1 + "."} {" " + highlight}
              </p>
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
              autoComplete="off"
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
          <p className={styles.ErrorMsg}>{errorTag}</p>
          <div className={styles.TContainer}>
            {tags.map((tag, index) => (
              <div
                className={`${styles.Tag} ${styles[tag.type]}`}
                onClick={() => onDeleteTag(index)}
              >
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
