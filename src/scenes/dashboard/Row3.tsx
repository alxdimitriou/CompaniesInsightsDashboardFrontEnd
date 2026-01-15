import DashboardGraph from '../../components/DashboardGraph'
import { DataGrid } from '@mui/x-data-grid';
import BoxHeader from '../../components/BoxHeader';
import useLowStockProductsNotifications from '../../hooks/useLowStockProductsNotifications';
import { useTheme } from '@mui/material';

const Row3 = () => {

  const { palette} = useTheme();

  // const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)")

  // api requests
//  isLoading : lowStcokProductsNotificationsLoading, 
//               error: lowStcokProductsNotificationsError 
  const { data: lowStcokProductsNotificationsData }  = useLowStockProductsNotifications();        

 const columns = [
  { 
    field: 'productId', 
    headerName: 'ProductId',
    //used in order so every column
    //stretches for screens that are bigger
    //regarding the min width we have setted
    flex:1, 
    minWidth: 600,
    sortable: true,
    filterable: true,
    resizable: false,
  },
  {
    field: 'productName',
    headerName: 'ProductName',
    flex:1,
    minWidth: 600,
    sortable: true,
    filterable: true,
    resizable: false,
    
  },
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    //width: 500,
    flex:1,
    minWidth: 500,
    sortable: true,
    filterable: true,
    resizable: false,
    cellClassName: 'price-column--cell',
    headerClassName: 'price-column--header'
  }
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  // },
];

  const rows = 
    lowStcokProductsNotificationsData?.data.map(({id, productId, productName, createdAt }) => (
      {
        id,
        productId,
        productName, 
        createdAt : new Date(createdAt).toLocaleDateString()
      }
    ));

  return (
    <div className=''>
     <DashboardGraph height={330} gridArea = "lowStockNotification">
  
          <div className='pt-1'>
              <BoxHeader
                  title='Low Stock Products Notifications'
                  //sideText='+4%' 
              />
          </div>
          
          <div className=''>
                
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      
                      paginationModel: {
                        pageSize: 10,
                        
                      },
                    },
                  }}

                  pageSizeOptions={[10]}
                  
                  //checkboxSelection
                  disableRowSelectionOnClick

                  //slots={{ columnMenu: CustomColumnMenu }} 
                  disableColumnMenu
                  sx={{
                    //flex: 1, // Fills remaining space
                    mx: 2, // marginLeft + marginRight
                    my: 1, // marginTop + marginBottom
                    height: 270, // Let flexbox handle height
                    //overflow:"scroll",
                    background: '#2d2d34',
                    border: 'none',
                
                    //display the coloumn separator 
                    //only for the Price column at the end
                    '& .price-column--header .MuiDataGrid-columnSeparator': {
                      display: 'none',
                    },

                    '& .MuiDataGrid-filler' :{
                                      bgcolor: '#2d2d34'
                                  },

                    "& .MuiDataGrid-menu":
                    {
                        color:'white',
                        visibility: "hidden"
                    },

                    "& .MuiDataGrid-sortIcon": {
                        //opacity: 'inherit !important',
                        color: 'white'
                    },

                    // '& .MuiDataGrid-columnHeaders .MuiDataGrid-filler': {
                    //     backgroundColor: palette.background.light, 
                    //     width:0
                    //   },


                    '& .MuiDataGrid-columnHeader': {
                      backgroundColor: '#2d2d34',
                      color: 'white',
                    },

                // '& .MuiDataGrid-columnHeadersInner': {
                //   backgroundColor: '#ff0000 !important',
                // },

      
                //we need this when we specify outline colour
                //which causes problems
                // '& .MuiDataGrid-filler': {
                //   backgroundColor: ` !important`,
                // },

                //this a the right end of the header
                //and it creates a white part
                //if we do not change its colour
                //we use important in order to override other styles
                '& .MuiDataGrid-scrollbarFiller':
                {
                    backgroundColor: ` ${'#2d2d34'} !important`,
                },

                    
                    // '& .MuiDataGrid-filler': {
                    //   backgroundColor: palette.background.light, // 👈 fixes the white gap
                    // },

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
                    
                    //this is for when hovering on each row
                    '& .MuiDataGrid-cell': {
                      //backgroundColor: "blue",
                      color: "white",
                      //fontWeight: 100,
                    },
                                    
                    // // Remove outlines
                    // "& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader": {
                    //   outline: "none !important",
                    // },

                    //this sx targets the TablePagination component
                    //which is used underneath the DataGrid 
                    //to display the pagination
                    "& .MuiTablePagination-displayedRows": {
                      color: "white",
                    },

                    "& .MuiTablePagination-actions":{
                      color: "white"
                    },

                    // '& .MuiDataGrid-columnHeaders': {
                    //     position: "sticky",
                    //     // Replace background colour if necessary
                    //     backgroundColor: palette.background.light,
                    //     // Display header above grid data, but below any popups
                    //     //zIndex: theme.zIndex.mobileStepper - 1,
                    // },

                    // Scrollbar styling - CORRECT SELECTORS
                    "& ::-webkit-scrollbar": {
                      width: "8px",
                      height: "8px",
                    },
                    "& ::-webkit-scrollbar-track": {
                      background: palette.background.default,
                    },
                    "& ::-webkit-scrollbar-thumb": {
                      backgroundColor: palette.grey[700],
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: palette.grey[600],
                      }
                    },
                    "& ::-webkit-scrollbar-corner": {
                      background: palette.background.default,
                    },

                    // //because in the pagination
                    // //a second scroll thumb is appeared
                    "& .MuiTablePagination-root, ::-webkit-scrollbar-thumb":{
                      overflow: "hidden"
                    }
              
                  }}
                />
             
          </div>

          
         </DashboardGraph>
    </div>
  )
}

export default Row3