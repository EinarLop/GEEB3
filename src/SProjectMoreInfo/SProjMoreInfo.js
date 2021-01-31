import React from 'react'
import styles from './SProjMoreInfoStyles.module.scss';

export default function SProjectMoreInfo() {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.ContentContainer}>
                <div className={styles.TitleDesc}>
                    <p className={styles.Heading}>Title of Project</p>
                    <p className={styles.Author}><a>Paty Escamilla</a>'s portfolio</p>
                    <p className={styles.Description}> 
                    This is the description of portfolio project. The portfolio owner will probably write what his role was
                    and his/her contribution to the project.
                    This is the description of portfolio project. The portfolio owner will probably write what his role was
                    and his/her contribution to the project.
                    This is the description of portfolio project. The portfolio owner will probably write what his role was
                    and his/her contribution to the project.
                    This is the description of portfolio project. The portfolio owner will probably write what his role was
                    and his/her contribution to the project.
                    </p>
                </div>
                <div className={styles.TagsSection}>
                    <label className={styles.Label}>Tags:</label>
                    <div className={styles.TagsContainer}>
                            {/*mapping of tags, randomly colorized*/}
                            <div className={`${styles.Tag} ${styles.TopicTag}`}>Example Tag!</div>
                            <div className={`${styles.Tag} ${styles.TopicTag}`}>Example Tag!</div>
                            <div className={`${styles.Tag} ${styles.TopicTag}`}>Example Tag!</div>
                            <div className={`${styles.Tag} ${styles.TopicTag}`}>Example Tag!</div>
                            <div className={`${styles.Tag} ${styles.TopicTag}`}>Example Tag!</div>
                            <div className={`${styles.Tag} ${styles.TopicTag}`}>Example Tag!</div>
                    </div>
                </div>
                <div className={styles.LinksContainer}>
                    <label className={styles.Label}>Project Links:</label>
                    <ul className={styles.LinkList}>
                        {/*Mapping of projects.links*/}
                        <li><a href="https://github.com/EinarLop/GEEB3" target="_blank">Github</a></li>
                        <li><a href="https://www.google.com/" target="_blank">Name of Link</a></li>
                    </ul>
                </div>
                <div className={styles.Collaborators}>
                        <label className={styles.Label}>Collaborators:</label>
                        <div /*style={{display:'flex', padding:'10px'}}*/className={styles.NamesContainer}>
                            {/* Mapping of project.collaborators here, with Link to their profile id*/}
                            <p>@Einar</p>
                            <p>@Gina</p>
                            <p>@Eric</p>
                            <p>@Karen</p>
                        </div>
                </div>
                <div className={styles.ImagesSection}>
                    <h1>Images Menu Component Here</h1>
                </div>
            </div>
        </div>

    )
}
