import React, { useState, useEffect } from "react";
import styles from "./MyApplicationsStyles.module.scss";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function MyApplication(props) {

  const [isOwner, setIsOwner] = useState(false);
  const [applications, setApplications] = useState([]);


  useEffect(() => {
    axios
      .get("https://geeb.herokuapp.com/applicants/" + props.match.params.id, {
        headers: {
          // Send the JWT along in the request header
          "auth-token": window.localStorage.getItem("auth-token"),
        },
      })
      .then((response) => {
        setApplications(response.data.applications);
        setIsOwner(response.data.isOwner);
      });
  }, []);


  return (
    <div className={styles.Global}>
      <div className={styles.Wrapper}>
        {/*<p>Owner:{isOwner.toString()}</p>*/}
        {applications != undefined ? (
          !isOwner ? (
            <div className={styles.Application}>
              <p className={styles.Title}>Applications</p>
              {applications.map((applicant) =>
                applicant.status === "Accepted" &&
                <div className={styles.Applications}>
                  <Link to={`/project/${applicant.oprojectid._id}`} className={styles.TitleSubtitle}>{applicant.oprojectid.title}</Link>
                  <p className={styles.Text}>{applicant.motive}</p>
                  <p className={styles.Text}>Status: {applicant.status}</p>
                  <p className={styles.Text}>Date: {applicant.created.slice(0, 10)}</p>
                </div>
              )}
            </div>
          ) : (
            (applications.length != 0) ? (
              <div className={styles.Application}>
                <p className={styles.Title}>Applications</p>
                {applications.map((applicant) =>
                  <div className={styles.Applications}>
                    {applicant.oprojectid != null &&
                      <Link to={`/project/${applicant.oprojectid._id}`} className={styles.TitleSubtitle}>{applicant.oprojectid.title}</Link>}
                    <p className={styles.Text}>{applicant.motive}</p>
                    <p className={styles.Text}>Status: {applicant.status}</p>
                    <p className={styles.Text}>Date: {applicant.created.slice(0, 10)}</p>
                  </div>
                )}
              </div>
            ) : (
              <p className={styles.Title}>You haven´t applied to any project</p>
            )
          )
        ) : (
          <div className={styles.Title}><p>You don´t have applications</p></div>
        )}

      </div>
    </div>
  );
}

