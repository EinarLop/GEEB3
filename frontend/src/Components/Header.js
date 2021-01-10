import React, {useState} from "react";
import styles from "./HeaderStyles.module.scss";
import { MdNaturePeople } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import { useMediaSize } from 'use-media-size';

//ProjectFeed own searchbar
//Porjects titulo === tags

//Profile
//@

//Header Icon   Name Create Explore Logout

export default function Header() {
  const { isMd} = useMediaSize();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (event)=>{
    setIsOpen(!isOpen)
    console.log("Clickeado")
  }
  return (
    <div className={styles.Wrapper}>
      <div className={styles.IconNameContainer}>
        <MdNaturePeople className={styles.Icon} />
        <h2 className={styles.Logo}>Intecreate</h2>
      </div>
      {isMd
        ?  
          <div right className={styles.PageWrap}>
              <AiOutlineMenu className={styles.MenuIcon} onClick={ handleClick}/>
              {isOpen &&
                <div className={styles.Menu}>
                    <AiFillCloseCircle onClick={ handleClick}/>
                    <a className={styles.Links} href="/create">
                      Create
                    </a>

                    <a className={styles.Links} href="/oprojects">
                      Explore
                    </a>

                    <a className={styles.Links} href="/login">
                      Log Out
                    </a>

                    <a className={styles.Links} href="/">
                      Profile
                    </a>
                </div>
              }
            </div>
        : <div className={styles.NavContainer}>
            <a className={styles.NavLink}>Create</a>
            <a className={styles.NavLink}>Explore</a>
            <button className={styles.LogOut}>Log Out</button>
            <CgProfile className={styles.Profile} />
          </div>
      }
      
    </div>
  );
}

