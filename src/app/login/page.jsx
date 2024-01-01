"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
 
const LoginPage = () => {

  const { data,status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/")
  }
  
  return (
    <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton} onClick={()=>signIn("google")}>SignIn with Google<span className={styles.span}>
                    <Image src="/goggle.png" alt="" width={20} height={20}/>
                    </span></div>
                    <div className={styles.socialButton} onClick={()=>signIn("github")}>SignIn with Github<span className={styles.span}>
                    <Image src="/github.png" alt="" width={20} height={20}/>
                    </span></div>      
            </div>
        </div>
  );
};

export default LoginPage;