import Image from "next/image";
import React from "react";
import styles from "../styles/Testmonials.module.css";
import Circle from "./Circle";

const Testmonials = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="darkblue" top="-70vh" left="0" right="0" />
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <Image src={`/img/facebook.png`} alt="" width={"30"} height={"30"} />
          <p className={styles.comment}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            consequuntur.
          </p>
          <div className={styles.person}>
            <Image
              className={styles.avatar}
              src={"/img/user1.jpeg"}
              width={"45"}
              height={"45"}
              objectFit="cover"
              alt="user"
            />
            <div className={styles.info}>
              <span className={styles.username}>David</span>
              <span className={styles.jobTitle}>HR Manager</span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image src={`/img/google.png`} alt="" width={"30"} height={"30"} />
          <p className={styles.comment}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            consequuntur.
          </p>
          <div className={styles.person}>
            <Image
              className={styles.avatar}
              src={"/img/user2.jpeg"}
              width={"45"}
              height={"45"}
              objectFit="cover"
              alt="user"
            />
            <div className={styles.info}>
              <span className={styles.username}>Anna Taylor</span>
              <span className={styles.jobTitle}>Designer</span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image src={`/img/yahoo.png`} alt="" width={"30"} height={"30"} />
          <p className={styles.comment}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            consequuntur.
          </p>
          <div className={styles.person}>
            <Image
              className={styles.avatar}
              src={"/img/user3.jpeg"}
              width={"45"}
              height={"45"}
              objectFit="cover"
              alt="user"
            />
            <div className={styles.info}>
              <span className={styles.username}>David</span>
              <span className={styles.jobTitle}>HR Manager</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
