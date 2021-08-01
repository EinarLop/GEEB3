import React, { useState } from 'react';
import axios from "axios"
import styles from './EmailTestStyles.module.scss'





const EmailTest = (props) => {

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
        console.log("Wooo")
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className={styles.Wrapper}>
      <p className={styles.Title}>Contact your team</p>
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
    </div>
  );
}

export default EmailTest;