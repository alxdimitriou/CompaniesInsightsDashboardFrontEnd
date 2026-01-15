import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField,
  InputAdornment,
  useTheme
} from "@mui/material";
import { useState } from "react";
import { useUpdateProduct } from '../../hooks/useUpdateProduct';

 interface ProductRow {
        id: string | undefined;
        name: string;
        price: number;
    }

export function EditProductDialog({
  open,
  onClose,
  product
}: {
  open: boolean;
  onClose: () => void;
  product: ProductRow;
}) {

    const { palette } = useTheme();
  
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const updateMutation = useUpdateProduct(); // react-query mutation

  function handleSubmit() {
    updateMutation.mutate(
      { id: product.id, name, price },
      {
        onSuccess: () => {


          onClose();
        }
      }
    );
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{backgroundColor: "#2d2d34"}}>Edit Product</DialogTitle>
      <DialogContent  sx={{
                        input: { color: 'white' },
                        '& .MuiInputLabel-root': { color: 'white' },
                        '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                        '& .MuiInputAdornment-root': { color: 'white' },
                    
                        '& .MuiTypography-root': { color: 'white' }, // euro typography fallback          
                        
                        backgroundColor: "#2d2d34",
                        //marginTop:"5rem"
                    }}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            marginTop:"1rem",
            marginRight:"0.5rem"
          }}
        />
        <TextField
          type="number"
          label="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          sx={{
            marginTop:"1rem",
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                        display: "none",
                    },
                    "& input[type=number]": {
                        MozAppearance: "textfield",
                    },
          }}
          slotProps={{
                    input: {
                        
                    endAdornment: 
                            <InputAdornment position="end">
                                €
                            </InputAdornment>         
                    },
                }}
        />
      </DialogContent>

      <DialogActions sx={{backgroundColor: "#2d2d34"}}>
        <Button onClick={onClose} >Cancel</Button>
        <Button 
            onClick={handleSubmit} 
            variant="contained" 
            sx={{
                '&:hover': {
                            backgroundColor: palette.tertiary[300],
                            // boxShadow: 'none',
                        },
            }}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
