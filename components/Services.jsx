import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What we can do?</h1>
      <h1 className={styles.subtitle}>Services we can help you with?</h1>
      <div className={styles.services}>
        <Link href={"/products/design"}>
          <div className={styles.service}>
            <div className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              blanditiis!
            </div>
            <span className={styles.cat}>Design</span>
            <div className={styles.media}>
              <video
                src={`/img/Avocado.mp4`}
                autoPlay
                loop
                muted
                className={styles.video}
              />
            </div>
          </div>
        </Link>
        <Link href={"/products/design"}>
          <div className={styles.service}>
            <div className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              blanditiis!
            </div>
            <span className={styles.cat}>Photography</span>
            <div className={styles.media}>
              <Image
                src={`/img/photography.jpeg`}
                width={"100%"}
                height={"100%"}
                layout="responsive"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
