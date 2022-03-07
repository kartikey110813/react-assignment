import react, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import axios from "axios";

const Navbar = () => {

  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://assessment.api.vweb.app/user")
      .then((res) => {
        console.log(res.data);
        setUserDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <nav
        className={`${styles.navbar} ${styles.background} ${styles["h-nav-resp"]}`}
      >
        <ul className={`${styles["nav-list"]} ${styles[" v-class-resp"]}`}>
          <li>
            <span className={styles.navHeading}>EDVORA</span>
          </li>
        </ul>
        <div className={styles.logo}>
          <p className={styles.pTag}>{userDetails.name}</p>
          <img src={userDetails.url} alt="logo" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
