import React, { useState } from "react";
import styles from "./InfoTabStyles.module.scss";
import { Redirect } from "react-router-dom";
function InfoTab(props) {
  const project = props.project;
  const [redirect, setRedirect] = useState(false);
  const onClickInfo = () => {
    setRedirect(true);
  };
  return redirect ? (
    <Redirect to={"/sproject/" + project._id} />
  ) : (
    <div className={styles.Wrapper}>
      <div className={styles.InfoContainer}>
        {/* <p className={styles.Title}>{project.title}</p> */}
        <p className={styles.Title}>Restaurant reviewer</p>
        {/* <p className={styles.Description}>{project.description}</p> */}
        <p className={styles.Description}>
          Soy Pepe el Grillo jijij dolor sit amet consectetur adipiscing, elit
          netus mollis vivamus torquent sollicitudin tincidunt, faucibus fusce
          quis himenaeos semper.{" "}
        </p>
        <div className={styles.CreatorContainer}>
          <p className={styles.Subtitle}>Creator</p>
          <p className={styles.Description}>@Einar</p>
        </div>
        <div className={styles.DateContainer}>
          <p className={styles.Subtitle}>Posted</p>
          <p className={styles.Description}>25-10-2020</p>
        </div>
      </div>

      <div className={styles.ButtonContainer}>
        <input
          value="More info"
          className={styles.Button}
          type="Button "
          onClick={onClickInfo}
        ></input>
      </div>
    </div>
  );
}

export default InfoTab;
