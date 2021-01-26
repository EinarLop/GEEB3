import React, { useState } from "react";
import styles from "./TagsLinksTabStyles.module.scss";

function TagsLinksTab() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.TagsContainer}>
        <p className={styles.TagsTitle}>The team already knows:</p>
        <div className={styles.TagsSpace}>
          <p>HTML</p>
        </div>
      </div>

      <div className={styles.LinksContainer}>
        <p className={styles.LinksTitle}>Links</p>
        <div className={styles.LinksSpace}>
          <li>Github: https://github.com/</li>
          <li>Page: www.pagina.com</li>
          <li>Linkedin: https://www.linkedin.com/in/usuario</li>
          <li>Youtube: https://www.youtube.com/channel</li>
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
