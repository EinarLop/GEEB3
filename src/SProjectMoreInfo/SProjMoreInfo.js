import React from 'react'
import styles from './SProjMoreInfoStyles.module.scss';

export default function SProjectMoreInfo() {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.MainCard}>
                <div className={styles.TitleDesc}>
                    <p className={styles.Heading}>Title of Project</p>
                    <p className={styles.Description}> 
                    This is the description. This project's leader will probably write something cool here.
                    This is the description. This project's leader will probably write something cool here.
                    This is the description. This project's leader will probably write something cool here.
                    This is the description. This project's leader will probably write something cool here.
                    This is the description. This project's leader will probably write something cool here.
                    This is the description. This project's leader will probably write something cool here.
                    </p>
                </div>
                <div className={styles.Collaborators}>
                        <label className={styles.Label}>Collaborators:</label>
                        <div style={{display: 'flex', padding: '10px'}}>
                            {/* Mapping of project.collaborators here, with Link to their profile id*/}
                            <p>@Einar</p>
                            <p>@Gina</p>
                            <p>@Eric</p>
                            <p>@Karen</p>
                        </div>
                </div>
                <div className={styles.TagsContainer}>
                        {/*mapping of tags*/}
                        <div className={`${styles.Tag} ${styles.TopicTag}`}>Example Tag!</div>
                </div>
                <div className={styles.LinksContainer}>
                        Box 4
                </div>
                <div className={styles.ImagesContainer}>
                        Box 5
                </div>
            </div>
        </div>

    )
}
