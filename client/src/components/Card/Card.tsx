"use client";

import { Ship } from "@/types";
import Button from "../Button/Button";
import { deleteShip } from "@/services";
import styles from "./Card.module.css";

type Props = {
  ship: Ship;
};

export default function Card({
  ship: { id, name, code, length, width },
}: Props) {
  return (
    <div className={styles.card}>
      <h3>{`${name} (ID: ${id})`}</h3>
      <h4>{`Code: ${code}`}</h4>
      <p>{`Length: ${length}`}</p>
      <p>{`Width: ${width}`}</p>
      <div className={styles.buttons}>
        <Button type="anchor" href={`ship/${id}`} className={styles.amend}>
          Amend
        </Button>
        <Button
          type="button"
          onClick={() => deleteShip(id)}
          className={styles.delete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
