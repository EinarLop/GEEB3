import React, { useState } from "react";
import styles from "./ImagesTabStyles.module.scss";
import { Redirect } from "react-router-dom";
function ImagesTab(props) {
  const project = props.project;
  const [redirect, setRedirect] = useState(false);
  const onClickInfo = () => {
    setRedirect(true);
  };
  return redirect ? (
    <Redirect to={"/portfolio/" + project._id} />
  ) : (
    <div className={styles.Wrapper}>
      <div className={styles.InfoContainer}>
        <p className={styles.ImagesWrapper}>
          {project.imageurls.map((img) => (
            <div className={styles.Images}>
              <img src={img} />
            </div>
          ))}
        </p>
      </div>
    </div>
  );
}

export default ImagesTab;
