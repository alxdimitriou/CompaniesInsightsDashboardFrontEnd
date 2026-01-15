import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, InputAdornment, TextField, Typography, useTheme } from '@mui/material'
import { useCreateProduct } from '../../hooks/useCreateProduct'

// Define Zod schema for form validation
// Alternatively you can use Yup validation also

const productSchema = z.object({
  name: z.string("Invalid email").min(1, "Name is required"),
  price: z.number().int().min(1, "Price is required"),
});


const CreateProductForm = () => {

const { palette } = useTheme();

// Define types for form data
type ProductModel = z.infer<typeof productSchema>;
// Destructure useForm from react-hook-form
const {
  // register: function to register input elements
  register,
  // handleSubmit: function to handle form submission
  handleSubmit,
  // watch: function to watch values of form inputs
  // watch,
  // formState: object containing information about form state
  formState: { errors, defaultValues }, // Destructure errors and touchedFields from formState
} = useForm<ProductModel>({ // Call useForm hook with generic type FormData
  // resolver: specify resolver for form validation using Zod
  resolver: zodResolver(productSchema), // Pass Zod schema to resolver
  // defaultValues: specify default values for form inputs
  defaultValues: {
    name: "",
  },
});

const createProduct = useCreateProduct();

 const onSubmit = (data: ProductModel) => {
    //console.log(data); // call api with submitted data 
    createProduct.mutate({ name: data.name, price: data.price})
 };

  return (
    <div className='bg-[#2d2d34] '>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h2" color='white' gutterBottom>
                Create Product
            </Typography>

            <TextField
                label="Name"
                fullWidth
                margin="normal"
                defaultValue={defaultValues?.name}
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                variant="outlined"

                 sx={{
                            input: { color: 'white' },
                            '& .MuiInputLabel-root': { color: 'white' },
                            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                            '& .MuiInputAdornment-root': { color: 'white' },
                        
                            '& .MuiTypography-root': { color: 'white' }, // euro typography fallback

                            // Root class for the input field
                            "& .MuiOutlinedInput-root": {
                                color: "#ffffff",
      
                                // Class for the border around the input field
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#ffffff",
                                    borderWidth: "2px",
                                },
                            },
                            // Class for the label of the input field
                            "& .MuiInputLabel-outlined": {
                                color: "#ffffff",
                            },

                            "&:hover:not(.Mui-focused)": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#ffffff",
                                },
                            },
                
                    }}
            />

            <TextField
                label="Price"
                type="number"
                fullWidth
                margin="normal"
                defaultValue={defaultValues?.price}
                {...register("price", { valueAsNumber: true })}
                error={!!errors.price}
                helperText={errors.price?.message}

                slotProps={{
                    input: {
                        
                    endAdornment: 
                            <InputAdornment position="end">
                                €
                            </InputAdornment>         
                    },
                }}

                sx={{
                    

                     '& .MuiInputAdornment-root': {
                    color: 'white',
                    },

                    //this is for the euro sign because it rendered as 
                    //typography in elements
                    //<p class="MuiTypography-root MuiTypography-body1 css-qyz4yi-MuiTypography-root">€</p>
                    '& .MuiTypography-root': { color: 'white' },

                    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                        display: "none",
                    },
                    "& input[type=number]": {
                        MozAppearance: "textfield",
                    },

                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                    color: "#ffffff",

                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ffffff",
                        borderWidth: "2px",
                    },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                       color: "#ffffff",
                       //fontWeight: "bold",
                    },

                     "&:hover:not(.Mui-focused)": {
                        "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ffffff",
                        },
                    },

                    marginBottom:"2rem"
                }}
            />
            <Button 
                type="submit" variant="contained" 
                 sx={{
                      
                      color: "white",
                      borderColor:palette.tertiary[600],
                      backgroundColor:palette.tertiary[600],
                       '&:hover': {
                            backgroundColor: palette.tertiary[300],
                            // boxShadow: 'none',
                        },
                  }}
                                                 
            >
               Submit
            </Button>
          
        </form>
    </div>
  )
}

export default CreateProductForm