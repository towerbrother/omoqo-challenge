"use client";

import { useFormState } from "react-dom";
import styles from "./Form.module.css";
import { FormState, Ship } from "@/types";
import { amendShip } from "@/services";
import SubmitButton from "./SubmitButton";
import FieldError from "./FieldError";

type Props = {
  ship: Ship;
};

export const EMPTY_FORM_STATE: FormState = {
  status: "UNSET" as const,
  errors: {},
  message: "",
};

export default function AmendForm({ ship }: Props) {
  const [formState, formAction] = useFormState(amendShip, EMPTY_FORM_STATE);

  return (
    <form action={formAction} className={styles.form} method="PUT">
      <input type="hidden" name="id" value={ship.id} />
      {/* name */}
      <div className={styles.block}>
        <div className={styles.labelWithError}>
          <label className={styles.label} htmlFor="name">
            Name*
          </label>
          <FieldError
            formState={formState}
            name="name"
            className={styles.error}
          />
        </div>
        <input
          type="text"
          autoComplete="off"
          name="name"
          placeholder="Name..."
          defaultValue={ship.name}
        />
      </div>
      {/* code */}
      <div className={styles.block}>
        <div className={styles.labelWithError}>
          <label className={styles.label} htmlFor="code">
            Code*
          </label>
          <FieldError
            formState={formState}
            name="code"
            className={styles.error}
          />
        </div>
        <input
          type="text"
          autoComplete="off"
          name="code"
          placeholder="AAAA-1111-A1"
          defaultValue={ship.code}
        />
      </div>
      {/* length */}
      <div className={styles.block}>
        <div className={styles.labelWithError}>
          <label className={styles.label} htmlFor="length">
            Length*
          </label>
          <FieldError
            formState={formState}
            name="length"
            className={styles.error}
          />
        </div>
        <input
          type="number"
          min={0}
          step={0.01}
          name="length"
          autoComplete="off"
          placeholder="Length..."
          className={styles.input}
          defaultValue={Number(ship.length)}
        />
      </div>
      {/* width */}
      <div className={styles.block}>
        <div className={styles.labelWithError}>
          <label className={styles.label} htmlFor="width">
            Width*
          </label>
          <FieldError
            formState={formState}
            name="width"
            className={styles.error}
          />
        </div>
        <input
          type="number"
          min={0}
          step={0.01}
          name="width"
          autoComplete="off"
          placeholder="Width..."
          className={styles.input}
          defaultValue={Number(ship.width)}
        />
      </div>
      <SubmitButton id={ship.id.toString()} className={styles.button} />
    </form>
  );
}
