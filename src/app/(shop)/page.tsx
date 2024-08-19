export const dynamic = "force-dynamic";
import { IProducts } from "@/types/IProducts";
import React from "react";
import { HOME_PAGE } from "@/constans/home-page";
import styles from "./HomePage.module.scss";
import { getProducts } from "@/api/axios/axiosProducts";
import Image from "next/image";
import ProductMainButton from "@/components/ProductMainButton";
import SharedStyles from "../../styles/_shared.module.scss";
import PriceDiscount from "@/components/PriceDiscount";
import PricesProductDetails from "@/components/PricesProductDetails";

const Homepage = async () => {
  const data = (await getProducts()) as IProducts;

  return (
    <>
      <h2 className={styles.title}>{HOME_PAGE.TITLE}</h2>
      <div className={styles.div_wrap}>
        <div className={styles.container_big_product}>
          <PriceDiscount discount={data[0].discount} />
          <i className={styles.i}>
            <Image
              src={data[0].image}
              alt={data[0].image}
              fill
              sizes="90vw"
              priority
              style={{ objectFit: "contain" }}
            />
          </i>
          <p className={SharedStyles.text_user_feedback}>
            ({data[0].reviews_number})
          </p>
          <p className={SharedStyles.text_big}>{data[0].name}</p>
          <PricesProductDetails product={data[0]} showPercentage={false} />
          <p className={SharedStyles.text_summary}>{data[0].summary}</p>
          <ProductMainButton product={data[0]} />
        </div>

        <div className={styles.container_small_products}>
          {data.slice(1).map((element) => (
            <div
              className={styles.container_each_small_product}
              key={element.id}
            >
              <PriceDiscount discount={element.discount} />
              <i className={styles.i_small}>
                <Image
                  src={element.image}
                  alt={element.image}
                  fill
                  sizes="90vw"
                  priority
                  style={{ objectFit: "contain" }}
                />
              </i>
              <p className={styles.text_name_product_small}>{element.name}</p>
              <PricesProductDetails product={element} showPercentage={false} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
