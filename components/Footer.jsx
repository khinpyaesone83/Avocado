import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>AVOCADO CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <a href={"/contact"}>
            <span className={styles.linkText}>WORK WITH US</span>
            <Image src={"/img/link.png"} alt="" height={"40"} width={"40"} />
          </a>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          12 ADAM STREET NY <br /> USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@KHIN <br /> 1231 123 131
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          12 ADAM STREET NY <br /> USA
        </div>
        <div className={styles.cardItem}>
          &copy; 2022 AVOCADO <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
