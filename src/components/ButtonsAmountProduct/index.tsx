import Image from "next/image";
import React from "react";
import styles from "./ButtonsAmountProduct.module.scss";

interface Props {
  amount: number;
  handleSubtract: () => void;
  handleAdd: () => void;
  width?: number;
}

export default function ButtonsAmountProduct({
  amount,
  handleSubtract,
  handleAdd,
  width = 100,
}: Props) {
  return (
    <div className={styles.div_amount} style={{ width: `${width}%` }}>
      <i className={styles.i}>
        <Image
          src={"/subtract.svg"}
          alt={"/subtract.svg"}
          fill
          sizes="50vw"
          priority
          style={{ objectFit: "contain", cursor: "pointer" }}
          onClick={handleSubtract}
        />
      </i>
      <label>{amount}</label>
      <i className={styles.i}>
        <Image
          src={"/add.svg"}
          alt={"/add.svg"}
          fill
          sizes="50vw"
          priority
          style={{ objectFit: "contain", cursor: "pointer" }}
          onClick={handleAdd}
        />
      </i>
    </div>
  );
}
