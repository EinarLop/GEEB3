import React from "react";
import styles from "./CreateSProjectStyles.module.scss";

function CreateSProject() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Box1}>
        <label className={styles.Label}>Title</label>
        <input
          className={styles.Input}
          placeholder="Awesome Project"
          name="title"
          autoComplete="off"
        />
        <p className={styles.ErrorMsg}>Error</p>
      </div>

      <div className={styles.Box2}>
        <label className={styles.Label}>Description</label>
        <textarea
          className={styles.TextArea}
          placeholder="Awesome Project"
          name="title"
          autoComplete="off"
        />
        <p className={styles.ErrorMsg}>Error</p>
      </div>
      <div className={styles.Box3}>
        <label className={styles.Label}>Tags</label>
        <div className={styles.TagButtonContainer}>
          <input
            className={styles.TagInput}
            placeholder="Programming, Marketing, etc..."
            name="currentTag"
            autoComplete="off"
          />
          <input className={styles.Button} type="button" value="Add" />
        </div>

        <p className={styles.ErrorMsg}></p>
      </div>
      <div className={styles.Box4}>
        <label className={styles.Label}>Links</label>
        <div className={styles.TagButtonContainer}>
          <input
            className={styles.TagInput}
            placeholder="Programming, Marketing, etc..."
            name="currentTag"
            autoComplete="off"
          />
          <input className={styles.Button} type="button" value="Add" />
        </div>

        <p className={styles.ErrorMsg}></p>
      </div>
      <div className={styles.Box5}>
        <div className={styles.LinkButtonContainer}>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Links</label>
            <input
              className={styles.TagInput}
              placeholder="Programming, Marketing, etc..."
              name="currentTag"
              autoComplete="off"
            />
          </div>

          <div className={styles.InputLabelContainer}>
            <label className={`${styles.Label} ${styles.Transparent}`}>
              Hey
            </label>
            <input className={styles.Button} type="button" value="Add" />
          </div>
        </div>

        <p className={styles.ErrorMsg}></p>
      </div>
    </div>
  );
}

export default CreateSProject;
