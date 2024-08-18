"use client";
import { IProduct } from "@/types/IProducts";
import React, { useState } from "react";
import styles from "./ButtonsProductDetails.module.scss";
import Image from "next/image";
import { BUTTONS_PRODUCT_DETAILS } from "@/constans/buttons-product-details";

interface Props {
  product: IProduct;
}

export default function ButtonsProductDetails({ product }: Props) {
  const [amount, setAmount] = useState<number>(0);

  const handleAdd = () => {
    setAmount(amount + 1);
  };

  const handleSubtract = () => {
    if (amount !== 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className={styles.div_container}>
      <div className={styles.div_amount}>
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

      <div className={styles.div_cart}>
        <p className={styles.add_to_cart}>
          {BUTTONS_PRODUCT_DETAILS.ADD_TO_CART}
        </p>
        <i className={styles.i}>
          <Image
            src={"/cart.svg"}
            alt={"/cart.svg"}
            fill
            sizes="50vw"
            priority
            style={{ objectFit: "contain" }}
          />
        </i>
      </div>

      <div className={styles.div_purchase}>
        <p>{BUTTONS_PRODUCT_DETAILS.BUY_NOW}</p>
      </div>
    </div>
  );
}
