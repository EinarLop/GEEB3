import React from "react";
import styles from "./ProjectCreateStyles.module.scss";

//H = Highlight
function ProjectCreate() {
  return (
    <div className={styles.Global}>
      <h1 className={styles.Title}>Create Project</h1>
      <div className={styles.Wrapper}>
        <div className={styles.Column1}>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Project title</label>
            <input className={styles.Input} placeholder="Awesome Project" />
          </div>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Project description</label>
            <textarea
              className={styles.TextArea}
              placeholder="ej. This project tries to solve world hunger problem"
            />
          </div>
        </div>

        <div className={styles.Column2}>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Status</label>
            <select className={styles.Select}>
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
              />
            </div>

            <input className={styles.Button} type="button" value="Add" />
          </div>
          <div className={styles.HContainer}>
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
            <input className={styles.Input} placeholder="Javascript" />
          </div>
          <div className={styles.TInputContainer}>
            <div className={styles.InputLabelContainer}>
              <label className={styles.Label}>Type</label>
              <select className={` ${styles.Select} ${styles.Small}`}>
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
              />
            </div>
          </div>
          <div className={styles.TContainer}>
            {/* <div className={styles.Tag}>Javascript</div>
            <div className={styles.Tag}>Node</div>
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
        />
      </div>
    </div>
  );
}

export default ProjectCreate;
