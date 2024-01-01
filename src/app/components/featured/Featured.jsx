import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey there</b>, Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/blog.jpg" alt="pic" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>



          <h1 className={styles.postTitle}> BlogVista - Your space to Write , Post and Comment !!</h1>
          <p className={styles.postDesc}>
          Blog your way using BlogVista! Share your thoughts, upload images, and join the conversation with comments. A  simple platform for expressing  your thoughts.
          </p>
       </div>
      </div>
    </div>
  );
};

export default Featured;