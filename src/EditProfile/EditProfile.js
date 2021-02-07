import React, { useState } from "react";

import styles from "./EditProfileStyles.module.scss";
import { validate } from "../Validation/EditProfileValidation";
import pic1 from "./Images/pic3.svg";

export default function EditProfile() {
  const [bio, setBio] = useState("");
  const [learning, setLearning] = useState([]);
  const [mastered, setMastered] = useState([]);
  const [want, setWant] = useState([]);
  const [major, setMajor] = useState(""); // placeholder ComputerSci
  const [college, setCollege] = useState(""); // placeholder ITESM
  const [links, setLinks] = useState([]);
  const [profile, setProfile] = useState({
    bio: "",
    learning: "",
    mastered: "",
    want: "",
    linkInput: "",
    currentLink: "",
  });
  const [message, setMessage] = useState({
    errorBio: "",
    errorLinks: "",
    errorMajor: "",
    errorLearning: "",
    errorMastered: "",
    errorWants: "",
  });
  const [colleges, setColleges] = useState([
    // retrieve from database "colleges" collection
    "ITESM",
    "UNAM",
    "IPN",
    "ITAM",
    "IBERO",
    "ANÁHUAC",
    "UAM",
    "UDLAP",
    "UDG",
    "UDEM",
    "LA SALLE",
  ]);
  //onDelete ******************************************************************************************************************************
  const onDeleteLink = (index) => {
    setLinks(links.filter((link, i) => i !== index));
  };
  const onDeleteMastered = (index) => {
    setMastered(mastered.filter((m, i) => i !== index));
  };
  const onDeleteWant = (index) => {
    setWant(want.filter((w, i) => i !== index));
  };
  const onDeleteLearning = (index) => {
    setLearning(learning.filter((l, i) => i !== index));
  };

  //onADD ******************************************************************************************************************************
  const onAddTagMastered = (event) => {
    setMastered((tag) => [...tag, profile.mastered]);
  };
  const onAddTagLearning = (event) => {
    setLearning((tag) => [...tag, profile.learning]);
  };
  const onAddTagWant = (event) => {
    setWant((tag) => [...tag, profile.want]);
  };
  const onAddLink = (event) => {
    setLinks((link) => [...link, profile.currentLink]);
  };

  //onChange ***************************************************************************************************************************
  const handleOnChange = (e) => {
    // generic handler for our inputs
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.AboutWrapper}>
        <p className={styles.Titles}>About me</p>
        <textarea
          className={styles.TextArea}
          placeholder=" Tell us a little about yourself!"
          onChange={handleOnChange}
          name="bio"
          autoComplete="off"
        />
      </div>

      <div className={styles.ImgOneContainer}>
        <img className={styles.ImgOne} src={pic1} />
      </div>
      <div className={styles.EducationWrapper}>
        <label className={styles.Label}>College:</label>
        <select className={styles.Input}>
          {colleges.map((c, idx) => {
            return <option value={idx}>{c}</option>; // we can use the index as logical key for db collection
          })}
        </select>
        <label className={styles.Label}>Major:</label>
        <input
          className={styles.Input}
          type=""
          placeholder=" e.g. Computer Science"
        />
      </div>
      <div className={styles.LinksWrapper}>
        <label className={styles.Label}>Links:</label>

        <input
          placeholder="Programming, Marketing, etc..."
          name="currentLink"
          autoComplete="off"
          className={styles.Input}
          onChange={handleOnChange}
        />
        <input
          className={styles.Button}
          type="button"
          value="Add"
          onClick={onAddLink}
        />

        <p className={styles.ErrorMsg}>{message.errorLinks}</p>
        <div className={styles.LinkListContainer}>
          {links.map((link, index) => (
            <div className={styles.Link} onClick={() => onDeleteLink(index)}>
              {link}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.MasteredContainer}>
        <label className={styles.Label}> Mastered Skills </label>
        <input
          className={styles.InputSmall}
          onChange={handleOnChange}
          name="mastered"
        />
        <input
          type="button"
          value="Adds"
          className={styles.ButtonTags}
          onClick={onAddTagMastered}
        />

        <div className={styles.MasteredTagContainer}>
          {mastered.map((masteredTag, index) => (
            <div
              onClick={() => onDeleteMastered(index)}
              className={`${styles.Tag} ${styles.Mastered}`}
            >
              {masteredTag}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.LearningContainer}>
        <label className={styles.Label}> Skills I'm Learning </label>
        <input
          className={styles.InputSmall}
          onChange={handleOnChange}
          name="learning"
        />
        <input
          type="button"
          value="Adds"
          className={styles.ButtonTags}
          onClick={onAddTagLearning}
        />
        <div className={styles.LearningTagContainer}>
          {learning.map((learningTag, index) => (
            <div
              onClick={() => onDeleteLearning(index)}
              className={`${styles.Tag} ${styles.Learning}`}
            >
              {learningTag}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.WantContainer}>
        <label className={styles.Label}> Skills I Want to Learn </label>
        <input
          className={styles.InputSmall}
          onChange={handleOnChange}
          name="want"
        />
        <input
          type="button"
          value="Adds"
          className={styles.ButtonTags}
          onClick={onAddTagWant}
        />
        <div className={styles.WantTagContainer}>
          {want.map((wantTag, index) => (
            <div
              onClick={() => onDeleteWant(index)}
              className={`${styles.Tag} ${styles.Want}`}
            >
              {wantTag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
