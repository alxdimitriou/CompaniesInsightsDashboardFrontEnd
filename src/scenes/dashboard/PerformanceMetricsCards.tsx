import { Card, List, ListItem, Typography, useTheme } from '@mui/material'
import useRandomHighestRevenueMonth from '../../hooks/useRandomHighestRevenueMonth'
import useTopSellingProducts from '../../hooks/useTopSellingProducts';
import useAverageDailyOrderValue from '../../hooks/useAverageDailyOrderValue';
import useLowStockProductsNotificationsCounter from '../../hooks/useLowStockProductsNotificationsCounter';

const PerformanceMetricsCards = () => {

    const { data: lastHighestRevenueMonthData, 
            // error: lastHighestRevenueMonthError, 
            // isLoading: lastHighestRevenueMonthLoading
          } = useRandomHighestRevenueMonth();

    const { data: topSellingProductData, 
            // error: topSellingProductError,
            // isLoading: topSellingProductLoading
          } = useTopSellingProducts();

    const { data: averageDailyOrderValueData,
            // error: averageDailyOrderValueError,
            // isLoading: averageDailyOrderValueLoading
          } = useAverageDailyOrderValue();

    const { data: lowStockProductsNotificationsData,
            // error: lowStockProductsNotificationsError,
            // isLoading: lowStockProductNotificationsLoading
          } = useLowStockProductsNotificationsCounter();

    const { palette } = useTheme();

  return (
    // we are using flex grow so items grow
    //as the text grows
    <div className='flex grow'>

        {/* Highest Revenue Month Randomly Display One of three companies*/}
        <Card
                sx={{ 
                        bgcolor:"#484851" , 
                        height:"17rem", 
                        padding:"0.5rem", 
                        width:"20%",
                        marginTop:"2rem",
                        marginLeft:"1rem",
                        marginBottom:"2rem",
                    }}
                >
            
            <List  sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
              <ListItem sx={{
                //margin:"1px auto"
              }}>
                              
            <Typography variant="h2"  
                  sx={{
                    mt:'1rem',
                    color: palette.tertiary[600],
                    ml:'-0.5rem'
                  }}
                >
                  Highest Revenue Month 
            </Typography>

            </ListItem>

             <ListItem sx={{
                //margin:"1px auto"
              }}>
                
                
            <Typography variant="subtitle2"  
                  sx={{
                    mt:'-0.5rem',
                    color:"#808080",
                    ml:'-0.5rem'
                  }}
                >
                 {lastHighestRevenueMonthData?.data.monthName} ● Reffering to company in ● { lastHighestRevenueMonthData?.data.country}
            </Typography>

            
            </ListItem>
              
              <ListItem>
                <Typography variant="h1"  
                        sx={{
                            mt:'1rem',
                            ml:'-0.5rem',
                            color: palette.tertiary[600]
                        }}
                        >
                         { lastHighestRevenueMonthData?.data.revenue} €
                    </Typography>
              </ListItem>

                <ListItem>
                    <Typography variant="subtitle2"  
                            sx={{
                                mt:'1rem',
                                ml:'-0.5rem',
                                mb:"-1rem",
                                color:"#808080",
                            }}
                            >
                           {/* ▲ { "24%"} VS Last Month */}
                        </Typography>
                </ListItem>

            </List>
          </Card>


          {/* Top Selling Product */}
          <Card
                sx={{ 
                        bgcolor:"#484851" , 
                        height:"17rem", 
                        padding:"0.5rem", 
                        width:"20%",
                        marginTop:"2rem",
                        marginLeft:"1rem",
                        marginBottom:"2rem",
                    }}
                >
            
            <List  sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
              <ListItem sx={{
                //margin:"1px auto"
              }}>
                
                    <Typography variant="h2"  
                    sx={{
                        mt:'1rem',
                        color: palette.tertiary[600],
                        ml:'-0.5rem'
                    }}
                    >
                        Top Selling Product
                    </Typography>

            </ListItem>

            <ListItem>
                    <Typography variant="subtitle2"  
                        sx={{
                            mt:'-0.5rem',
                            color:"#808080",
                            ml:'-0.5rem'
                        }}
                    >
                        Top selling product counted based on daily purchases
                   </Typography>
            </ListItem>
              
            <ListItem>
                <Typography variant="h1"  
                        sx={{
                            mt:'1rem',
                            ml:'-0.5rem',
                            color: palette.tertiary[600]
                        }}
                        >
                            {topSellingProductData?.data.productName} - {topSellingProductData?.data.productCount}
                </Typography>
            </ListItem>

              <ListItem>
                
              </ListItem>

            </List>
          </Card>
      

      {/* Average daily order value */}
          <Card
                sx={{ 
                        bgcolor:"#484851" , 
                        height:"17rem", 
                        padding:"0.5rem", 
                        width:"20%",
                        marginTop:"2rem",
                        marginLeft:"1rem",
                        marginBottom:"2rem",
                    }}
                >
            
            <List  sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
              <ListItem sx={{
                //margin:"1px auto"
              }}>
                
                <Typography variant="h2"  
                  sx={{
                    mt:'1rem',
                    color: palette.tertiary[600],
                    ml:'-0.5rem'
                  }}
                >
                 Average Daily Order Value
            </Typography>

            </ListItem>

            <ListItem>
                    <Typography variant="subtitle2"  
                        sx={{
                            mt:'-0.5rem',
                            color:"#808080",
                            ml:'-0.5rem'
                        }}
                    >
                        Daily average spending cost of customers
                   </Typography>
            </ListItem>
              
              <ListItem>
                <Typography variant="h1"  
                        sx={{
                            mt:'1rem',
                            ml:'-0.5rem',
                            color: palette.tertiary[600]
                        }}
                        >
                        { averageDailyOrderValueData?.data} €
                    </Typography>
              </ListItem>

              <ListItem>
                
              </ListItem>

            </List>
          </Card>


          {/* Returning Customers Dummy*/}
          <Card
                sx={{ 
                        bgcolor:"#484851" , 
                        height:"17rem", 
                        padding:"0.5rem", 
                        width:"19%",
                        marginTop:"2rem",
                        marginLeft:"1rem",
                        marginBottom:"2rem",
                    }}
                >
            
            <List  sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
              <ListItem sx={{
                //margin:"1px auto"
              }}>
                
                <Typography variant="h2"  
                  sx={{
                    mt:'1rem',
                    color: palette.tertiary[600],
                    ml:'-0.5rem'
                  }}
                >
                  Returning Customers
            </Typography>

            </ListItem>

            <ListItem>
                    <Typography variant="subtitle2"  
                        sx={{
                            mt:'-0.5rem',
                            color:"#808080",
                            ml:'-0.5rem'
                        }}
                    >
                        Customers that select our companies again
                   </Typography>
            </ListItem>
              
              <ListItem>
                <Typography variant="h1"  
                        sx={{
                            mt:'1rem',
                            ml:'-0.5rem',
                            color: palette.tertiary[600]
                        }}
                        >
                        { 150} 
                    </Typography>
              </ListItem>

              <ListItem>
                
              </ListItem>

            </List>
          </Card>

          {/* Low Product Stock Notifications */}
          <Card
                sx={{ 
                        bgcolor:"#484851" , 
                        height:"17rem", 
                        padding:"0.5rem", 
                        width:"25%",
                        marginTop:"2rem",
                        marginLeft:"1rem",
                        marginBottom:"2rem",
                    }}
                >
            
            <List  sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
              <ListItem sx={{
                //margin:"1px auto"
              }}>
                
                    <Typography variant="h2"  
                    sx={{
                        mt:'1rem',
                        color: palette.tertiary[600],
                        ml:'-0.5rem'
                    }}
                    >
                        Low Product Stock Notifications
                    </Typography>

            </ListItem>

            <ListItem>
                    <Typography variant="subtitle2"  
                        sx={{
                            mt:'-0.5rem',
                            color:"#808080",
                            ml:'-0.5rem'
                        }}
                    >
                        Low Product Stock Notifications across countries
                   </Typography>
            </ListItem>
              
              <ListItem>
                    <Typography variant="h1"  
                        sx={{
                            mt:'1rem',
                            ml:'-0.5rem',
                            color: palette.tertiary[600]
                        }}
                        >
                        { lowStockProductsNotificationsData?.data} 
                    </Typography>
              </ListItem>

            </List>
          </Card>
      
      {/* {
       props.numberOfMonths >= 3 && 
      
        <Card
            sx={{ 
                    bgcolor:" #484851" , 
                    height:"12rem", 
                    padding:"1rem", 
                    width:"20%",
                    marginTop:"2rem",
                    marginLeft:"1rem",
                    marginBottom:"2rem"
                }}
            >
        <List  sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
          <ListItem sx={{
            
          }}>
            
          </ListItem>    

        </List>
        <CardActions sx={{
          
        }}>

          { 
            
            <Button  variant="outlined" 
                       size="large"
                      //onClick={createProductHandleOpen}
                  sx={{
                      
                      color: palette.tertiary[600],
                      borderColor:palette.tertiary[600],
                      position: 'relative', //center button at center of card
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, 10%)',
                      marginRight:"1rem"
                  }}

              >
                    Predict Three Next Months
              </Button>
          }

          
        </CardActions>
      </Card>
      } */}

      
    </div>
  )
}

export default PerformanceMetricsCards