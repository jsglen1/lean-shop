import axios from "axios";
import { URL_PRODUCTS } from '../constans/urls';
import { headers } from '../constans/headers';

export const getProducts = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_URL_API}/${URL_PRODUCTS}`,
      { headers }
    );
    return data;
  } catch (error) {
    return { error: "Failed to fetch products" };
  }
};

export const getProduct = async (id: string) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_URL_API}/${URL_PRODUCTS}/${id}`,
      { headers }
    );
    return data;
  } catch (error) {
    return { error: "Failed to fetch products" };
  }
};
