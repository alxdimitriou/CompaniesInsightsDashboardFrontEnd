import { useQuery } from '@tanstack/react-query';
import { _get } from '../api/client';
import { type ProductModel } from '../api/types/ProductModel';

const KPI_KEYS = {
    //query key for the current weather data
    products: ["ProductData"] as const,
};


export const useProduct = () => {
  return (
    useQuery({
        queryKey: KPI_KEYS.products,
        queryFn: () =>  _get<ProductModel[]>('product', {})
        //enabled => for refretch
    })
  )
}