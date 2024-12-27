import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./Navbar.module.css";
import homeImg from "@images/homeImg.png"

export default function TrackSection() {
  const navigate = useNavigate();

    return (
      <nav className={styles.navWrapper}>
        <div className={styles.navItem} onClick={() => { navigate('search')}}>검색</div>
        <div className={styles.navItem} onClick={() => { navigate('/')}}><img src={homeImg} /></div>
        <div className={styles.navItem} onClick={() => { navigate('library')}}>내 서재</div>
      </nav>
    )
}