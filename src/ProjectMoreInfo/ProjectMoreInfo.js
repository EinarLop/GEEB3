import React, { useState } from "react";
import styles from "./ProjectMoreInfoStyles.module.scss";

function ProjectMoreInfo() {
  const [isLogged, setIsLogged] = useState(true);
  const [projects, setProjects] = useState([
    {
      title: "Development of something",
      description:
        "A world with no hunger, no disease, no war, no misery. Humanity has conquered all those things, and has even conquered death. Now scythes are the only ones who can end life—and they are commanded to do so, in order to keep the size of the population under control. Citra and Rowan are chosen to apprentice to a scythe—a role that neither wants. These teens must master the “art” of taking life, knowing that the consequence of failure could mean losing their own.",
      status: "Closed",
      creator: "@Creador 1",
      tags: ["JS", "Popo", "Test"],
      skills: ["mssm", "ssksks", "smsms"],
      highlights: ["Wanting someone who can develop", "Learn new habilities"],
      profile: [
        "Motivated",
        "Time for daily meeting",
        "Experience in working in big projects",
      ],
      members: "3",
      views: "20",
      stars: "22",
    },
  ]);
  const [fakeProfile, setFakeProfile] = useState({
    name: "NombreX",
    lastName: "ApellidoY",
    email: "micorreo@gmail.com",
    userName: "@miusuario",
    password: "contraseña123",
  });
  const [errorInput, setErrorInput] = useState("");
  const [request, setRequest] = useState({
    userNames: fakeProfile.name + " " + fakeProfile.lastName,
    userEmail: fakeProfile.email,
    requestDescription: "",
  });
  const handleOnChange = (event) => {
    setRequest({
      ...request,
      [event.target.name]: event.target.value,
    });
  };
  const handleOnSubmit = () => {
    if (errorInput) {
      setErrorInput("");
    } else if (request.requestDescription === "") {
      console.log("You must have a description of your request");
      setErrorInput("You must have a description of your request");
    } else if (request.userEmail === "") {
      console.log(
        "You must enter a email so the owner of the proyect can contact"
      );
      setErrorInput(
        "You must enter a email so the owner of the project can contact you"
      );
    } else if (request.userNames === "") {
      console.log("You must enter your name");
      setErrorInput("You must enter your name");
    } else if (request.userNames.length < 10) {
      console.log("Too short");
      setErrorInput("User too short");
    } else if (request.userEmail.length < 12) {
      console.log("Too short email");
      setErrorInput("Your email is not valid");
    } else if (request.requestDescription.length < 15) {
      console.log("Too short description");
      setErrorInput("Description too short");
    }
  };
  return (
    <div className={styles.Global}>
      <div className={styles.Wrapper}>
        <div className={styles.TitleDesContainer}>
          <p className={styles.Title}>{projects[0].title}</p>
          <p className={styles.Paragraph}>{projects[0].description}</p>
        </div>

        <div className={styles.Highlights}>
          <p className={styles.TitleSubtitle}>Highlights</p>

          {projects[0].highlights.map((h) => (
            <p className={styles.Text}>-{h}</p>
          ))}
        </div>

        <div className={styles.ColumnDivision}>
          <div className={styles.Column0}>
            <h3 className={styles.TitleSubtitle}>Profile we are looking for</h3>
            {projects[0].profile.map((t) => (
              <p className={styles.Text}>{t}</p>
            ))}
          </div>
          <div className={styles.Column1}>
            <h3 className={styles.TitleSubtitle}>Tags</h3>
            <div className={styles.Knows}>
              {projects[0].tags.map((tag) => (
                <div className={`${styles.Tag} ${styles.Mastered}`}>{tag}</div>
              ))}
            </div>
            <h3 className={styles.TitleSubtitle}>Skills </h3>
            <div className={styles.Needs}>
              {projects[0].skills.map((skill) => (
                <div className={`${styles.Tag} ${styles.Learning}`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        {isLogged && (
          <div className={styles.userInputs}>
            <p className={styles.Title}>Send a request</p>
            <div className={styles.RequestData}>
              <div className={styles.InputLabelContainer}>
                <label className={styles.Label}>Highlights</label>
                <input
                  placeholder={request.userNames}
                  name="userNames"
                  className={styles.Data}
                  onChange={handleOnChange}
                />
              </div>
              <div className={styles.InputLabelContainer}>
                <label className={styles.Label}>Highlights</label>
                <input
                  placeholder={request.userEmail}
                  name="userEmail"
                  onChange={handleOnChange}
                  className={styles.Data}
                />
              </div>
            </div>
            <div className={styles.ApplicationMsg}>
              <div className={styles.InputLabelContainer}>
                <label className={styles.Label}>Highlights</label>
                <textarea
                  className={styles.ReasonForRequest}
                  name="requestDescription"
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
        )}
      </div>
    </div>
  );
}

export default ProjectMoreInfo;
