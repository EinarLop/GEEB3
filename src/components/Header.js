import React, { useState, useEffect } from "react";
import styles from "./HeaderStyles.module.scss";
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { IoPersonCircleOutline } from "react-icons/io5";
import { FiBox } from 'react-icons/fi';
import { BsFolderPlus } from 'react-icons/bs';
import { ImBooks } from 'react-icons/im';
import { MdContactMail } from 'react-icons/md';
import { FaPeopleCarry } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useMediaSize } from "use-media-size";
import { Link } from "react-router-dom";
import useLogin from '../hooks/useLogin'

/* Header layout:  Icon, Logo, 'Create', 'Explore', Header is visible to anyone who is logged in.*/

export default function Header() {
  const { isMd } = useMediaSize();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [visitor, setVisitor] = useState("");
  const handleClick = (event) => {
    setIsOpen(!isOpen);
  };

  /* useEffect(() => {
    let geebId = localStorage.getItem("geebId");
    console.log("geebId:", geebId);
    setVisitor(geebId);
  }); */

  const { loginStatus } = useLogin();

  return (
    <div className={styles.Wrapper}>
      <div className={styles.IconNameContainer}>

        <Link to="/" className={styles.HomeLink}>
          <FaPeopleCarry className={styles.Icon} />
        </Link>
        <Link className={styles.HomeLink} to="/">
          <h2 className={styles.Logo}>GEEB </h2>
        </Link>

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

                <Link
                  to="/"
                  onClick={handleClick}
                  className={`${styles.Links} ${styles.Title}`}
                >
                  {" "}
                  GEEB{" "}
                </Link>

                <Link
                  to="/oprojects"
                  onClick={handleClick}
                  className={styles.Links}
                >
                  Find Team Projects <HiOutlineViewGridAdd />
                </Link>
                <Link
                  to="/sprojects"
                  onClick={handleClick}
                  className={styles.Links}
                >
                  View Portfolio Projects <ImBooks />
                </Link>

                <Link
                  to="/createsproject"
                  onClick={handleClick}
                  className={styles.Links}
                >
                  Add to Portfolio <BsFolderPlus />
                </Link>

                <Link
                  to={loginStatus ? `/profile/me` : '/login'}
                  onClick={handleClick}
                  className={styles.Links}
                >
                  {loginStatus ? "My Profile" : "Log In"} <IoPersonCircleOutline />
                </Link>

              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.NavContainer}>
          <Link to="/oprojects" className={styles.Links}>
            Find Projects <HiOutlineViewGridAdd />
          </Link>
          <Link to="/sprojects" className={styles.Links}>
            View Portfolios <ImBooks />
          </Link>
          {loginStatus && (
            <>
              <Link to="/create" className={styles.Links}>
                Create Project <FiBox />
              </Link>
              <Link to="/createsproject" className={styles.Links}>
                Add to Portfolio <BsFolderPlus />
              </Link>
            </>
          )}
          <Link to={loginStatus ? `/profile/me` : '/login'}>
            {loginStatus ? (
              <IoPersonCircleOutline className={styles.NavLinkIcon} />
            ) : (
              <input
                value="Log In"
                className={styles.LogIn}
                type="button"
              />
            )}
          </Link>
        </div>
      )}
    </div>
  );
}
