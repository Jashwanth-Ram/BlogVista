import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = ()=>
{
    return (
        <div className={styles.container}>

            {/*   <h2 className={styles.subtitle}>{"What's"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <MenuPosts withImage={false}/>
*/}

            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <MenuCategories/>

           <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Featured Posts</h1>
            <MenuPosts withImage={true}/>
            
        </div>
    )
}

export default Menu;
