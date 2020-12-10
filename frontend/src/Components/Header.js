import React from 'react'
import styles from './HeaderStyles.module.scss';

export default function Header() {
    return (
        <div className={styles.HeaderContainer}>
            <div className={styles.LeftSideHeader}>
                <h2 className={styles.Logo}>Intecreate</h2>
            </div>
            <div className={styles.RightSideHeader}>
                <a>Dashboard</a>
                <a>My Projects</a>
                <button className={styles.HeaderButton}>Start a Project</button>
                <button className={styles.HeaderButton}>Log Out</button>
            </div>

        </div>
    )
}
