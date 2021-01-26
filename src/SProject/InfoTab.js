import React, { useState } from "react";
import styles from "./InfoTabStyles.module.scss";

function InfoTab() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.InfoContainer}>
        <p className={styles.Title}>Restaurant reviewer</p>
        <p className={styles.Description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
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

export default InfoTab;
