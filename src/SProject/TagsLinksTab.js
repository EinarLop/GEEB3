import React, { useState } from "react";
import styles from "./TagsLinksTabStyles.module.scss";
import { Redirect } from "react-router-dom";
import { BsLink45Deg, BsFillFolderSymlinkFill } from "react-icons/bs";
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
            <div className={`${styles.Tag} ${styles.TopicTag}`}>{tag}</div>
          ))}
        </div>
      </div>

      <div className={styles.LinksContainer}>
        <p className={styles.LinksTitle}>
          {" "}
          <BsFillFolderSymlinkFill /> Links{" "}
        </p>
        <div className={styles.LinksSpace}>
          <label className={styles.Label}></label>
          {project.links.map((link) => (
            <a href={`${link}`} target="_blank" className={styles.Link}>
              <BsLink45Deg />
              {link}
            </a>

            // <BsLink45Deg/>
            // <li className={styles.Link}>poppop</li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TagsLinksTab;
