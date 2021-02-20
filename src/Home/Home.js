import React, { useState } from "react";
import styles from "./homeStyles.module.scss";
import image from "../Media/home-idea.png"; 
import key from "../Media/key.png"; 
import plus from "../Media/plus.png"; 
import search from "../Media/search.png"; 
import binoculars from "../Media/binoculars.png"; 
import checkmark from "../Media/checkmark.png"; 
import cross from "../Media/cross.png"; 
import file from "../Media/file.png"; 
import services from "../Media/services.png"; 
import folder from "../Media/folder.png"; 
import business from "../Media/business-meeting1.png"; 
import support from "../Media/support2.png"; 
import web1 from "../Media/web1.png";

export default function home() {
    const [errorInput, setErrorInput] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState({
      username: "",
      password: "",
    });

    return(
        redirect ? <Redirect to="/home"/> :
        <div className={styles.Wrapper}>
            <div className={styles.InfoContainer}>
                <div className={styles.InfoTitle}>
                    <p className={styles.Title}>Title</p>
                </div>
                <div className={styles.InfoDescription}>
                    <p className={styles.Description}>
                    "qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem".
                    </p>
                </div>
                <div className={styles.InfoButton}>
                    <input
                    value="Start"
                    className={styles.Button}
                    type="button"
                    />
                </div>
                <div className={styles.InfoImage}>
                    <img className={styles.Image} src={web1} alt="girl in computer"/>
                </div>
            </div>
            <div className={styles.DescriptionContainer}>
                <div className={styles.DescriptionTitle}>
                    <p className={styles.TitleDescription}>What can you do?</p>
                </div>
                <div className={styles.OprojectContainer}>
                    <div className={styles.Left}>
                        <p className={styles.SmallSubtitle}>Team</p>
                        <p className={styles.Subtitle}>Oproject.</p>
                        <p className={styles.Information}><b className={styles.Bold}>Lorem ipsum dolor.</b> Lorem ipsum dolor sit amet consectetur adipiscing elit, nec at id vestibulum torquent malesuada, ad nostra dui posuere accumsan enim.</p>
                    </div>
                    <div className={styles.Right}>
                        <img className={styles.Image1} src={business} alt="A business metting"/>
                    </div>
                </div>
                <div className={styles.SprojectContainer}>
                    <div className={styles.Right1}>
                        <img className={styles.Image2} src={support} alt="A man at a computer"/>
                    </div>
                    <div className={styles.Left1}>
                        <p className={styles.SmallSubtitle}>Personal</p>
                        <p className={styles.Subtitle}>Sproject.</p>
                        <p className={styles.Information}><b className={styles.Bold}>Lorem ipsum dolor.</b> Lorem ipsum dolor sit amet consectetur adipiscing elit, nec at id vestibulum torquent malesuada, ad nostra dui posuere accumsan enim.</p>
                    </div>
                </div>
            </div>
            <div className={styles.FeaturesContainer}>
                <div className={styles.FeaturesTitleBox}>
                    <p className={styles.FeaturesTitle}>Get used to our features!</p>
                </div>
                <div className={styles.FeaturesSubtitle}>
                    <p className={styles.Subtitle1}>Title</p>
                </div>
                <div className={styles.FeaturesContainerOne}>
                    <div className={styles.Box1}>
                        <img className={styles.Icon} src={checkmark} alt="ckeckmark"/>
                        <p className={styles.BoxTitle}>Tags</p>
                        <p className={styles.BoxDescription}>Lorem ipsum dolor sit amet consectetur, adipiscing elit urna penatibus commodo, quam a vel potenti.</p>
                    </div>
                    <div className={styles.Box2}>
                        <img className={styles.Icon} src={cross} alt="ckeckmark"/>
                        <p className={styles.BoxTitle}>Tags</p>
                        <p className={styles.BoxDescription}>Lorem ipsum dolor sit amet consectetur, adipiscing elit urna penatibus commodo, quam a vel potenti.</p>
                    </div>
                    <div className={styles.Box3}>
                        <img className={styles.Icon} src={search} alt="ckeckmark"/>
                        <p className={styles.BoxTitle}>Tags</p>
                        <p className={styles.BoxDescription}>Lorem ipsum dolor sit amet consectetur, adipiscing elit urna penatibus commodo, quam a vel potenti.</p>
                    </div>
                    <div className={styles.Box4}>
                        <img className={styles.Icon} src={key} alt="ckeckmark"/>
                        <p className={styles.BoxTitle}>Tags</p>
                        <p className={styles.BoxDescription}>Lorem ipsum dolor sit amet consectetur, adipiscing elit urna penatibus commodo, quam a vel potenti.</p>
                    </div>
                </div>
                <div className={styles.FeaturesSubtitle}>
                    <p className={styles.Subtitle1}>Title</p>
                </div>
                <div className={styles.FeaturesContainerTwo}>
                    <div className={styles.Box1}>
                        <img className={styles.Icon} src={binoculars} alt="ckeckmark"/>
                        <p className={styles.BoxTitle}>Links</p>
                        <p className={styles.BoxDescription}>Lorem ipsum dolor sit amet consectetur, adipiscing elit urna penatibus commodo, quam a vel potenti.</p>
                    </div>
                    <div className={styles.Box2}>
                        <img className={styles.Icon} src={services} alt="ckeckmark"/>
                        <p className={styles.BoxTitle}>Links</p>
                        <p className={styles.BoxDescription}>Lorem ipsum dolor sit amet consectetur, adipiscing elit urna penatibus commodo, quam a vel potenti.</p>
                    </div>
                    <div className={styles.Box3}>
                        <img className={styles.Icon} src={file} alt="ckeckmark"/>
                        <p className={styles.BoxTitle}>Links</p>
                        <p className={styles.BoxDescription}>Lorem ipsum dolor sit amet consectetur, adipiscing elit urna penatibus commodo, quam a vel potenti.</p>
                    </div>
                    <div className={styles.Box4}>
                        <img className={styles.Icon} src={folder} alt="ckeckmark"/>
                        <p className={styles.BoxTitle}>Links</p>
                        <p className={styles.BoxDescription}>Lorem ipsum dolor sit amet consectetur, adipiscing elit urna penatibus commodo, quam a vel potenti.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}