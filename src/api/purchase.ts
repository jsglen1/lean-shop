import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { purchaseProduct } from "./axios/axiosPurchase";
import { queryClient } from "@/components/Providers";
import { AxiosError } from "axios";
import { IItems } from "@/store";

const Purchase = {
  CreatePurchase: {
    useMutation: (
      options?: UseMutationOptions<any, AxiosError<any>, IItems[]>
    ) =>
      useMutation({
        ...options,
        mutationFn: (data) => purchaseProduct(data),
        onSuccess: (data) => {
          queryClient.invalidateQueries({ queryKey: ["purchase_products"] });
        },
        onError: (error) => {
          return;
        },
        onMutate: (variables) => {},
      }),
  },
};

export default Purchase;
