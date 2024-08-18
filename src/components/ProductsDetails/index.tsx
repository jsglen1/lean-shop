import React from "react";
import styles from "./ProductDetails.module.scss";
import SharedStyles from "@/styles/_shared.module.scss";
import { capitalizeWord } from '@/hooks/capitalizeWord';

export interface Info {
  first: string;
  first_value: string;
  second: string;
  second_value: string;
}

interface Props {
  info: Info;
  greenColor?: boolean;
}

export default function ProductDetails({
  info: { first, first_value, second, second_value },
  greenColor = false,
}: Props) {
  return (
    <div className={styles.space_betwwen_div}>
      <div>
        <p className={SharedStyles.text_color_secundary}>{ capitalizeWord(first) }:</p>
        <p className={SharedStyles.text_color_black}>{ capitalizeWord(first_value)}</p>
      </div>
      <div>
        <p className={SharedStyles.text_color_secundary}>{ capitalizeWord(second) }:</p>
        <p
          className={
            greenColor
              ? SharedStyles.text_color_green
              : SharedStyles.text_color_black
          }
        >
          {capitalizeWord(second_value)}
        </p>
      </div>
    </div>
  );
}
