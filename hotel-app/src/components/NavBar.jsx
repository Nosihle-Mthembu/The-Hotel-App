// src/components/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}><Link to="/">Home</Link></li>
        <li style={styles.li}><Link to="/sign-up">Sign Up</Link></li>
        <li style={styles.li}><Link to="/sign-in">Sign In</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#333",
    padding: "10px",
  },
  ul: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-around",
  },
  li: {
    color: "#fff",
  },
};

export default NavBar;
