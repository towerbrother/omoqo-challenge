"use client";

import { useEffect } from "react";
import styles from "./error.module.css";
import Button from "@/components/Button/Button";

// https://nextjs.org/docs/app/building-your-application/routing/error-handling
// this component being into the root of the appRouter will cause the entire page and its children to be included
// I could be more granual by adding an `error.tsx` file into each route

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Sentry logs would go here
    console.error(error);
  }, [error]);

  return (
    <div className={styles.error}>
      <h2>{error?.name}</h2>
      <h3>{error?.message || "Something went wrong!"}</h3>
      <div className={styles.buttons}>
        <Button type="reset" className={styles.button} onClick={() => reset()}>
          Try again!
        </Button>
      </div>
    </div>
  );
}
