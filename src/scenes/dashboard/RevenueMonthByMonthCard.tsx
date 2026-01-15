import { Card, List, ListItem, Typography, useTheme } from '@mui/material'

type Props = {
    id:number,
    monthName: string,
    revenue: number,
    numberOfMonths: number
}

const RevenueMonthByMonthCard = (props: Props) => {

    const {monthName, revenue} = props;
    const { palette } = useTheme();

  return (
    // we are using flex grow so items grow
    //as the text grows
    <div className='grow'>

      {props.numberOfMonths >= 1 
       ?(
          <Card
                sx={{ 
                        bgcolor:"#484851" , 
                        height:"15rem", 
                        padding:"0.5rem", 
                        width:"110%",
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
                  Month: {monthName ?? "-"}
            </Typography>

            </ListItem>
              
              <ListItem>
                <Typography variant="h2"  
                        sx={{
                            mt:'1rem',
                            ml:'-0.5rem',
                            color: palette.tertiary[600]
                        }}
                        >
                        Revenue: {revenue ?? 0} €
                    </Typography>
              </ListItem>

              <ListItem>
                
              </ListItem>

            </List>
          </Card>
       )
       :(  
        <div className="relative w-full h-[300px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Typography variant="h1"  
                            sx={{
                              color: palette.tertiary[600]
                            }}
                          >
                          There are no available data.
                      </Typography>
          </div>
        </div>
        
       )
      }
      
        {/* we can predict next months only when
            data available are more than 3 months */}
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

export default RevenueMonthByMonthCard