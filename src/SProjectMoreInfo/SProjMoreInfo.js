import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsLink45Deg, BsFillFolderSymlinkFill } from "react-icons/bs";
import { IoMdPeople, IoMdImages } from "react-icons/io";
import { FaSlackHash } from "react-icons/fa";
import styles from "./SProjMoreInfoStyles.module.scss";
import axios from "axios";

export default function SProjectMoreInfo(props) {
  const [project, setProject] = useState({
    title: "Loading Title...",
    description: "Loading...",
    userid: { username: "Loading..." },
    collaborators: ["Loading Collaborators..."],
    tags: ["Tag"],
    links: ["Link"],
    imageurls: ["Loading Images..."],
  });
  const [isOwner, setIsOwner] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3010/sprojects/" + props.match.params.id, {
        headers: {
          "auth-token": window.localStorage.getItem("auth-token"),
        },
      })
      .then((response) => {
        setIsOwner(response.data.isOwner);
        setProject(response.data.project);
      });
  }, []);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.TitleDesc}>
        <p className={styles.Heading}>{project.title}</p>
        <p className={styles.Author}>
          <Link to={`/profile/${project.userid._id}`}>
            {project.userid.username ? project.userid.username : "Not found"}
          </Link>
          's portfolio
        </p>
        <p className={styles.Description}>{project.description}</p>
      </div>
      <div className={styles.TagsSection}>
        <label className={styles.Label}>
          <FaSlackHash /> Tags:
        </label>
        <div className={styles.TagsContainer}>
          {project.tags.map((tag) => (
            <div className={`${styles.Tag} ${styles.TopicTag}`}>{tag}</div>
          ))}
        </div>
      </div>
      <div className={styles.LinksContainer}>
        <label className={styles.Label}>
          <BsFillFolderSymlinkFill /> Project Links:
        </label>
        <ul className={styles.LinkList}>
          {project.links.map((link) => (
            <a href={`//${link}`} target="_blank" className={styles.Link}>
              <BsLink45Deg />
              {link.replace(/^https?:\/\//, "")}
            </a>
          ))}
        </ul>
      </div>
      <div className={styles.Collaborators}>
        <label className={styles.Label}>
          <IoMdPeople /> Collaborators:
        </label>
        <div
          className={
            styles.NamesContainer
          }
        >
          {project.collaborators.map((collaborator) => (
            <p>{collaborator}</p>
          ))}
        </div>
      </div>
      <label className={styles.Label}>
        <IoMdImages /> Images:
      </label>
      <div className={styles.ImagesSection}>
        {project.imageurls.map((img) => (
          <img className={styles.Image} src={img} />
        ))}
      </div>
    </div>
  );
}
