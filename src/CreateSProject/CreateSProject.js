import React from "react";
import styles from "./CreateSProjectStyles.module.scss";

function CreateSProject() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Box1C1}>
        <p>HEY</p>
      </div>
      <div className={styles.Box2C1}>
        <p>HEY</p>
      </div>

      <div className={styles.Column2}>
        <div className={styles.Box1C2}></div>
        <div className={styles.Box2C2}></div>
      </div>
      <div className={styles.Column3}>
        <div className={styles.Box1C3}></div>
      </div>
    </div>
  );
}

export default CreateSProject;
