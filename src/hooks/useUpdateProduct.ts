import { useMutation, useQueryClient } from '@tanstack/react-query';
import { _put } from '../api/client';
import { type ProductModel } from '../api/types/ProductModel';


const KPI_KEYS = {
    //query key for the current weather data
    products: ["ProductData"] as const,
};




export const useUpdateProduct = () => {

    const queryClient = useQueryClient();

      const createResult = useMutation({
        
        mutationFn: (productData: ProductModel) => 
            {
                return _put(`product/${productData.id}`, productData)
            },
            onSuccess: () => {
                //console.log(data);
                const message = "success"
                alert(message)
            },
            onError: () => {
                alert("there was an error")
            },
            onSettled: () => {
                queryClient.invalidateQueries({ queryKey: KPI_KEYS.products})
            }
        });


    return(
        createResult
    );
}