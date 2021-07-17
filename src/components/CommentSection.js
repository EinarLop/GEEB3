import React, {useState} from 'react';
import styles from './CommentSectionStyles.module.scss';
import axios from 'axios';

function CommentSection() {

    const [content, setcontent] = useState("");
    const [status, setStatus] = useState();
    const [submitted, setSubmitted] = useState(false);

    const handleOnChange = e => {
        console.log(e.target.value);
        setcontent(e.target.value);
    }

    const valid = (text) => {
        return text.length < 500;
    }

    const handleOnSubmit = () => {
        let text = content.trim()
        let msg = <p className={`${styles.StatusMsg} ${styles.SuccessMsg}`}>Submitting...</p>;
        setStatus(msg);

        if (valid(text)) {
            const feedback = {
                content: text,
            }
            axios.post("http://localhost:3010/feedback/submit", feedback)
            .then(resp => {
                msg = <p className={`${styles.StatusMsg} ${styles.SuccessMsg}`}>Thanks for submitting your feedback!</p>
                console.log(resp);
                setStatus(msg);
                setSubmitted(true);
            })
            .catch(err => {
                msg = <p className={`${styles.StatusMsg} ${styles.ErrorMsg}`}>No good!</p>
                console.log(err);
                setStatus(msg);
            })
        } else {
            msg = <p className={`${styles.StatusMsg} ${styles.ErrorMsg}`}>Too long!</p>
            setStatus(msg);
        }
    }

    return (
        <div className={styles.Wrapper}>
            <p className={styles.TitleSubtitle}>This is a Prototype. Let us know what you think!</p>
                <div className={styles.ApplicationMsg}>
                  <div className={styles.InputLabelContainer}>
                    <textarea
                      className={styles.TextArea}
                      placeholder="Any questions, suggestions or comments?"
                      name="content"
                      value={content}
                      onChange={handleOnChange}
                    ></textarea>
                  </div>
                </div>
                {status}
                {
                    !submitted && (                
                    <input
                        type="button"
                        className={`${styles.Button} ${styles.Large} `}
                        value="Send"
                        onClick={handleOnSubmit}
                      />
                    )
                }

        </div>
    )
}

export default CommentSection;