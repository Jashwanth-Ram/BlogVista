"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat");

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}${cat ? `&cat=${cat}` : ""}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() => router.push(`?page=${page + 1}${cat ? `&cat=${cat}` : ""}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
