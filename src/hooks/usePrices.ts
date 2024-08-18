import { IProduct } from "@/types/IProducts";

export const usePrices = (product: IProduct) => {
  const { price, discount } = product;
  let price_discount = 0;
  let weither_discount = false;

  if (discount > 0.01) {
    price_discount = price - (price * discount) / 100;
    weither_discount = true;
  }

  return { price, discount, price_discount, weither_discount };
};
