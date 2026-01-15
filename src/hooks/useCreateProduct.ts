import { useMutation, useQueryClient } from '@tanstack/react-query';
import { _post } from '../api/client';
import { type ProductModel } from '../api/types/ProductModel';


const KPI_KEYS = {
    //query key for the current weather data
    products: ["ProductData"] as const,
};


export const useCreateProduct = () => {

    const queryClient = useQueryClient();

      const createResult = useMutation({
        
        mutationFn: (productData: ProductModel) => 
            {
                return _post("product", productData)
            },
            onSuccess: data => {
                console.log(data);
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

