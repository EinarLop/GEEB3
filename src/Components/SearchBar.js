import React from "react";
import "react-tabs/style/react-tabs.css";
import styles from "./SearchBarStyles.module.scss";

/*Component for an Oproject Card*/

export const SearchBar = props => (
    <div className={styles.SearchWrapper}>
        <input 
            type="text" 
            placeholder="Search" 
            className={styles.Bar}
            onKeyDown={props.addTag}/>
    </div>
);
