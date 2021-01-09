import React from "react";
import styles from "./HeaderStyles.module.scss";
import { MdNaturePeople } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

//ProjectFeed own searchbar
//Porjects titulo === tags

//Profile
//@

//Header Icon   Name Create Explore Logout

export default function Header() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.IconNameContainer}>
        <MdNaturePeople className={styles.Icon} />
        <h2 className={styles.Logo}>Intecreate</h2>
      </div>
      <div className={styles.NavContainer}>
        <a className={styles.NavLink}>Create</a>
        <a className={styles.NavLink}>Explore</a>
        <button className={styles.LogOut}>Log Out</button>
        <CgProfile className={styles.Profile} />
      </div>
    </div>
  );
}
