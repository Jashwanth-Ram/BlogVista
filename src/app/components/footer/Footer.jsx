import React from "react";
import styles from "./footer.module.css"
import Image from "next/image";
import Link from "next/link";
const Footer = ()=>
{
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>

                    <Image className={styles.img}src="/jr1.png" alt="" width={50} height={50}/>
                    <h1 className={styles.logoText}>Jashwanth Ram</h1>
                </div>
                <p className={styles.desc}>
                       Elevate your blogging journey with <span className={styles.vista}>BlogVista 
                        </span>.</p>

               

            </div>
            <div className={styles.links}>

            <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/write">Style</Link>
          <Link href="/write">Fashion</Link>
          <Link href="/write">Coding</Link>
          <Link href="/write">Travel</Link>
        </div>
      
            </div>
        </div>
    )
}

export default Footer
