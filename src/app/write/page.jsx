// src/app/write/page.jsx

"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/utils/firebase";

// Dynamically import ReactQuill outside the component
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.bubble.css"; // or "quill.snow.css"

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState(""); // Controlled value for ReactQuill
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [mounted, setMounted] = useState(false); // For SSR hydration

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!file) return;
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!mounted) return null; // Prevent SSR mismatch

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Category Slug"
          value={catSlug}
          onChange={e => setCatSlug(e.target.value)}
          className={styles.input}
        />
        <input
          type="file"
          onChange={e => setFile(e.target.files[0])}
          className={styles.input}
        />
        {media && (
          <Image src={media} alt="Uploaded" width={200} height={200} />
        )}
        <ReactQuill
          value={value}
          onChange={setValue}
          theme="bubble" // or "snow"
          placeholder="Write your blog post here..."
        />
        {/* Add your submit button and logic here */}
      </div>
    </div>
  );
};

export default WritePage;
