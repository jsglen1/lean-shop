"use client";
import React from "react";
import ButtonIcon from "../ButtonIcon";
import { IProduct } from "@/types/IProducts";
import { useRouter } from "next/navigation";
import { URL_PRODUCT } from '@/api/constans/urls';

interface Props {
  product: IProduct;
}

export default function ProductMainButton({ product }: Props) {
  const router = useRouter();
  const handleAddToCart = () => {
    router.push(`/${URL_PRODUCT}/${product.id}`);
  };

  return (
    <ButtonIcon
      text="ADD TO CART"
      urlImg={"/cart.svg"}
      onButtonIcon={handleAddToCart}
    />
  );
}
