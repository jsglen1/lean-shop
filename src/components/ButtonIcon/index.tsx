import Image from "next/image";
import React from "react";
import styles from "./ButtonIcon.module.scss";

interface Props {
  onButtonIcon: () => void;
  urlImg: string;
  text: string;
  width?: number;
}

export default function ButtonIcon({
  onButtonIcon,
  urlImg,
  text,
  width = 100,
}: Props) {
  return (
    <div
      className={styles.div_cart}
      style={{ width: `${width}%` }}
      onClick={onButtonIcon}
    >
      <p className={styles.add_to_cart}>{text}</p>
      <i className={styles.i}>
        <Image
          src={urlImg}
          alt={urlImg}
          fill
          sizes="50vw"
          priority
          style={{ objectFit: "contain" }}
        />
      </i>
    </div>
  );
}
