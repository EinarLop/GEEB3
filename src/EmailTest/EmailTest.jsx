import React, { useState, useEffect } from 'react';
import axios from "axios"
import styles from './EmailTestStyles.module.scss'
import { Redirect, Link } from "react-router-dom";





const EmailTest = (props) => {
  const [applicants, setApplicants] = useState([])
  const [status, setStatus] = useState()
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    axios
      .post("http://localhost:3010/email/applicants", { oprojectid: props.match.params.id }) ///"http://localhost:3010/oprojects" http://localhost:3010oprojects
      .then((response) => setApplicants(response.data))
      .catch((error) => console.log(error));
  }, []);

  const [mail, setMail] = useState({
    subject: "",
    text: "",
    oprojectid: props.match.params.id,
  })
  const handleOnChange = (e) => {
    setMail({
      ...mail,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  const sendEmail = () => {
    axios.post("http://localhost:3010/email", mail)
      .then((response) => {
        let msg = (
          <p className={`${styles.StatusMsg} ${styles.Ok}`}> The email was sent successfully </p>
        )
        setStatus(msg)
        setTimeout(() => setRedirect(true), 2000);




      })
      .catch((error) => {
        let msg = (
          <p className={`${styles.StatusMsg} ${styles.Err}`}> There was a problem please try again  </p>
        )
        setStatus(msg)



        console.log(error)
      })
  }
  return redirect ? (
    <Redirect to={"/oproject/" + props.match.params.id} />
  ) : (
    <div className={styles.Wrapper}>
      <p className={styles.Title}>Contact your team</p>
      <p className={styles.Message}>This email will be send to the following applicants</p>
      <div className={styles.UsersContainer}>
        {applicants.map((applicant) => {


          return (
            <div className={styles.User}>
              <p className={styles.Name} > {applicant.fullname}</p>
              <p className={styles.Username} >@{applicant.username}</p>
            </div>
          )


        })}

      </div>

      <div className={styles.InputLabelContainer}>
        <label className={styles.Label}>Subject</label>
        <input name="subject" onChange={handleOnChange} className={styles.Input} />
      </div>

      <div className={styles.InputLabelContainer}>
        <label className={styles.Label}>Message</label>
        <textarea name="text" onChange={handleOnChange} className={styles.TextArea} />
      </div>

      <div className={styles.ButtonContainer}>
        <button onClick={sendEmail} className={styles.Button}> Send email</button>
      </div>
      {status}
    </div>
  );
}

export default EmailTest;