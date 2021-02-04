import React, { useState } from "react";
import styles from "./HeaderStyles.module.scss";
import { MdNaturePeople } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useMediaSize } from "use-media-size";

/* Header layout:  Icon, Logo, 'Create', 'Explore', Header is visible to anyone who is logged in.*/

export default function Header() {
  const { isMd } = useMediaSize();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const handleClick = (event) => {
    setIsOpen(!isOpen);
  };
  const onLogButton = (event) => {
    /*How to delete a session using LocalStorage? */
    if (isLogged) {
      location.href = "/oproject/:id";
    } else {
      location.href = "/login";
    }
  };
  return (
    <div className={styles.Wrapper}>
      <div className={styles.IconNameContainer}>
        <MdNaturePeople className={styles.Icon}/>
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

                {/* <a className={styles.Links} href="/register">
                  Register
                </a> */}
                <a className={styles.Links} href="/oprojects">
                  Team Projects
                </a>
                <a className={styles.Links} href="/sprojects">
                  Portfolio Projects 
                </a>
                <a className={styles.Links} href="/create">
                  Create a Project
                </a>
                <a className={styles.Links} href="/createsproject">
                  Add to portfolio
                </a>
                {/* <a className={styles.Links} href="/login">
                  Logout
                </a> */}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.ConditionalContainerNav}>
          <div className={styles.NavContainer}>
            <a className={styles.NavLink} href="/oprojects">
              Team Projects
            </a>
            <a className={styles.NavLink} href="/sprojects">
              Portfolio Projects
            </a>
            <a className={styles.NavLink} href="/create">
              Create a Project
            </a>
            <a className={styles.NavLink} href="/createsprojects">
              Add to Portfolio
            </a>
            {/* <CgProfile className={styles.Profile} href="/" /> */}
            {/* <button className={styles.LogOut} onClick={() => onLogButton()}>
              Log Out
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}
