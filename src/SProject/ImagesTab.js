import React, { useState } from "react";
import styles from "./InfoTabStyles.module.scss";

function ImagesTab(props) {
const project = props.project;
  return (
    <div className={styles.Wrapper}>
      <div className={styles.InfoContainer}>
        <p className={styles.Title}>{project.title}</p>
        <p className={styles.Description}>
          {project.imagesurls}
        </p>
      </div>
      <div className={styles.ButtonContainer}>
        <input
          value="More info"
          className={styles.Button}
          type="Button "
        ></input>
      </div>
    </div>
  );
}

export default ImagesTab;