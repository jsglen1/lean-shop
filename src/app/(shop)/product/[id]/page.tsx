export const dynamic = "force-dynamic";

import React from "react";
import styles from "./Product.id.module.scss";
import { IProduct } from "@/types/IProducts";
import { getProduct } from "@/api/axiosProducts";
import Image from "next/image";
import SharedStyles from "@/styles/_shared.module.scss";
import ProductDetails from "@/components/ProductsDetails";
import {
  INFO_FIRST,
  INFO_SECOND,
  PRODUCT_DETAILS,
} from "@/constans/product-detail";
import ButtonsProductDetails from "@/components/ButtonsProductDetails";
import PricesProductDetails from "@/components/PricesProductDetails";

type ProductDetailProps = {
  params: {
    id: string;
  };
};

const ProductDetail = async ({ params }: ProductDetailProps) => {
  const { id } = params;
  const data = (await getProduct(id)) as IProduct;

  return (
    <div>
      <div className={styles.container_main}>
        <div className={styles.container_img}>
          <i className={styles.i}>
            <Image
              src={data.image}
              alt={data.image}
              fill
              sizes="90vw"
              priority
              style={{ objectFit: "contain" }}
            />
          </i>
        </div>

        <div className={styles.container_details}>
          <div className={SharedStyles.div_row}>
            <strong className={SharedStyles.fontSizeSm}>
              {data.rating} {PRODUCT_DETAILS.START_RATING}
            </strong>
            <p className={styles.text_user_feedback}>
              {` (${data.reviews_number} ${PRODUCT_DETAILS.USER_FEEDBACK})`}
            </p>
          </div>
          <p className={SharedStyles.text_big}>{data.name}</p>
          <div className={styles.margin_div}>
            <ProductDetails info={INFO_FIRST} greenColor={true} />
            <ProductDetails info={INFO_SECOND} />
          </div>
          <PricesProductDetails product={data} />
          <div className={styles.line} />
          <ButtonsProductDetails product={data} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
