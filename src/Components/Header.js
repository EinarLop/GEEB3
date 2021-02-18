import React, { useState, useEffect } from "react";
import styles from "./HeaderStyles.module.scss";
import { MdNaturePeople } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {IoPersonCircleOutline} from 'react-icons/io5';
import { GiBurningTree } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useMediaSize } from "use-media-size";
import {Link} from 'react-router-dom';

/* Header layout:  Icon, Logo, 'Create', 'Explore', Header is visible to anyone who is logged in.*/

export default function Header() {
  const { isMd } = useMediaSize();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [visitor, setVisitor] = useState("");
  const handleClick = (event) => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    let geebId = localStorage.getItem("geebId");
    console.log("geebId:", geebId);
    setVisitor(geebId);
  });

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
        <GiBurningTree className={styles.Icon} />
        <h2 className={styles.Logo}>Intecreate</h2>
      </div>
      {isMd ? (
        <div className={styles.PageWrap}>
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
                <Link to="/oprojects" className={styles.Links}>Team Projects</Link>
                <Link to="/sprojects" className={styles.Links}>Portfolio Projects</Link>
                <Link to="/create" className={styles.Links}></Link>
                <Link to="/createsproject" className={styles.Links}>Add to Portfolio</Link>
                <Link to={`/myapplication/${visitor}`} className={styles.Links}>Application</Link>
                <Link to={`/profile/${visitor}`} className={styles.Links}>My profile</Link>
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
            <Link to="/oprojects" className={styles.Links}>Team Projects</Link>
            <Link to="/sprojects" className={styles.Links}>Portfolio Projects</Link>
            <Link to="/create" className={styles.Links}>Create a Project</Link>
            <Link to="/createsproject" className={styles.Links}>Add to Portfolio</Link>
            <Link to={`/myapplication/${visitor}`} className={styles.Links}>Application</Link>
            <Link to={`/profile/${visitor}`} className={styles.Links}>
              <IoPersonCircleOutline className={styles.NavLinkIcon} />
            </Link>
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
