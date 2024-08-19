"use client";
import { IProduct } from "@/types/IProducts";
import React, { useState } from "react";
import styles from "./ButtonsProductDetails.module.scss";
import Image from "next/image";
import { BUTTONS_PRODUCT_DETAILS } from "@/constans/buttons-product-details";
import { IItems, useAppStore } from "@/store";
import { useRouter } from "next/navigation";
import ButtonsAmountProduct from "../ButtonsAmountProduct";
import ButtonIcon from "../ButtonIcon";

interface Props {
  product: IProduct;
}

export default function ButtonsProductDetails({ product }: Props) {
  const { addItemsCart, addProductCart, addOrUpdateItem } = useAppStore((state) => state);
  const { productsCart, items } = useAppStore((state) => state);
  const [amount, setAmount] = useState<number>(0);
  const router = useRouter();

  const handleAdd = () => {
    setAmount(amount + 1);
  };

  const handleSubtract = () => {
    if (amount !== 0) {
      setAmount(amount - 1);
    }
  };

  const handleAddOrUpdateItem = (foundItem?: IItems) => {
    if (!foundItem) return;

    addOrUpdateItem(product.id, amount + foundItem.quantity);
  };

  const handleAddToCart = () => {
    addItemsCart(amount);
    setAmount(0);

    const productsCartTemp = [...productsCart];
    const foundProduct = productsCartTemp.find((item) => item.id === product.id);

    if (!foundProduct) {
      addProductCart(product);
      addOrUpdateItem(product.id, amount);
    } else {
      const foundItem = items.find((item) => item.product === product.id);
      handleAddOrUpdateItem(foundItem);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart()
    router.push("/cart");
  };

  return (
    <div className={styles.div_container}>
      <ButtonsAmountProduct
        width={30}
        amount={amount}
        handleAdd={handleAdd}
        handleSubtract={handleSubtract}
      />
      <ButtonIcon
        onButtonIcon={handleAddToCart}
        text={BUTTONS_PRODUCT_DETAILS.ADD_TO_CART}
        urlImg="/cart.svg"
        width={30}
      />
      <div className={styles.div_purchase}>
        <p onClick={handleBuyNow}>{BUTTONS_PRODUCT_DETAILS.BUY_NOW}</p>
      </div>
    </div>
  );
}
