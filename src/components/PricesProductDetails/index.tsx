import React from "react";
import styles from "./PricesProductDetails.module.scss";
import { IProduct } from "@/types/IProducts";
import { usePrices } from "@/hooks/usePrices";
import { useFormatPercentage } from "@/hooks/useFormatPercentage";

interface Props {
  product: IProduct;
}

export default function PricesProductDetails({ product }: Props) {
  const { discount, price, price_discount, weither_discount } =
    usePrices(product);
  const formatPercentage = useFormatPercentage(discount);
  const formatPriceDiscount = useFormatPercentage(price_discount, 2);

  return (
    <div className={styles.container_prices}>
      {weither_discount ? (
        <>
          <p className={styles.text_price_discount}>${formatPriceDiscount}</p>
          <p className={styles.text_price}>${price}</p>
          <p className={styles.text_discount}>{formatPercentage}% OFF</p>
        </>
      ) : (
        <p className={styles.text_price_discount}>${price}</p>
      )}
    </div>
  );
}
