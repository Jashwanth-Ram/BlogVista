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
                <p className={styles.desc}>Combination of Next.js and React, my latest blog app  with the sleek and intuitive design. As a fellow web developer, I have  tailored every aspect to enhance the writing and reading experience, making it a must-have tool for anyone in the digital content space. Elevate your blogging journey with <span className={styles.vista}>BlogVista </span> .</p>

                <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>

            </div>
            <div className={styles.links}>

            <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/write">Style</Link>
          <Link href="/write">Fashion</Link>
          <Link href="/write">Coding</Link>
          <Link href="/write">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
            </div>
        </div>
    )
}

export default Footer
