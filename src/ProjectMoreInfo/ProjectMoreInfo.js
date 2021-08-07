import React, { useState, useEffect } from "react";
import styles from "./ProjectMoreInfoStyles.module.scss";
import axios from "axios";
import { validateRequest } from "../validation/ProjectMoreInfoValidation";
import { Link } from "react-router-dom";
import { FaTrophy } from "react-icons/fa";
import { MdPersonPin } from "react-icons/md";
import { BiCheckSquare } from "react-icons/bi";
import { AiFillCheckSquare, AiFillStar } from "react-icons/ai";
import { IoMdPeople, IoMdImages } from "react-icons/io";

export default function ProjectMoreInfo(props) {
  const [project, setProject] = useState({
    title: "Loading Title...",
    description: "Loading...",
    status: "Loading",
    tags: ["Tag"],
    skills: ["Skill"],
    highlights: ["Loading Highlights..."],
    desirables: ["Loading Preferences..."],
    // imageurls: ["Loading Images..."],
    userid: {
      username: "Leader",
      userid: 0,
    },
  });

  let imageurls = [
    "https://dummyimage.com/600x400/000/fff",
    "https://dummyimage.com/600x400/000/fff",
  ];
  const [isOwner, setIsOwner] = useState(false);
  const [applications, setApplications] = useState([]);
  const [errorInput, setErrorInput] = useState("");
  const [visitor, setVisitor] = useState("");
  const [request, setRequest] = useState({
    user: "",
    motive: "",
  });
  const [alreadySend, setAlreadySend] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3010/oprojects/" + props.match.params.id, {
        headers: {
          "auth-token": window.localStorage.getItem("auth-token"),
        },
      })
      .then((response) => {
        setIsOwner(response.data.isOwner);
        setProject(response.data.project);

        console.log(response.data.project);
      });
    axios
      .get("http://localhost:3010/applicants/project/" + props.match.params.id)
      .then((response) => {
        setApplications(response.data);
        hasARequest(response.data);
      });
  }, []);

  const handleOnChange = (event) => {
    setRequest({
      ...request,
      [event.target.name]: event.target.value,
    });
  };
  const handleOnSubmit = () => {
    setErrorInput(validateRequest(request));
    if (errorInput === "") {
      const applicant = {
        userid: request.user,
        oprojectid: props.match.params.id,
        motive: request.motive,
      };
      console.log(Array.isArray(project.highlights));
      axios
        .post("http://localhost:3010/applicants/create", applicant, {
          headers: {
            "auth-token": window.localStorage.getItem("auth-token"),
          },
        })
        .then((res) => location.reload());
    }
  };

  const hasARequest = (applications) => {
    for (var a in applications) {
      if (applications[a].userid != null) {
        if (applications[a].userid._id == localStorage.getItem("geebId")) {
          setAlreadySend(true);
        }
      }
    }
  };

  return (
    <div className={styles.Global}>
      <div className={styles.Wrapper}>
        <div className={styles.TitleContainer}>
          {/*<h1>Is Owner: {isOwner.toString()}</h1>*/}
          <p className={styles.Title}>{project.title}</p>
          <p className={styles.Author}>
            Posted by:{" "}
            <Link to={`/profile/${project.userid._id}`}>
              @{project.userid.username ? project.userid.username : "Not found"}
            </Link>
          </p>
        </div>
        <div className={styles.DescContainer}>
          <p className={styles.Paragraph}>{project.description}</p>
        </div>

        <div className={styles.Highlights}>
          <p className={styles.TitleSubtitle}>
            <FaTrophy /> Highlights
          </p>
          <div className={styles.ListContainer}>
            {project.highlights.map((highlight, index) => (
              <p className={styles.Text} key={index}>
                <AiFillStar /> {highlight}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.Column0}>
          <h3 className={styles.TitleSubtitle}>
            <MdPersonPin /> Profile we are looking for
          </h3>
          <div className={styles.ListContainer}>
            {project.desirables.map((t, index) => (
              <p className={styles.Text} key={index}>
                <BiCheckSquare /> {t}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.Column1}>
          <h3 className={styles.TitleSubtitle}>Tags</h3>
          <div className={styles.TagsContainer}>
            {project.tags.map((tag, index) => (
              <div key={index} className={`${styles.Tag} ${styles.TopicTag}`}>
                {tag}
              </div>
            ))}
          </div>
          <h3 className={styles.TitleSubtitle}>Skills </h3>
          <div className={styles.SkillsContainer}>
            {project.skills.map((skill, index) => (
              <div className={`${styles.Tag} ${styles.SkillTag}`} key={index}>
                {skill}
              </div>
            ))}
          </div>

          <h3 className={styles.TitleSubtitle}>
            <IoMdImages /> Images:
          </h3>
          <div className={styles.ImagesSection}>
            {imageurls.map((img) => (
              <img className={styles.Image} src={img} />
            ))}
          </div>
        </div>

        {!isOwner ? (
          project.status == "Open" ? (
            alreadySend ? (
              <div className={styles.SentMsgContainer}>
                <p className={styles.SentMsg}>
                  You've submitted an application to this project!
                </p>
              </div>
            ) : (
              <div className={styles.userInputs}>
                <p className={styles.TitleSubtitle}>Send a request</p>
                <div className={styles.ApplicationMsg}>
                  <div className={styles.InputLabelContainer}>
                    <label className={styles.Label}>
                      Why are you a great fit for this project?
                    </label>
                    <textarea
                      className={styles.ReasonForRequest}
                      name="motive"
                      onChange={handleOnChange}
                    ></textarea>
                  </div>
                </div>
                <p className={styles.ErrorMsg}>{errorInput}</p>
                <input
                  type="button"
                  className={`${styles.Button} ${styles.Large} `}
                  value="Send Request"
                  onClick={handleOnSubmit}
                />
              </div>
            )
          ) : (
            <p className={styles.Title}>This project is closed</p>
          )
        ) : (
          <div className={styles.Applications}>
            <p className={styles.Title}>Applications</p>
            {applications.map(
              (applicant) =>
                applicant.status !== "Unaccepted" && (
                  <div className={styles.Application} key={applicant._id}>
                    {console.log(applicant.userid.username)}
                    <Link
                      to={`/profile/${applicant.userid._id}`}
                      className={styles.TitleSubtitle}
                    >
                      {applicant.userid.username}
                    </Link>
                    <p className={styles.Text}>{applicant.motive}</p>
                    <p className={styles.Text}>Status: {applicant.status}</p>
                    <p className={styles.Text}>
                      Date: {applicant.created.slice(0, 10)}
                    </p>
                    {applicant.status === "Pending" && (
                      <div className={styles.ButtonWrapper}>
                        <input
                          type="button"
                          className={`${styles.Button} ${styles.Reject} `}
                          value="Reject"
                          name="Unaccepted"
                          onClick={() =>
                            axios
                              .patch(
                                "http://localhost:3010/applicants/update/status/" +
                                applicant._id,
                                {
                                  status: "Unaccepted",
                                }
                              )
                              .then((res) => location.reload())
                          }
                        />
                        <input
                          type="button"
                          className={styles.Button}
                          value="Accept"
                          name="Accepted"
                          onClick={() =>
                            axios
                              .patch(
                                "http://localhost:3010/applicants/update/status/" +
                                applicant._id,
                                {
                                  status: "Accepted",
                                }
                              )
                              .then((res) => location.reload())
                          }
                        />
                      </div>
                    )}
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
