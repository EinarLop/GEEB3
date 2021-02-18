import React, { useState, useEffect } from "react";
import styles from "./MyApplicationsStyles.module.scss";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function MyApplication(props) {

    const [isOwner, setIsOwner] = useState(false);
    const [applications, setApplications] = useState([]);

  
    useEffect(() => {
      axios
      .get("http://localhost:3010/applicants/" + props.match.params.id, {
        headers: {
          // Send the JWT along in the request header
          "auth-token": window.localStorage.getItem("auth-token"),
        },
      })
        .then((response) => {
          setApplications(response.data);
          checkProfile(response.data);
        });
    }, []);
    
    const checkProfile=(appl)=>{
      if(appl[0].userid===props.match.params.id){
        setIsOwner(true);
      }
    }
  
    return (
      <div className={styles.Global}>
        <div className={styles.Wrapper}>
          {!isOwner? (
            <div className={styles.Application}> 
              <p className={styles.Title}>Applications</p>
              {applications.map((applicant)=>
                applicant.status === "Accepted" &&
                <div className={styles.Applications}>
                  <Link to= {`/oproject/${applicant.oprojectid}`} className={styles.TitleSubtitle}>{applicant.oprojectid}</Link>
                  <p className={styles.Text}>{applicant.motive}</p>
                  <p className={styles.Text}>Status: {applicant.status}</p>
                  <p className={styles.Text}>Date: {applicant.created.slice(0,10)}</p>
                </div>  
              )}
            </div>
          ):(
            <div className={styles.Application}> 
              <p className={styles.Title}>Applications</p>
              {applications.map((applicant)=>
                <div className={styles.Applications}>
                  <Link to= {`/oproject/${applicant.oprojectid}`} className={styles.TitleSubtitle}>{applicant.oprojectid}</Link>
                  <p className={styles.Text}>{applicant.motive}</p>
                  <p className={styles.Text}>Status: {applicant.status}</p>
                  <p className={styles.Text}>Date: {applicant.created.slice(0,10)}</p>
                </div>  
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
  
