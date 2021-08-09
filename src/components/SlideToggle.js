import React, { useState } from 'react'
import styles from './SlideToggle.module.scss'


export default function SlideToggle({ onClick }) {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(isActive => !isActive);
        onClick();
    }

    return (
        <div className={isActive ? styles.parentDivOn : styles.parentDivOff} onClick={handleClick}>
            <span className={`${styles.circle} ${isActive ? styles.statusOn : ''}`}>
                <span className={`${styles.icon} ${isActive ? styles.iconOn : styles.iconOff}`}></span>
            </span>
        </div>
    )
}
