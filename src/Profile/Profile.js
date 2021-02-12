import React, { useEffect, useState } from "react";
import styles from "./ProfileStyles.module.scss";
import axios from "axios";
import ImageOne from "./Images/ImageOne.svg";
import ImageTwo from "./Images/ImageTwo.svg";
import {Link} from 'react-router-dom';

function Profile(props) {
  const [user, setUser] = useState({
    fullname: "Loading name...",
    username: "username",
    links: ["Loading..."],
    mastered: ["Loading..."],
    learning: ["Loading..."],
    want: ["Loading..."],
    bio: "Loading my cool description..."
    // university:
    // semester:
    // major:
  });

  useEffect(() => {
    console.log("Getting user with id:", props.match.params.id);
    axios
      .get("http://localhost:3010/users/" + props.match.params.id, {
        headers: {
          // Send the JWT along in the request header
          "auth-token": window.localStorage.getItem("auth-token"),
        },
      }) ///"http://localhost:3010/oprojects" https://geeb.herokuapp.com/oprojects
      .then((response) => {
        setUser(response.data.user);
        console.log(response.data);
        console.log(props.match.params.id);
      }).catch(err => {
        console.log("Error in Profile:", err);
      });
  }, []);
    /* If the user is not logged in, visitor will be undefined. Redirect to Login?*/

  return (
    <div className={styles.Wrapper}>
      <div className={styles.EditBtnContainer}>
        <Link to="/editprofile" className={styles.Button}>Edit Profile</Link>
      </div>
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
        <p className={styles.CollegeContent}>Semester: {user.semester}</p>
        <p className={styles.MajorTitle}>Major</p>
        <p className={styles.MajorContent}>{user.major}</p>
      </div>
      <div className={styles.LinksContainer}>
        <p className={styles.LinksTitle}>My Links</p>
        {user.links.map((link) => (
          <p className={styles.LinksContent}>{link}</p>
        ))}
      </div>

      <div className={styles.StackContainer}>
        <p className={styles.StackTitle}>My Stack</p>
      </div>
      <div className={styles.MasterdContainer}>
        <p className={styles.MasterdTitle}>Mastered:</p>
        <div className={styles.MasterdTagsContanier}>
          {user.mastered.map((tag) => (
            <div className={`${styles.Tag} ${styles.Mastered}`}> {tag}</div>
          ))}
        </div>
      </div>
      <div className={styles.LearningContainer}>
        <p className={styles.LearningTitle}>Learning:</p>
        <div className={styles.LearningTagsContanier}>
          {user.learning.map((tag) => (
            <div className={`${styles.Tag} ${styles.Learning}`}> {tag}</div>
          ))}
        </div>
      </div>
      <div className={styles.WantContainer}>
        <p className={styles.WantTitle}>Want to learn:</p>
        <div className={styles.MasterdTagsContanier}>
          {user.want.map((tag) => (
            <div className={`${styles.Tag} ${styles.Want}`}> {tag}</div>
          ))}
        </div>
      </div>

      <div className={styles.ProjectsContainer}>
        <p className={styles.PortfolioContent}>My Portfolio</p>
        <a className={styles.PortfolioLink}>here</a>
        <p className={styles.TeamContent}>
          Collaborating in X Team Projects:
        </p>
        <a className={styles.TeamLink}>here</a>
      </div>
      <div className={styles.ImageTwoContainer}>
        <img className={styles.ImageTwo} src={ImageTwo} />
      </div>

    </div>
  );
}

export default Profile;
