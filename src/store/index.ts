import { IProduct } from "@/types/IProducts";
import { create } from "zustand";

export interface IItems {
  product: string;
  quantity: number;
}

export type AppStore = {
  itemsCart: number;
  addItemsCart: (newAmount: number) => void;
  updateItemsCart: (newAmount: number) => void;

  productsCart: IProduct[];
  addProductCart: (product: IProduct) => void;
  updateAllProductCart: (products: IProduct[]) => void;

  items: IItems[];
  addOrUpdateItem: (product: string, quantity: number) => void;
  updateItems : (newItems: IItems[]) => void
};

export const useAppStore = create<AppStore>((set) => ({
  itemsCart: 0,
  addItemsCart: (newAmount) =>
    set((state) => ({ itemsCart: state.itemsCart + newAmount })),
  updateItemsCart: (newAmount) => set(() => ({ itemsCart: newAmount })),

  productsCart: [],
  addProductCart: (product: IProduct) =>
    set((state) => ({
      productsCart: [...state.productsCart, product],
    })),
  updateAllProductCart: (products: IProduct[]) =>
    set(() => ({
      productsCart: products,
    })),

  items: [],
  addOrUpdateItem: (product: string, quantity: number) =>
    set((state) => ({
      items: [...state.items, { product, quantity }],
    })),
  updateItems: (newItems) => set(() => ({ items: newItems })),
}));
