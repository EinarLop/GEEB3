import React, { useEffect, useState } from "react";
import styles from "./ProfileStyles.module.scss";
import axios from "axios";
import ImageOne from "./Images/ImageOne.svg";
import ImageTwo from "./Images/ImageTwo.svg";

function Profile() {
  const [user, setUser] = useState({
    links: ["loading..."],
    mastered: ["loading..."],
    learning: ["loading..."],
    want: ["loading..."],
  });

  useEffect(() => {
    axios
      .get("http://localhost:3010/users/601f40783bd24a0e924dc0fc") ///"http://localhost:3010/oprojects" https://geeb.herokuapp.com/oprojects
      .then((response) => {
        setUser(response.data.user);
        console.log(response.data);
      });
  }, []);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.NameContainer}>
        <p className={styles.Name}>{user.fullname}</p>
        <p className={styles.Username}>@{user.username}</p>
      </div>
      <div className={styles.ImageOneContainer}>
        <img className={styles.ImageOne} src={ImageOne}></img>
      </div>
      <div className={styles.AboutMeContainer}>
        <p className={styles.AboutMeTitle}>About me</p>
        <p className={styles.AboutMeContent}>{user.bio}</p>
      </div>
      <div className={styles.EducationContainer}>
        <p className={styles.CollegeTitle}>University</p>
        <p className={styles.CollegeContent}>{user.university}</p>
        <p className={styles.CollegeContent}>{user.semester}th semester</p>
        <p className={styles.MajorTitle}>Major</p>
        <p className={styles.MajorContent}>{user.major}</p>
      </div>
      <div className={styles.LinksContainer}>
        <p className={styles.LinksTitle}>My Links</p>
        {user.links.map((link) => (
          <p className={styles.LinksContent}>{link}</p>
        ))}
      </div>

      <div className={styles.ProjectsContainer}>
        <p className={styles.PortfolioContent}>Check out my portfolio</p>
        <a className={styles.PortfolioLink}>here</a>
        <p className={styles.TeamContent}>
          Check out the team projects I am a port of
        </p>
        <a className={styles.TeamLink}>here</a>
      </div>
      <div className={styles.ImageTwoContainer}>
        <img className={styles.ImageTwo} src={ImageTwo} />
      </div>
      <div className={styles.StackContainer}>
        <p className={styles.StackTitle}>My stack</p>
      </div>
      <div className={styles.MasterdContainer}>
        <p className={styles.MasterdTitle}>Masterd</p>
        <div className={styles.MasterdTagsContanier}>
          {user.mastered.map((tag) => (
            <div className={`${styles.Tag} ${styles.Masterd}`}> {tag}</div>
          ))}
        </div>
      </div>
      <div className={styles.LearningContainer}>
        <p className={styles.LearningTitle}>Learning</p>
        <div className={styles.LearningTagsContanier}>
          {user.learning.map((tag) => (
            <div className={`${styles.Tag} ${styles.Learning}`}> {tag}</div>
          ))}
        </div>
      </div>
      <div className={styles.WantContainer}>
        <p className={styles.WantTitle}>Want to learn</p>
        <div className={styles.MasterdTagsContanier}>
          {user.want.map((tag) => (
            <div className={`${styles.Tag} ${styles.Want}`}> {tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
