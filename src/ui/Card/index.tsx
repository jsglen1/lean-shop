import { ReactNode } from "react";
import styles from "./Card.module.scss";

interface Props {
  children?: ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
}
