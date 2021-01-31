import React, { useState } from "react";
import styles from "./HeaderStyles.module.scss";
import { MdNaturePeople } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useMediaSize } from "use-media-size";

//ProjectFeed own searchbar
//Porjects titulo === tags

//Profile
//@

//Header Icon   Name Create Explore Logout

export default function Header() {
  const { isMd } = useMediaSize();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const handleClick = (event) => {
    setIsOpen(!isOpen);
  };
  const onLogButton = (event) => {
    if (isLogged) {
      location.href = "/oproject/:id";
    } else {
      location.href = "/login";
    }
  };
  return (
    <div className={styles.Wrapper}>
      <div className={styles.IconNameContainer}>
        <MdNaturePeople className={styles.Icon} />
        <h2 className={styles.Logo}>Intecreate</h2>
      </div>
      {isMd ? (
        <div right className={styles.PageWrap}>
          <AiOutlineMenu className={styles.MenuIcon} onClick={handleClick} />
          {isOpen && (
            <div className={styles.Menu}>
              <div className={styles.Menu}>
                <AiOutlineClose
                  className={styles.ClosingIcon}
                  onClick={handleClick}
                />
                <a className={`${styles.Links} ${styles.Title}`}> GEEB </a>
                <a className={styles.Links} href="/oprojects">
                  O Project
                </a>
                <a className={styles.Links} href="/sprojects">
                  S Project
                </a>
                <a className={styles.Links} href="/login">
                  Logout
                </a>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.ConditionalContainerNav}>
          <div className={styles.NavContainer}>
            <a className={styles.NavLink} href="/oprojects">
              O Projects
            </a>
            <a className={styles.NavLink} href="/sprojects">
              S Projects
            </a>
            <CgProfile className={styles.Profile} href="/" />
            <button className={styles.LogOut} onClick={() => onLogButton()}>
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
