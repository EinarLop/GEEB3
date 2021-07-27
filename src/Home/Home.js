import React, { useState } from "react";
import styles from "./homeStyles.module.scss";
import business from "./media/Business-Meeting-Colors.png";
import support from "./media/Support-Colors.png";
import web1 from "./media/Web-Colors.png";
import { IoCheckmark } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoKey } from "react-icons/io5";
import { IoHammer } from "react-icons/io5";
import { GiBinoculars } from "react-icons/gi";
import { GoGear } from "react-icons/go";
import { FiFile } from "react-icons/fi";
import { FiFolder } from "react-icons/fi";
import { Redirect } from "react-router-dom";
import CommentSection from '../components/CommentSection'
import useLogin from "../hooks/useLogin";


export default function home() {
    const [errorInput, setErrorInput] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const onClickStart = () => {
        setRedirect(true)
    }

    return (
        redirect ? <Redirect to="/register" /> :
            <div className={styles.Wrapper}>
                <div className={styles.InfoContainer}>
                    <div className={styles.InfoTitle}>
                        <p className={styles.Title}>This is GEEB.</p>
                        <p className={styles.Title2}>The place where creators meet.</p>
                    </div>
                    <div className={styles.InfoDescription}>
                        <p className={styles.Description}>
                            Create projects you want to expand. Connect with other students that are looking to grow their skills to develop your projects. Show to the world your final result!
                        </p>
                    </div>
                    <div className={styles.InfoButton}>
                        <input
                            value="Start"
                            className={styles.Button}
                            type="button"
                            onClick={onClickStart}
                        />
                    </div>
                    <div className={styles.InfoImage}>
                        <img className={styles.Image} src={web1} alt="person in computer" />
                    </div>
                </div>
                <div className={styles.DescriptionContainer}>
                    <div className={styles.DescriptionTitle}>
                        <p className={styles.TitleDescription}>What can you do?</p>
                    </div>
                    <div className={styles.OprojectContainer}>
                        <div className={styles.Left}>
                            <p className={styles.SmallSubtitle}>Team</p>
                            <p className={styles.Subtitle}>Project.</p>
                            <p className={styles.Information}>Upload a description of what you want to do, add <b>tags</b> and <b>skills</b> so that people can see what you're looking for,<b> find your dream team!</b></p>
                        </div>
                        <div className={styles.Right}>
                            <img className={styles.Image1} src={business} alt="A business metting" />
                        </div>
                    </div>
                    <div className={styles.SprojectContainer}>
                        <div className={styles.Right1}>
                            <img className={styles.Image2} src={support} alt="A man at a computer" />
                        </div>
                        <div className={styles.Left1}>
                            <p className={styles.SmallSubtitle}>Personal</p>
                            <p className={styles.Subtitle}>Project.</p>
                            <p className={styles.Information}>Upload your project to your portfolio in the application, add images and <b className={styles.Bold}>don't forget to mention your collaborators!</b></p>
                        </div>
                    </div>
                </div>
                <div className={styles.FeaturesContainer}>
                    <div className={styles.FeaturesTitleBox}>
                        <p className={styles.FeaturesTitle}>Get used to our features!</p>
                    </div>
                    <div className={styles.FeaturesSubtitle}>
                        <p className={styles.Subtitle1}>Team Project</p>
                    </div>
                    <div className={styles.FeaturesContainerOne}>
                        <div className={styles.Box2}>
                            <GiBinoculars className={styles.Icon} />
                            <p className={styles.BoxTitle}>Description</p>
                            <p className={styles.BoxDescription}>What are you looking to create? Are you already working on it? </p>
                        </div>
                        <div className={styles.Box1}>
                            <GoGear className={styles.Icon} />
                            <p className={styles.BoxTitle}>Tags and Skills</p>
                            <p className={styles.BoxDescription}>What technologies does your app use? What abilities people can develop working in your project?</p>
                        </div>
                        <div className={styles.Box3}>
                            <IoSearch className={styles.Icon} />
                            <p className={styles.BoxTitle}>Highlight/State</p>
                            <p className={styles.BoxDescription}>What do you want people to notice? If you are not looking for people anymore, change the state to closed</p>
                        </div>
                        <div className={styles.Box4}>
                            <IoKey className={styles.Icon} />
                            <p className={styles.BoxTitle}>Profile</p>
                            <p className={styles.BoxDescription}>Small description of the profile of the people you want to work with</p>
                        </div>
                    </div>
                    <div className={styles.FeaturesSubtitle}>
                        <p className={styles.Subtitle1}>Portfolio Project</p>
                    </div>
                    <div className={styles.FeaturesContainerTwo}>
                        <div className={styles.Box1}>
                            <GiBinoculars className={styles.Icon} />
                            <p className={styles.BoxTitle}>Description</p>
                            <p className={styles.BoxDescription}>How does your project work? What makes it awesome?</p>
                        </div>
                        <div className={styles.Box2}>
                            <GoGear className={styles.Icon} />
                            <p className={styles.BoxTitle}>Tags</p>
                            <p className={styles.BoxDescription}>What tools, skills or frameworks were involved in the making of your project?</p>
                        </div>
                        <div className={styles.Box3}>
                            <FiFile className={styles.Icon} />
                            <p className={styles.BoxTitle}>Links</p>
                            <p className={styles.BoxDescription}>Upload links to YouTube, GitHub, etc where people can see more details of your project</p>
                        </div>
                        <div className={styles.Box4}>
                            <FiFolder className={styles.Icon} />
                            <p className={styles.BoxTitle}>Images</p>
                            <p className={styles.BoxDescription}>Add some images to show people how amazing your project looks</p>
                        </div>
                    </div>
                    <div className={styles.FeaturesSubtitle}>
                        <p className={styles.Subtitle1}>Profile</p>
                    </div>
                    <div className={styles.FeaturesContainerOne}>
                        <div className={styles.Box1}>
                            <FiFile className={styles.Icon} />
                            <p className={styles.BoxTitle}>Links</p>
                            <p className={styles.BoxDescription}>Add links to your profiles in other apps or pages. Don´t forget to add a link where people can contact you!</p>
                        </div>
                        <div className={styles.Box2}>
                            <IoCheckmark className={styles.Icon} />
                            <p className={styles.BoxTitle}>Mastered</p>
                            <p className={styles.BoxDescription}>Let the people know what you are good at and share your knowledge!</p>
                        </div>
                        <div className={styles.Box3}>
                            <IoHammer className={styles.Icon} />
                            <p className={styles.BoxTitle}>Learning</p>
                            <p className={styles.BoxDescription}> What are you actually learning that you want to improve or use in a real-life project</p>
                        </div>
                        <div className={styles.Box4}>
                            <IoSearch className={styles.Icon} />
                            <p className={styles.BoxTitle}>Want to learn</p>
                            <p className={styles.BoxDescription}>Tell about your areas of interest and what you'd like to learn! You may work with someone who has mastered that skill.</p>
                        </div>
                    </div>
                </div>
                <CommentSection />
            </div>
    );
}