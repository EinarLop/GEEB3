import React, { useState } from "react";
import styles from "./TagsLinksTabStyles.module.scss";
import { Redirect } from "react-router-dom";
function TagsLinksTab(props) {
  const project = props.project;
  const [redirect, setRedirect] = useState(false);
  const onClickInfo = () => {
    setRedirect(true);
  };
  return redirect ? (
    <Redirect to={"/sproject/" + project._id} />
  ) : (
    <div className={styles.Wrapper}>
      <div className={styles.TagsContainer}>
        <p className={styles.TagsTitle}>Tags:</p>
        <div className={styles.TagsSpace}>
          {project.tags.map((tag) => (
            <p>{tag}</p>
          ))}
        </div>
      </div>

      <div className={styles.LinksContainer}>
        <p className={styles.LinksTitle}>Links</p>
        <div className={styles.LinksSpace}>
          {project.links.map((link) => (
            <li>{link}</li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TagsLinksTab;
