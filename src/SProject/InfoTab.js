import React, { useState } from "react";
import styles from "./InfoTabStyles.module.scss";
import {Redirect} from 'react-router-dom';
function InfoTab(props) {
  const project = props.project;
  const [redirect, setRedirect]=useState(false);
  const onClickInfo=()=>{
    setRedirect(true);
  }
  return (
    redirect ? <Redirect to={"/sproject/"+project._id}/> :
    <div className={styles.Wrapper}>
      <div className={styles.InfoContainer}>
        <p className={styles.Title}>{project.title}</p>
        <p className={styles.Description}>
          {project.description}
        </p>
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
