"use client";
import React, { useState } from "react";
import SharedStyles from "../../../styles/_shared.module.scss";
import styles from "./Cart.module.scss";
import { useAppStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import ButtonIcon from "@/components/ButtonIcon";
import ProductItemSelected from "@/components/ProductItemSelected";
import Purchase from "@/api/purchase";
import { CART } from "@/constans/cart";
import { capitalizeWord } from "@/hooks/capitalizeWord";

const Cart = () => {
  const { productsCart, items } = useAppStore((state) => state);

  const { mutateAsync } = Purchase.CreatePurchase.useMutation();

  const handleProcessToCheckout = async () => {
    mutateAsync({ ...items });
  };

  return (
    <>
      <div className={SharedStyles.container_main}>
        <div className={styles.container_shooping_card}>
          <p className={styles.p_shopping_card}>{CART.SHOPPING_CART}</p>

          <div className={styles.container_products_label}>
            <p className={SharedStyles._45}>{CART.PRODUCT}</p>
            <p className={SharedStyles._15}>{CART.PRICE}</p>
            <p className={SharedStyles._20}>{CART.QUANTITY}</p>
            <p className={SharedStyles._20}>{CART.SUB_TOTAL}</p>
          </div>

          <div className={styles.container_product_data}>
            {/* TODO: price real TESTING */}
            {productsCart?.map((element) => (
              <ProductItemSelected infoProduct={element} key={element.id} />
            ))}
          </div>

          <div className={styles.container_footer}>
            <Link href={"/"} className={styles.link_back_shop}>
              <i className={styles.i_img_arrow_back}>
                <Image
                  src={"/back_arrow_secundary.svg"}
                  alt={"/back_arrow_secundary.svg"}
                  fill
                  sizes="90vw"
                  priority
                  style={{ objectFit: "contain" }}
                />
              </i>
              <p>{CART.RETURN_TO_SHOP}</p>
            </Link>
            <div className={styles.link_back_shop}>
              <p>{CART.UPDATE_CART}</p>
            </div>
          </div>
        </div>

        <div className={styles.container_card_totals}>
          <p className={styles.p_card_total}>{CART.UPDATE_CART}</p>
          <div className={styles.container_total_price}>
            <p>{capitalizeWord(CART.SUB_TOTAL)}</p>
            <p>$320</p>
          </div>
          <div className={styles.container_total_price}>
            <p>{CART.DISCOUNT}</p>
            <p>$24</p>
          </div>
          <div className={styles.line} />
          <div className={styles.container_total_price}>
            <p>{CART.TOTAL}</p>
            <p>$357.99 USD</p>
          </div>

          <ButtonIcon
            onButtonIcon={handleProcessToCheckout}
            text={CART.PROCEED_TO_CHECKOUT}
            urlImg="/forward_arrow.svg"
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
