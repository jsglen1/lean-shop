import { IItems } from "@/store";
import axios from "axios";
import { URL_PURCHASE_PRODUCTS } from '../constans/urls';
import { headers } from '../constans/headers';

export const purchaseProduct = async (payload: IItems[]) => {
  try {
    return (
      await axios.post(
        `${process.env.NEXT_PUBLIC_URL_API}/${URL_PURCHASE_PRODUCTS}`,
        payload,
        {
          headers,
        }
      )
    ).data;
  } catch (error) {return }
};
