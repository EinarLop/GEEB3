import React, { useState } from "react";
import styles from "./TagsLinksTabStyles.module.scss";

function TagsLinksTab(props) {
  const project = props.project;
  return (
    <div className={styles.Wrapper}>
      <div className={styles.TagsContainer}>
        <p className={styles.TagsTitle}>The team already knows:</p>
        <div className={styles.TagsSpace}>
          <p>HTML</p>
          {project.tags.map((tag)=>(
            <p>{tag}</p>
          ))}
        </div>
      </div>

      <div className={styles.LinksContainer}>
        <p className={styles.LinksTitle}>Links</p>
        <div className={styles.LinksSpace}>
          {project.links.map((link)=>(
            <li>{link}</li>
          ))}
        </div>
      </div>

      <div className={styles.ButtonContainer}>
        <input
          value="More info"
          className={styles.Button}
          type="Button"
        ></input>
      </div>
    </div>
  );
}

export default TagsLinksTab;
