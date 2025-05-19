import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>

      <Link href="https://blog-jash-vista.vercel.app/posts/western-fashion-1747562977475" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/fashion.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Fashion</span>
          <h3 className={styles.postTitle}>
          Western Fashion</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Sai</span>
            <span className={styles.date}> - 2025-05-18</span>
          </div>
        </div>
      </Link>


      <Link href="https://blog-jash-vista.vercel.app/posts/pop-culture-1747559295348" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/popcult.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
           Pop Culture
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Akash</span>
            <span className={styles.date}> - 2025-05-18</span>
          </div>
        </div>
      </Link>


      <Link href="https://blog-jash-vista.vercel.app/posts/quantum-ai-1747643095057" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/coding.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Coding</span>
          <h3 className={styles.postTitle}>
            QuantumAI
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jashwanth Ram</span>
            <span className={styles.date}> - 2025-05-19  </span>
          </div>
        </div>
      </Link>


      <Link href="https://blog-jash-vista.vercel.app/posts/discovering-nyc-1747643856402" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/travel.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Travel
          </span>
          <h3 className={styles.postTitle}>
          Discovering NYC          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Harish</span>
            <span className={styles.date}> - 2025-05-19</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
