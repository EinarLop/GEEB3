import React, { useState, useEffect } from "react";
import styles from "./ProjectMoreInfoStyles.module.scss";
import axios from "axios";
import { validateRequest } from "../Validation/ProjectMoreInfoValidation";
import {Link} from 'react-router-dom';

export default function ProjectMoreInfo(props) {
  const [project, setProject] = useState({
    title: "Loading Title...",
    description: "Loading...",
    status: "Loading",
    tags: ["Tag"],
    skills: ["Skill"],
    highlights: ["Loading Highlights..."],
    desirables: ["Loading Preferences..."],
  });
  const [isOwner, setIsOwner] = useState(false);
  const [applications, setApplications] = useState([]);
  const [errorInput, setErrorInput] = useState("");
  const [visitor, setVisitor]= useState("");
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
      })
    axios
      .get("http://localhost:3010/applicants/project/" + props.match.params.id)
      .then((response) => {
        setApplications(response.data);
        hasARequest(response.data);
      })

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
        .then((res) => console.log("You Apply to this project!"));
    }
  };
  const hasARequest = (applications) =>{
    for(var a in applications){
      if (applications[a].userid == localStorage.getItem("geebId")){
        setAlreadySend(true);
      }
    }
  }

  return (
    <div className={styles.Global}>
      <div className={styles.Wrapper}>
        <div className={styles.TitleDesContainer}>
          <h1>Is Owner: {isOwner.toString()}</h1>
          <p className={styles.Title}>{project.title}</p>
          <p className={styles.Paragraph}>{project.description}</p>
        </div>

        <div className={styles.Highlights}>
          <p className={styles.TitleSubtitle}>Highlights</p>
          <ul className={styles.HList}>
            {project.highlights.map((highlight) => (
              <li className={styles.Text}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className={styles.ColumnDivision}>
          <div className={styles.Column0}>
            <h3 className={styles.TitleSubtitle}>Profile we are looking for</h3>
            {project.desirables.map((t) => (
              <p className={styles.Text}>{t}</p>
            ))}
          </div>
          <div className={styles.Column1}>
            <h3 className={styles.TitleSubtitle}>Tags</h3>
            <div className={styles.Knows}>
              {project.tags.map((tag) => (
                <div className={`${styles.Tag} ${styles.TopicTag}`}>{tag}</div>
              ))}
            </div>
            <h3 className={styles.TitleSubtitle}>Skills </h3>
            <div className={styles.Needs}>
              {project.skills.map((skill) => (
                <div className={`${styles.Tag} ${styles.SkillTag}`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        {!isOwner? (
          !alreadySend && <div className={styles.userInputs}>
            <p className={styles.TitleSubtitle}>Send a request</p>
            <p className={styles.TitleSubtitle}>Send: {alreadySend.toString()}</p>
            <div className={styles.ApplicationMsg}>
              <div className={styles.InputLabelContainer}>
                <label className={styles.Label}>Description</label>
                <textarea
                  className={styles.ReasonForRequest}
                  name="motive"
                  onChange={handleOnChange}
                ></textarea>
              </div>
            </div>
            <p>{errorInput}</p>
            <input
              type="button"
              className={`${styles.Button} ${styles.Large} `}
              value="Send Request"
              onClick={handleOnSubmit}
            />
          </div>
        ):(
          <div className={styles.Applications}> 
            <p className={styles.TitleSubtitle}>Applications</p>
            {applications.map((applicant)=>
              (applicant.status !== "Unaccepted") && 
                <div className={styles.Application}>
                  <Link to= {`/profile/${applicant.userid}`} className={styles.TitleSubtitle}>{applicant.userid}</Link>
                  <p className={styles.Text}>{applicant.motive}</p>
                  <p className={styles.Text}>Status: {applicant.status}</p>
                  <p className={styles.Text}>Date: {applicant.created.slice(0,10)}</p>
                  {(applicant.status === "Pending") && (
                    <div className={styles.ButtonWrapper}>
                      <input
                        type="button"
                        className={`${styles.Button} ${styles.Reject} `}
                        value="Reject"
                        name="Unaccepted"
                        onClick={()=>axios
                          .patch("http://localhost:3010/applicants/update/status/"+ applicant._id,{
                            status:"Unaccepted"
                          })
                          .then((res) => location.reload())}
                      />
                      <input
                        type="button"
                        className={styles.Button} 
                        value="Accept"
                        name="Accepted"
                        onClick={()=>axios
                          .patch("http://localhost:3010/applicants/update/status/"+ applicant._id,{
                            status:"Accepted"
                          })
                          .then((res) => location.reload())}
                      />
                    </div>
                  )}
                </div>     
            )}
          </div>
        )}
      </div>
    </div>
  );
}
