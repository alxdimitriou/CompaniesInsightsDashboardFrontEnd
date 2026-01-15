import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import {
  DataGrid,
  type GridColDef,
  GridActionsCellItem,
} from '@mui/x-data-grid';
import { CircularProgress, useTheme } from '@mui/material';
import { useProduct } from '../../hooks/useProduct';
import { useMemo, useState } from 'react';
import { EditProductDialog } from './EditProductDialog';

interface ProductRow {
        id: string | undefined;
        name: string;
        price: number;
}

const ViewEditProduct = () => {

    const { data: productData, 
        isLoading : isPoductDataLoading, 
         refetch}  = useProduct();   

    const rows = useMemo<ProductRow[]>(() =>
    {
        return productData ?
        productData.data.map(({ id, name, price  }) : ProductRow =>
            ({
                id,
                name,
                price,
            })) : [];   

       
    }, [productData]);   

    const { palette} = useTheme();

    const [selectedProduct, setSelectedProduct] = useState<ProductRow | null>(null);
    const [open, setOpen] = useState(false);

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', type:"string", width: 260, editable: false },
        {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 250,
        align: 'left',
        headerAlign: 'left',
        editable: false,
        },
        {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 240,
        cellClassName: 'actions',
        resizable: false,
        getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => {
            setSelectedProduct(params.row);
            setOpen(true);
          }}
        />
      ]

        },
    ];

    return (
                <Box
                    sx={{
                        height: 500,
                        // width: '10%',
                    }}
                >
                {isPoductDataLoading === true
                 ? (
                        <div className="flex h-[400px] items-center justify-center">

                                 <CircularProgress/>
                           
                        </div>                        
                  ) 
                : 
                  (
                    <>
                      <DataGrid
                                disableColumnResize={true}
                                disableRowSelectionOnClick
                                rows={rows ?? []}
                                getRowId={(rows) => rows?.id}
                                columns={columns}
                                //editMode="row"
                                //rowModesModel={rowModesModel}
                                //onRowModesModelChange={handleRowModesModelChange}
                                //onRowEditStop={handleRowEditStop}
                                //loading={isPoductDataLoading}       
                                showToolbar
                                disableColumnSelector={true} //disables columns filter
                                sx={{

                                    '& .MuiDataGrid-columnHeader': {
                                        backgroundColor: '#2d2d34',
                                        color: 'white',
                                    },

                                    '& .MuiDataGrid-filler' :{
                                        bgcolor: '#2d2d34'
                                    },

                                    //this is used for when hovering on each cell
                                    '& .MuiDataGrid-cell:hover': {
                                        backgroundColor: palette.grey[800],
                                        //color: palette.grey[800],
                                    },

                                    //this is for when hovering on each row
                                    '& .MuiDataGrid-row:hover': {
                                        backgroundColor: palette.grey[800],
                                        //color: palette.grey[800],
                                    },

                                    bgcolor: '#2d2d34',
                                    color:"white",

                                    "& .MuiTablePagination-displayedRows": {
                                        color: "white",
                                    },

                                    "& .MuiTablePagination-actions":{
                                        color: "white"
                                    },

                                    // //because in the pagination
                                    // //a second scroll thumb is appeared
                                    "& .MuiTablePagination-root, ::-webkit-scrollbar-thumb":{
                                        overflow: "hidden"
                                    },

                                    "& .MuiSvgIcon-root ":{
                                        color:"white"
                                    },

                                    
                                    "& .MuiSelect-select ":{
                                        color:"white"
                                    },


                                    "& .MuiTablePagination-selectLabel":{
                                            color:"white"
                                    },

                                    // Target edit mode specifically
                                    '& .MuiDataGrid-editInputCell': {
                                            backgroundColor: '#2d2d34',
                                            '& .MuiInputBase-root': {
                                            backgroundColor: '#2d2d34',
                                            color: 'white',
                                            },
                                            '& .MuiInputBase-input': {
                                            backgroundColor: '#2d2d34',
                                            color: 'white',
                                            },
                                            '&:hover': {
                                            backgroundColor: palette.grey[800],
                                            '& .MuiInputBase-root': {
                                                backgroundColor: palette.grey[800],
                                            },
                                            },
                                    },

                                    '& .MuiInputBase-input': {
                                            backgroundColor: '#2d2d34',
                                            color: 'white',
                                    },
                                        
                                    // Target the editing cell container
                                    '& .MuiDataGrid-cell--editing': {
                                            backgroundColor: '#2d2d34',
                                            boxShadow: 'none',
                                    },

                                    // Target cells in edit mode (including actions cell)
                                    '& .MuiDataGrid-row--editing .MuiDataGrid-cell': {
                                        backgroundColor: '#2d2d34 !important',
                                        '&:hover': {
                                            backgroundColor: `${palette.grey[800]} !important`,
                                        },
                                    },

                                }}
                            />

                            ({
                            
                                selectedProduct && (

                                <EditProductDialog
                                    open={open}
                                    onClose={() => {
                                        setOpen(false);
                                        refetch();
                                    }}
                                    product={selectedProduct}
                                />
                                )
                            
                            })
                    </>
                  ) }
                                                 
            </Box>
    
        )
}

export default ViewEditProduct