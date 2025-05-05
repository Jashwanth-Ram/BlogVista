"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/utils/firebase";
import useSWR from "swr";

// Dynamically import ReactQuill outside the component
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.bubble.css"; // or "quill.snow.css"

// Fetcher for SWR
const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState(""); // Controlled value for ReactQuill
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [mounted, setMounted] = useState(false); // For SSR hydration
  const [loading, setLoading] = useState(false);

  // Fetch categories for dropdown
  const { data: categories, error: catError } = useSWR("/api/categories", fetcher);

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
          // Optional: handle progress
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Prepare post data
    const postData = {
      title,
      desc: value,
      catSlug,
      img: media,
    };

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });
      if (res.ok) {
        router.push("/");
      } else {
        alert("Failed to create post");
      }
    } catch (err) {
      alert("Error submitting post");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || !mounted) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className={styles.input}
          required
        />
        {/* Category Dropdown */}
        <select
          value={catSlug}
          onChange={e => setCatSlug(e.target.value)}
          className={styles.input}
          required
        >
          <option value="">Select Category</option>
          {categories &&
            categories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.title}
              </option>
            ))}
        </select>
        {/* File Upload */}
        <input
          type="file"
          onChange={e => setFile(e.target.files[0])}
          className={styles.input}
        />
        {media && (
          <Image src={media} alt="Uploaded" width={200} height={200} />
        )}
        {/* Rich Text Editor */}
        <ReactQuill
          value={value}
          onChange={setValue}
          theme="bubble" // or "snow"
          placeholder="Write your blog post here..."
        />
        {/* Submit Button */}
        <button type="submit" className={styles.publish} disabled={loading}>
          {loading ? "Posting..." : "Publish"}
        </button>
      </form>
    </div>
  );
};

export default WritePage;
