"use client";
import React from "react";
import SharedStyles from "../../styles/_shared.module.scss";

interface Props {
  discount: number;
}

export default function PriceDiscount({ discount }: Props) {
  return (
    <>
      {discount > 0.1 && (
        <p className={SharedStyles.text_discount}>{discount}% OFF</p>
      )}
    </>
  );
}
