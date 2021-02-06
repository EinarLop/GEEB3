import React from "react";
import styles from "./ProfileStyles.module.scss";
import ImageOne from "./Images/ImageOne.svg";
import ImageTwo from "./Images/ImageTwo.svg";

function Profile() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.NameContainer}>
        <p className={styles.Name}>Einar López Altamirano</p>
      </div>
      <div className={styles.ImageOneContainer}>
        <img className={styles.ImageOne} src={ImageOne}></img>
      </div>
      <div className={styles.AboutMeContainer}>
        <p className={styles.AboutMeTitle}>About me</p>
        <p className={styles.AboutMeContent}>
          Lorem ipsum dolor sit amet consectetur adipiscing, elit netus mollis
          vivamus torquent sollicitudin tincidunt, faucibus fusce quis himenaeos
          semper. Vel ridiculus viverra varius magnis malesuada, mus inceptos
          integer nam elementum eget, mi sagittis tempus cubilia torquent
          ulemams
        </p>
      </div>
      <div className={styles.EducationContainer}>
        <p className={styles.CollegeTitle}>College</p>
        <p className={styles.CollegeContent}>ITESM CCM</p>
        <p className={styles.CollegeContent}>5th semester</p>
        <p className={styles.MajorTitle}>Major</p>
        <p className={styles.MajorContent}>ITC</p>
      </div>
      <div className={styles.LinksContainer}>
        <p className={styles.LinksTitle}>My Links</p>
        <p className={styles.LinksContent}>https://github.com/EinarLop</p>
        <p className={styles.LinksContent}>https://github.com/EinarLop</p>
        <p className={styles.LinksContent}>https://github.com/EinarLop</p>
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
          <div className={`${styles.Tag} ${styles.Masterd}`}> Java</div>
          <div className={`${styles.Tag} ${styles.Masterd}`}> Java</div>
          <div className={`${styles.Tag} ${styles.Masterd}`}> Java</div>
          <div className={`${styles.Tag} ${styles.Masterd}`}> Java</div>
        </div>
      </div>
      <div className={styles.LearningContainer}>
        <p className={styles.LearningTitle}>Learning</p>
        <div className={styles.LearningTagsContanier}>
          <div className={`${styles.Tag} ${styles.Learning}`}> Python</div>
          <div className={`${styles.Tag} ${styles.Learning}`}> Kotlin</div>
          <div className={`${styles.Tag} ${styles.Learning}`}> JavaScript</div>
          <div className={`${styles.Tag} ${styles.Learning}`}> TypeScript</div>
        </div>
      </div>
      <div className={styles.WantContainer}>
        <p className={styles.WantTitle}>Want to learn</p>
        <div className={styles.MasterdTagsContanier}>
          <div className={`${styles.Tag} ${styles.Want}`}> Javascript</div>
          <div className={`${styles.Tag} ${styles.Want}`}> C++</div>
          <div className={`${styles.Tag} ${styles.Want}`}> Java</div>
          <div className={`${styles.Tag} ${styles.Want}`}> Java</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
