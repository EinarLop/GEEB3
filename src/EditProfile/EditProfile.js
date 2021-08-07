import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./EditProfileStyles.module.scss";
import { Link, Redirect } from "react-router-dom";
import { auth } from '../base';
import {
  validateProfile,
  validateTags,
  validateInputTag,
  validateLink,
} from "../validation/EditProfileValidation";
import pic1 from "./Images/pic3.svg";
import { BsLink45Deg } from "react-icons/bs";
import { BACKEND_DEV } from "../constants";

export default function EditProfile({ loginStatus }) {
  const [userId, setUserId] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [finished, setFinished] = useState(false);
  const [learning, setLearning] = useState([]);
  const [mastered, setMastered] = useState([]);
  const [want, setWant] = useState([]);
  const [links, setLinks] = useState([]);
  const [status, setStatus] = useState();
  const [form, setForm] = useState({
    bio: "",
    name: "",
    lastname: "",
    email: "",
    major: "",
    college: "ITESM",
    semester: 0,
    tag_master: "",
    tag_learn: "",
    tag_want: "",
    currentLink: "",
  });

  const [message, setMessage] = useState({
    errorName: "",
    errorEmail: "",
    errorBio: "",
    errorLinks: "",
    errorMajor: "",
    errorMastered: "",
    errorLearning: "",
    errorWants: "",
  });

  const [colleges, setColleges] = useState([
    "ITESM",
    "UNAM",
    "IPN",
    "ITAM",
    "IBERO",
    "ANÁHUAC",
    "UAM",
    "UDLAP",
    "LA SALLE",
  ]);

  const fetchUserData = async (email) => {

    const idToken = await auth.currentUser?.getIdToken(true);
    const authTokenHeader = {
      "authorization": `Bearer ${idToken}`,
    };

    axios.post(BACKEND_DEV + "/users/by-email/", { email: email }, { headers: authTokenHeader })
      .then(response => {
        const user = response.data;
        console.dir(user);
        console.log("Setting form...");

        setForm({
          ...form,
          name: fullname[0],
          lastname: fullname[1],
          bio: user.bio,
          email: user.email,
          major: user.major,
          college: user.college,
          semester: user.semester,
        });
        setMastered(user.mastered);
        setLearning(user.learning);
        setWant(user.want);
        setLinks(user.links);

      })
      .catch(error => {
        console.error(error);
      })
  }

  useEffect(() => {
    if (loginStatus) {
      (async () => {
        await fetchUserData(auth.currentUser.email);
      })()
    } else {
      console.log("No user logged in");
      setRedirect(true);
    }
  }, []);

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

  const onAddTagMastered = (event) => {
    let err = validateInputTag(form.tag_master, mastered.length + 1);
    console.log("Add Tag err:", err);
    if (err === "") {
      setMastered((mastered) => [...mastered, form.tag_master]);
    }
    setMessage({
      ...message,
      errorMastered: err,
    });
  };
  const onAddTagLearning = (event) => {
    let err = validateInputTag(form.tag_learn, learning.length + 1);
    console.log("Add Tag err:", err);
    if (err === "") {
      setLearning((learning) => [...learning, form.tag_learn]);
    }

    setMessage({
      ...message,
      errorLearning: err,
    });
  };

  const onAddTagWant = (event) => {
    let err = validateInputTag(form.tag_want, want.length + 1);
    console.log("Add Tag err:", err);
    if (err === "") {
      setWant((want) => [...want, form.tag_want]);
    }
    setMessage({
      ...message,
      errorWants: err,
    });
  };
  const onAddLink = (event) => {
    setMessage({
      ...message,
      errorLinks: "",
    });
    let err = validateLink(form.currentLink, links.length + 1);
    if (err === "") {
      setLinks((links) => [...links, form.currentLink]);
    }
    setMessage({
      ...message,
      errorLinks: err,
    });
  };

  const handleOnChange = (e) => {
    // generic handler for our inputs
    console.dir(form);
    setStatus("");
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    console.log("Submitting:");
    const User = {
      fullname: form.name + " " + form.lastname,
      email: form.email,
      bio: form.bio,
      college: form.college,
      major: form.major,
      semester: form.semester,
      links,
      mastered,
      learning,
      want,
    };
    console.dir(User);
    const validation = validateProfile(User);
    console.dir(validation);
    let msg;
    if (validation.ok) {
      msg = (
        <p className={`${styles.StatusMsg} ${styles.SuccessMsg}`}>
          Updating Profile...
        </p>
      );

      console.log("IMPLEMENT UPDATE BY EMAIL");

      return;
      console.log("Submitting post update request for", userId);
      axios
        .put(`http://localhost:3010/users/update/${userId}`, User, {
          headers: {
            "auth-token": window.localStorage.getItem("auth-token"),
          },
        })
        .then((result) => {
          console.dir(result);
          msg = (
            <p className={`${styles.StatusMsg} ${styles.SuccessMsg}`}>
              Updated Successfully!
            </p>
          );
          setStatus(msg);
          setTimeout(() => {
            setFinished(true);
          }, 1000);
        })
        .catch((err) => {
          console.log("Error updating:", err);
        });
    } else {
      msg = (
        <p className={`${styles.StatusMsg} ${styles.ErrorMsg}`}>
          Please check your inputs!
        </p>
      );
    }
    setMessage(validation);
    setStatus(msg);
  };

  return redirect ? (
    <Redirect to="/login" />
  ) : finished ? (
    <Redirect to={`/profile/me`} />
  ) : (
    <div className={styles.Wrapper}>
      <div className={styles.Box0}>
        <h1 className={styles.PageTitle}>Edit Profile</h1>
      </div>
      <div className={styles.Box1}>
        <div className={styles.InputandLabelContainer}>
          <label className={styles.Label}>Name</label>
          <input
            className={styles.Input}
            name="name"
            type="text"
            value={form.name}
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.InputandLabelContainer}>
          <label className={styles.Label}>Last name</label>
          <input
            className={styles.Input}
            name="lastname"
            type="text"
            value={form.lastname}
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.InputandLabelContainer}>
          <label className={styles.Label}>Email</label>
          <input
            className={styles.Input}
            name="email"
            type="email"
            value={form.email}
            onChange={handleOnChange}
          />
          <p className={styles.ErrorMsg}>{message.errorEmail}</p>
        </div>
        <p className={styles.ErrorMsg}>{message.errorName}</p>
      </div>

      <div className={styles.AboutWrapper}>
        <p className={styles.Titles}>About me</p>
        <textarea
          className={styles.TextArea}
          placeholder=" Tell us a little about yourself!"
          onChange={handleOnChange}
          name="bio"
          autoComplete="off"
          value={form.bio}
        />
      </div>

      <div className={styles.EducationWrapper}>
        <label className={styles.Label}>College:</label>
        <select
          className={styles.Input}
          name="college"
          value={form.college}
          onChange={handleOnChange}
        >
          {colleges.map((name, index) => {
            return (
              <option key={index} value={colleges[index]}>
                {name}
              </option>
            ); // use the index as logical key for db collection
          })}
        </select>
        <label className={styles.Label}>Major:</label>
        <input
          className={styles.Input}
          name="major"
          placeholder=" e.g. Psychology"
          value={form.major}
          onChange={handleOnChange}
        />
        <p className={styles.ErrorMsg}>{message.errorMajor}</p>
        <label className={styles.Label}>Semester:</label>
        <input
          className={styles.Input}
          name="semester"
          type="number"
          min="1"
          max="14"
          value={form.semester}
          onChange={handleOnChange}
        />
      </div>
      <div className={styles.LinksWrapper}>
        <label className={styles.Label}>Links:</label>

        <input
          placeholder=" Link to my blog..."
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
            <div
              key={index}
              className={styles.Link}
              onClick={() => onDeleteLink(index)}
            >
              <BsLink45Deg />
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
          name="tag_master"
          placeholder=" e.g. Editing, HTML..."
        />
        <input
          type="button"
          value="Add"
          className={styles.ButtonTags}
          onClick={onAddTagMastered}
        />
        <p className={styles.ErrorMsg}>{message.errorMastered}</p>
        <div className={styles.MasteredTagContainer}>
          {mastered.map((masteredTag, index) => (
            <div
              key={index}
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
          name="tag_learn"
          placeholder=" e.g. Editing, HTML..."
        />
        <input
          type="button"
          value="Add"
          className={styles.ButtonTags}
          onClick={onAddTagLearning}
        />
        <p className={styles.ErrorMsg}>{message.errorLearning}</p>
        <div className={styles.LearningTagContainer}>
          {learning.map((learningTag, index) => (
            <div
              key={index}
              onClick={() => onDeleteLearning(index)}
              className={`${styles.Tag} ${styles.Learning}`}
            >
              {learningTag}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.WantContainer}>
        <label className={styles.Label}> Want to learn skills </label>
        <input
          className={styles.InputSmall}
          onChange={handleOnChange}
          name="tag_want"
          placeholder=" e.g. Editing, HTML..."
        />
        <input
          type="button"
          value="Add"
          className={styles.ButtonTags}
          onClick={onAddTagWant}
        />
        <p className={styles.ErrorMsg}>{message.errorWants}</p>
        <div className={styles.WantTagContainer}>
          {want.map((wantTag, index) => (
            <div
              key={index}
              onClick={() => onDeleteWant(index)}
              className={`${styles.Tag} ${styles.Want}`}
            >
              {wantTag}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.Box9}>
        <input
          className={`${styles.Button} ${styles.Large}`}
          type="button"
          value="Update profile"
          onClick={onSubmit}
        />
      </div>
      {status}
    </div>
  );
}
