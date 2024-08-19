"use client";
import { IProduct } from "@/types/IProducts";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./ProductItemSelected.module.scss";
import ButtonsAmountProduct from "../ButtonsAmountProduct";
import { IItems, useAppStore } from "@/store";
import SharedStyles from "../../styles/_shared.module.scss";

interface Props {
  infoProduct: IProduct;
}

export default function ProductItemSelected({
  infoProduct: { id, image, name, price },
}: Props) {
  const { productsCart, items, itemsCart } = useAppStore((state) => state);
  const { updateItems, updateAllProductCart, updateItemsCart } = useAppStore(
    (state) => state
  );
  const [amount, setAmount] = useState<number>(0);

  const handleAdd = () => {
    setAmount(amount + 1);
  };

  const handleSubtract = () => {
    if (amount !== 0) {
      setAmount(amount - 1);
    }
  };

  const handleCancelProduct = () => {
    const itemsFilter = items.filter((element) => element.product !== id);
    const itemFind = items.find((element) => element.product === id)!;
    updateItems(itemsFilter);

    const productsCartFilter = productsCart.filter(
      (element) => element.id !== id
    );
    updateAllProductCart(productsCartFilter);

    const itemsCartFilter = itemsCart - itemFind.quantity;
    updateItemsCart(itemsCartFilter);
  };

  const onButtonIcon = () => {};

  const handleAmountProduct = (items: IItems[], id: string) => {
    if (!items) return;

    const findItem = items.find((element) => element.product === id);
    if (!findItem) return;

    setAmount(findItem.quantity);
  };

  useEffect(() => {
    handleAmountProduct(items, id);
  }, [items, id]);

  return (
    <div className={styles.div_products_cart}>
      <div className={SharedStyles._45}>
        <i className={styles.i_cancel_product}>
          <Image
            src={"/cancel_product_red.svg"}
            alt={"/cancel_product_red.svg"}
            fill
            sizes="50vw"
            priority
            style={{ objectFit: "contain", cursor: "pointer" }}
            onClick={handleCancelProduct}
          />
        </i>

        <i className={styles.i_img_product}>
          <Image
            src={image}
            alt={image}
            fill
            sizes="90vw"
            priority
            style={{ objectFit: "contain" }}
            onClick={handleCancelProduct}
          />
        </i>

        <p className={styles.p_name}>{name}</p>
      </div>
      <div className={SharedStyles._15}>${price}</div>
      <div className={SharedStyles._20}>
        <ButtonsAmountProduct
          amount={amount}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
        />
      </div>
      <div className={SharedStyles._20}>${price}</div>
    </div>
  );
}
