export const dynamic = "force-dynamic";

import { getProducts } from "@/api/axiosProducts";
import { IProducts } from "@/types/IProducts";
import React from "react";
import { HOME_PAGE } from "@/constans/home-page";
import styles from "./HomePage.module.scss";
import Card from "@/ui/Card";
import Image from 'next/image'

const Homepage = async () => {
  const data = (await getProducts()) as IProducts;

  return (
    <div>
      <h2 className={styles.title}>{HOME_PAGE.TITLE}</h2>
      <Card>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <div className={styles.main_product}>
          <i className={styles.product_img_container}>
            <span className={styles.discount}>32% OFF</span>
            <Image src={data[0].image} alt={data[0].image} 
            width={280}
            height={268}
            />
          </i>
          <div className={styles.info_container}>
              <div className={styles.qualification_container}>
                  <div className={styles.stars_container}>
                  <Image src={data[0].image} alt={data[0].image} height={20} width={20}/>
                  <Image src={data[0].image} alt={data[0].image} height={20} width={20}/>
                  <Image src={data[0].image} alt={data[0].image} height={20} width={20}/>
                  <Image src={data[0].image} alt={data[0].image} height={20} width={20}/>
                  <Image src={data[0].image} alt={data[0].image} height={20} width={20}/>
                  <small> (52,677)</small>
                  </div>
                  <p>Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...</p>
              </div>

              <p className={styles.price_container}><span>$865.99</span><strong>$442.12</strong></p>

              <p className={styles.description}>Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.</p>

              <button>
                <Image src={data[0].image} alt={data[0].image} height={20} width={20}/>
                ADD TO CARD
              </button>
          </div>
        </div>
        <div className={styles.products_container}>
          <div className={styles.up_row}>

            {
              [1,2,3,4].map((item) =>(
                <div key={item} className={styles.product_item}>
                  <Image src={data[0].image} alt={data[0].image} height={216} width={188}/>
                  <div>
                    <p>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                    <p>$865.99</p>
                  </div>
              </div>
              ))
            }

          </div>

          <div className={styles.bottom_row}>
            {
                [1,2,3,4].map((item) =>(
                  <div key={item} className={styles.product_item}>
                    <Image src={data[0].image} alt={data[0].image} height={216} width={188}/>
                    <div>
                      <p>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
                      <p>$865.99</p>
                    </div>
                </div>
                ))
              }
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Homepage;
