import React from "react";
import styles from "../styles/navbar.module.css";
import { useNavigate } from "react-router-dom";
//div.classname and press tab for a shortcut, div# for id
// all functions have to be capital letter
//https://www.w3schools.com/react/react_css.asp

const websiteLinks = ["Home", "Volunteer", "Opportunities"];

function Navbar(Links) {
  const navigate = useNavigate();

  const loginClick = () => {
    navigate("/login");
  };

  const homeClick = () => {
    navigate("/");
  };

  const volClick = () => {
    navigate("/volunteer");
  };
  return (
    // This is the header along with the Navbar buttons
    <header>
      <div className={styles.navbarContainer}>
        <div id={styles.navbarTitle}>
          <img
            src="/images/logo-no-background.png"
            height={100}
            alt="Connecting Kerry"
            onClick={homeClick}
          />
        </div>

        <section>
          <ul className={styles.navbarButtons}>
            {websiteLinks.map((link) => (
              <li>{link}</li>
            ))}
            <button onClick={loginClick}>Login</button>
          </ul>
        </section>
      </div>
    </header>
  );
}

export default Navbar;
