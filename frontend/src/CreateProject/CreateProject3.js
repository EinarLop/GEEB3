import React from "react";
import styles from "./CreateProject3Styles.module.scss";
import Header from "../Components/Header";
//T--> Title
//S--> Status
//H --> Highlights

function CreateProject3() {
  return (
    <div className={styles.Wrapper}>
      {/* <h1 className={styles.Title}>Create a new project</h1> */}
      {/* 
      <div className={styles.TSContainer}>
        <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Project title</label>
          <input placeholder="Awesome Project" className={styles.Input} />
        </div>

        <div className={styles.InputLabelContainer}>
          <label className={styles.Label}>Status</label>
          <select className={styles.Select}>
            <option className={styles.Option}>Open</option>
            <option>Closed</option>
          </select>
        </div>

        //<input className={styles.Button}type="button" value="Add"/>
      </div> */}

      {/* <div className={styles.Parent}>
        <div className={styles.Div1}>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Project description</label>
            <textarea
              placeholder="This project tries to solve wolrd hunger problem"
              className={styles.TextArea}
            />
          </div>
        </div>
        <div className={styles.Div2}>
          <div className={styles.HInputsContainer}>
            <div className={styles.InputLabelContainer}>
              <label className={styles.Label}>Highlights</label>
              <input
                placeholder="Focused in ending world hunger"
                className={styles.Input}
              />
            </div>

            <div className={styles.InputLabelContainer}>
              <label className={`${styles.Label} ${styles.Invisible}`}>
                Button
              </label>
              <input className={styles.Button} type="button" value="Add" />
            </div>
          </div>
<div className={styles.HContainer}></div>
          <p>Hosososoos</p>
        </div>
        <div className={styles.Div3}>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Tags</label>
            <input placeholder="Javascript" className={styles.Input} />
          </div>
          <div className={styles.InputLabelContainer}>
            <label className={`${styles.Label} ${styles.Invisible}`}>
              Button
            </label>
            <input className={styles.Button} type="button" value="Add" />
          </div>
        </div>
      </div>
      <div className={styles.SubmitContainer}>
        <input
          className={`${styles.Button} ${styles.Large}`}
          type="button"
          value="Create project"
        />
      </div> */}
      <div className={styles.Parent}>
        <div className={styles.Div1}>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Project title</label>
            <input placeholder="Awesome Project" className={styles.Input} />
          </div>
        </div>
        <div className={styles.Div2}>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Status</label>
            <select className={styles.Select}>
              <option className={styles.Option}>Open</option>
              <option>Closed</option>
            </select>
          </div>
        </div>
        <div className={styles.Div3}>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Highlights</label>
            <input
              placeholder="Focused in ending world hunger"
              className={styles.Input}
            />
          </div>
          <div className={styles.InputLabelContainer}>
            <label className={`${styles.Label} ${styles.Invisible}`}>
              Button
            </label>
            <input className={styles.Button} type="button" value="Add" />
          </div>
        </div>
        <div className={styles.Div4}>
          <p>
            {/* 100 charcaters top */}
            Lorem ipsum dolor sit amet, nonummy ligula volutpat hac integer
            nonummy. Suspendisse ultricies, cong
          </p>
          <p>
            Lorem ipsum dolor sit amet, nonummy ligula volutpat hac integer
            nonummy. Suspendisse ultricies, cong
          </p>
          <p>
            Lorem ipsum dolor sit amet, nonummy ligula volutpat hac integer
            nonummy. Suspendisse ultricies, cong
          </p>
        </div>
        <div className={styles.Div5}>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Tags</label>
            <input placeholder="Javascript" className={styles.Input} />
          </div>
          <div className={styles.InputLabelContainer}>
            <label className={`${styles.Label} ${styles.Invisible}`}>
              Button
            </label>
            <select
              className={`${styles.Select} ${styles.Small}`}
              type="button"
            >
              <option>Learning</option>
              <option>Masterd</option>
            </select>
          </div>

          <div className={styles.InputLabelContainer}>
            <label className={`${styles.Label} ${styles.Invisible}`}>
              Button
            </label>
            <input className={styles.Button} type="button" value="Add" />
          </div>
        </div>
        <div className={styles.Div6}>
          <div className={styles.Tag}>Javascript</div>
          <div className={styles.Tag}>Node</div>
          <div className={styles.Tag}>Express</div>
          <div className={styles.Tag}>SQL</div>
          <div className={styles.Tag}>MongoDB</div>
          <div className={styles.Tag}>Development</div>
          <div className={styles.Tag}>Sockets</div>
          <div className={styles.Tag}>MongoDB</div>
          <div className={styles.Tag}>Development</div>
          <div className={styles.Tag}>Sockets</div>
        </div>
        <div className={styles.Div7}>
          <div className={styles.InputLabelContainer}>
            <label className={styles.Label}>Project description</label>
            <textarea
              placeholder="This project tries to solve wolrd hunger problem"
              className={styles.TextArea}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProject3;
